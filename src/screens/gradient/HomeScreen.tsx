import CreateGradientCard from '@components/cards/CreateGradientCard';
import FavoritesCard from '@components/cards/FavoritesCard';
import TodaysGradientsCard from '@components/cards/TodaysGradientsCard';
import Header from '@components/layouts/Header';
import Layout from '@components/layouts/Layout';
import Carousel from '@components/ui/Carousel';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = NavigationScreenProps<'Home'>;

const HomeScreen: React.FC<Props> = () => {
  const cards = [<TodaysGradientsCard />, <FavoritesCard />, <CreateGradientCard />];
  return (
    <Layout gradient>
      <View style={styles.container}>
        <Header title={{ text: 'Explore Colors', location: 'below' }} showInput />
        <Carousel items={cards} itemsPerInterval={1} />
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

export default React.memo(HomeScreen);
