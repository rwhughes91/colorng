import Layout from '@components/layouts/Layout';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import React from 'react';
import { Text } from 'react-native';

type Props = NavigationScreenProps<'Detail'>;

const GradientDetailScreen: React.FC<Props> = (props) => {
  const gradientColors = props.route?.params?.colors.map((color) => color.color);
  return (
    <Layout header whiteBackground gradient gradientColors={gradientColors}>
      <Text>Gradient Detail</Text>
    </Layout>
  );
};

export default React.memo(GradientDetailScreen);
