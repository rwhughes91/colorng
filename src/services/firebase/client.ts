import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { firebaseConfig } from '../../../environment';

export default class Firebase {
  static auth: firebase.auth.Auth;
  static db: firebase.firestore.Firestore;

  static init() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      this.auth = firebase.auth();
      this.db = firebase.firestore();
    }
    return this;
  }

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
}
