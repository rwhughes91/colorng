import Layout from '@components/layouts/Layout';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import React from 'react';
import { Text } from 'react-native';

type Props = NavigationScreenProps<'Search'>;

const GradientSearch: React.FC<Props> = () => {
  return (
    <Layout header whiteBackground>
      <Text>Gradient Search</Text>
    </Layout>
  );
};

export default React.memo(GradientSearch);
