import { WhereFilterOp } from '@google-cloud/firestore';
import Gradient from '@models/Gradient';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { firebaseConfig } from '../../../environment';

let auth: firebase.auth.Auth;
let db: firebase.firestore.Firestore;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  auth = firebase.auth();
  db = firebase.firestore();
}

type UsersArrays = 'savedGradients' | 'savedColors' | 'createdGradients';

export default class Firebase {
  static auth = auth;
  static db = db;

  static logout() {
    return this.auth.signOut();
  }

  static login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  static signUp(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  static sendResetToken(email: string) {
    return this.auth.sendPasswordResetEmail(email);
  }

  static async paginateDataArray<T>(
    collection: string,
    conditions: { field: string; operator: WhereFilterOp; eq: any }[],
    orderBy = 'likes',
    limit = 50,
    startAt = 0
  ): Promise<(T & { id: string })[]> {
    const ref = this.db.collection(collection);
    let snapshot = ref.where(conditions[0].field, conditions[0].operator, conditions[0].eq);
    for (const condition of conditions.slice(1)) {
      snapshot = snapshot.where(condition.field, condition.operator, condition.eq);
    }
    const docs = await snapshot.orderBy(orderBy, 'desc').startAt(startAt).limit(limit).get();

    if (docs.empty) {
      return [];
    }
    const dataArray: (T & { id: string })[] = [];
    docs.forEach((gradient) => {
      dataArray.push({ ...gradient.data(), id: gradient.id } as T & { id: string });
    });
    return dataArray;
  }

  static async getDataArray<T>(
    collection: string,
    condition?: { field: string; operator: WhereFilterOp; eq: any }
  ): Promise<(T & { id: string })[]> {
    const ref = this.db.collection(collection);
    let snapshot;
    if (condition) {
      snapshot = await ref.where(condition.field, condition.operator, condition.eq).get();
    } else {
      snapshot = await ref.get();
    }
    if (snapshot.empty) {
      return [];
    }
    const dataArray: (T & { id: string })[] = [];
    snapshot.forEach((gradient) => {
      dataArray.push({ ...gradient.data(), id: gradient.id } as T & { id: string });
    });
    return dataArray;
  }

  static async getDataItem<T>(
    collection: string,
    document: string
  ): Promise<(T & { id: string }) | null> {
    const ref = this.db.collection(collection).doc(document);
    const doc = await ref.get();
    if (!doc.exists) {
      return null;
    }
    return { ...doc.data(), id: doc.id } as T & { id: string };
  }

  static async setUserData<T>(uid: string, key: string, value: T) {
    const ref = this.db.collection('users').doc(uid);
    try {
      await ref.update({ [key]: value });
      return true;
    } catch (error) {
      throw new Error(`Could not update user's (${uid}) data`);
    }
  }

  static async appendUserData<T>(uid: string, key: UsersArrays, value: T[]) {
    const ref = this.db.collection('users').doc(uid);
    const doc = await ref.get();
    if (doc.exists) {
      try {
        await ref.update({
          [key]: firebase.firestore.FieldValue.arrayUnion(...JSON.parse(JSON.stringify(value))),
        });
        return true;
      } catch (error) {
        throw new Error(`Could not update user's (${uid}) data. ${error.message}`);
      }
    } else {
      try {
        ref.set({
          [key]: value,
        });
      } catch (error) {
        throw new Error(`Could not set user's (${uid}) data`);
      }
    }
  }

  static async removeItemFromUsersArray(uid: string, key: UsersArrays, id: string) {
    const ref = this.db.collection('users').doc(uid);
    const doc = await ref.get();
    if (doc.exists) {
      try {
        const arrayToFilter = doc.data()![key] as any[];
        const filteredArray = arrayToFilter.filter((item) => item.id !== id);
        await ref.update({ [key]: filteredArray });
        return true;
      } catch (error) {
        throw new Error(error.message);
      }
    }
    return false;
  }

  static async addGradient(gradient: Gradient): Promise<string> {
    const res = await this.db.collection('gradients').add(
      JSON.parse(
        JSON.stringify({
          ...gradient,
          createdAt: firebase.firestore.Timestamp.now(),
        })
      )
    );
    return res.id;
  }

  static async removeGradient(id: string): Promise<boolean> {
    try {
      await this.db.collection('gradients').doc(id).delete();
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
