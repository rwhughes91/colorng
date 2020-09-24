import { useNavigation as useNavigationHook } from '@react-navigation/native';
import { Navigation } from '@typeDefs/index';
import { useCallback } from 'react';

function useNavigation<T extends object>(data: Navigation<T>) {
  const navigation = useNavigationHook();
  return useCallback(
    (params?: T) => {
      navigation.navigate(data.name, params || data.params);
    },
    [data.name, data.params, navigation]
  );
}

export default useNavigation;
