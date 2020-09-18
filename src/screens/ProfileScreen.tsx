import Layout from '@components/layouts/Layout';
import { NavigationScreenProps } from '@navigations/AppNavigator';
import React from 'react';
import { Text } from 'react-native';

type Props = NavigationScreenProps<'Profile'>;

const ProfileScreen: React.FC<Props> = () => {
  return (
    <Layout>
      <Text>Settings!</Text>
    </Layout>
  );
};

export default React.memo(ProfileScreen);
