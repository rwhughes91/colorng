import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from 'firebaseConfig';

export default class Firebase {
  static auth: firebase.auth.Auth;
  static firestore: firebase.firestore.Firestore;

  static init() {
    firebase.initializeApp(config);
    Firebase.auth = firebase.auth();
    Firebase.firestore = firebase.firestore();
    return this;
  }
}
