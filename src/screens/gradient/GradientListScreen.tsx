import Layout from '@components/layouts/Layout';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import React from 'react';
import { Text } from 'react-native';

type Props = NavigationScreenProps<'List'>;

const GradientListScreen: React.FC<Props> = () => {
  return (
    <Layout header gradient>
      <Text>Gradient List</Text>
    </Layout>
  );
};

export default React.memo(GradientListScreen);
