import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { firebaseConfig } from '../../../environment';

export default class Firebase {
  static auth: firebase.auth.Auth;
  static firestore: firebase.firestore.Firestore;

  static init() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      Firebase.auth = firebase.auth();
      Firebase.firestore = firebase.firestore();
    }
    return { auth: Firebase.auth, firestore: Firebase.firestore };
  }
}
