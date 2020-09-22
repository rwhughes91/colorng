import GradientCard from '@components/cards/GradientCard';
import HeaderWithInputTop from '@components/headers/HeaderWithInputTop';
import Layout from '@components/layouts/Layout';
import Carousel from '@components/ui/Carousel';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = NavigationScreenProps<'List'>;

const GradientListScreen: React.FC<Props> = () => {
  const items = [
    <GradientCard />,
    <GradientCard />,
    <GradientCard />,
    <GradientCard />,
    <GradientCard />,
    <GradientCard />,
  ];
  return (
    <Layout header gradient>
      <View style={styles.container}>
        <HeaderWithInputTop title="Today's Gradients" />
        <Carousel items={items} itemsPerInterval={1} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default React.memo(GradientListScreen);
