import GradientCard from '@components/cards/GradientCard';
import HeaderWithInputTop from '@components/headers/HeaderWithInputTop';
import Layout from '@components/layouts/Layout';
import Carousel from '@components/ui/Carousel';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import { Colors } from '@typeDefs/index';
import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = NavigationScreenProps<'List'>;

const item: Colors = [
  { color: '#3C233C', name: 'Magenta' },
  { color: '#463B4D', name: 'Dark Gray Violet' },
  { color: '#688188', name: 'Gray Cyan' },
  { color: '#CCB58D', name: 'Beige' },
  { color: '#DFCC73', name: 'Gold' },
];

const GradientListScreen: React.FC<Props> = () => {
  const items = [
    <GradientCard colors={item} />,
    <GradientCard colors={item} />,
    <GradientCard colors={item} />,
    <GradientCard colors={item} />,
    <GradientCard colors={item} />,
    <GradientCard colors={item} />,
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
