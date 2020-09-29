import Firebase from '@services/firebase/client';
import { User } from 'firebase';
import React, { useState, useEffect } from 'react';

type FirebaseProviderType = {
  firebase: Firebase;
  user: null | User;
};

export const FirebaseContext = React.createContext<FirebaseProviderType | null>(null);

const FirebaseProvider: React.FC = (props) => {
  const [firebase, setFirebase] = useState<FirebaseProviderType>({
    firebase: Firebase.init(),
    user: null,
  });

  useEffect(() => {
    const unsubscribeAuth = Firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setFirebase({ firebase: Firebase, user });
      } else {
        setFirebase({ firebase: Firebase, user: null });
      }
    });
    return () => unsubscribeAuth();
  }, [firebase.user]);

  return <FirebaseContext.Provider value={firebase}>{props.children}</FirebaseContext.Provider>;
};

export default FirebaseProvider;
