import Firebase from '@services/firebase/client';
import * as actions from '@store/actions/index';
import { User } from 'firebase';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

type FirebaseProviderType = {
  firebase: Firebase;
  user: null | User;
};

export const FirebaseContext = React.createContext<FirebaseProviderType | null>(null);

const FirebaseProvider: React.FC = (props) => {
  const dispatch = useDispatch();
  const [firebase, setFirebase] = useState<FirebaseProviderType>({
    firebase: Firebase,
    user: null,
  });
  const authFlag = useRef(true);

  useEffect(() => {
    const unsubscribeAuth = Firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        if (authFlag.current) {
          setFirebase({ firebase: Firebase, user });
          dispatch(actions.fetchUsersGradientsAndColors(user.uid));
          authFlag.current = false;
        }
      } else {
        if (!authFlag.current) {
          setFirebase({ firebase: Firebase, user: null });
          dispatch(actions.clearLists());
          authFlag.current = true;
        }
      }
    });
    return () => unsubscribeAuth();
  }, [firebase.user, dispatch]);

  return <FirebaseContext.Provider value={firebase}>{props.children}</FirebaseContext.Provider>;
};

export default FirebaseProvider;
