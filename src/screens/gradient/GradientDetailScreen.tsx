import Layout from '@components/layouts/Layout';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import React from 'react';
import { Text } from 'react-native';

type Props = NavigationScreenProps<'Detail'>;

const GradientDetailScreen: React.FC<Props> = () => {
  return (
    <Layout header whiteBackground gradient>
      <Text>Gradient Detail</Text>
    </Layout>
  );
};

export default React.memo(GradientDetailScreen);
