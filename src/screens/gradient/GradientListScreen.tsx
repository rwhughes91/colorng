import GradientCard from '@components/cards/GradientCard';
import Header from '@components/layouts/Header/Header';
import Layout from '@components/layouts/Layout';
import Carousel from '@components/ui/Carousel';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import { Gradients } from '@typeDefs/index';
import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = NavigationScreenProps<'List'>;

const colors = [
  { color: '#3C233C', name: 'Magenta' },
  { color: '#463B4D', name: 'Dark Gray Violet' },
  { color: '#688188', name: 'Gray Cyan' },
  { color: '#CCB58D', name: 'Beige' },
  { color: '#DFCC73', name: 'Gold' },
];

const gradients: Gradients = [
  { name: 'Architecture', description: 'Somber, serious, and mild', likes: 112, colors },
];

const GradientListScreen: React.FC<Props> = () => {
  const items = [
    <GradientCard {...gradients[0]} />,
    <GradientCard {...gradients[0]} />,
    <GradientCard {...gradients[0]} />,
    <GradientCard {...gradients[0]} />,
    <GradientCard {...gradients[0]} />,
    <GradientCard {...gradients[0]} />,
  ];
  return (
    <Layout header gradient>
      <View style={styles.container}>
        <Header title={{ text: "Today's Gradients", location: 'below' }} showInput />
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
