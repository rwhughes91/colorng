import { FirebaseContext } from '@context/FirebaseProvider';
import { useContext } from 'react';

const useFirebase = () => {
  const firebase = useContext(FirebaseContext);
  return firebase;
};

export default useFirebase;
