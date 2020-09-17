import Firebase from '@services/firebase/client';
import React, { useState } from 'react';

export const FirebaseContext = React.createContext<Firebase | null>(null);

const FirebaseProvider: React.FC = (props) => {
  const [firebase] = useState(Firebase.init());
  return <FirebaseContext.Provider value={firebase}>{props.children}</FirebaseContext.Provider>;
};

export default FirebaseProvider;
