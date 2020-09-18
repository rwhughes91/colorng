import Layout from '@components/layouts/Layout';
import { NavigationScreenProps } from '@navigations/AppNavigator';
import React from 'react';
import { Text } from 'react-native';

type Props = NavigationScreenProps<'Saved'>;

const SavedScreen: React.FC<Props> = () => {
  return (
    <Layout>
      <Text>Saved!</Text>
    </Layout>
  );
};

export default React.memo(SavedScreen);
