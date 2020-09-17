import { firebaseConfig } from 'environment';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export default class Firebase {
  static auth: firebase.auth.Auth;
  static firestore: firebase.firestore.Firestore;

  static init() {
    firebase.initializeApp(firebaseConfig);
    Firebase.auth = firebase.auth();
    Firebase.firestore = firebase.firestore();
    return this;
  }
}
