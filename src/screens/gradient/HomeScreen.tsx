import CreateGradientCard from '@components/cards/CreateGradientCard';
import FavoritesCard from '@components/cards/FavoritesCard';
import TodaysGradientsCard from '@components/cards/TodaysGradientsCard';
import Header from '@components/layouts/Header/Header';
import Layout from '@components/layouts/Layout';
import Carousel from '@components/ui/Carousel';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import React from 'react';
import { Button } from 'react-native';

type Props = NavigationScreenProps<'Home'>;

const HomeScreen: React.FC<Props> = (props) => {
  const cards = [<TodaysGradientsCard />, <FavoritesCard />, <CreateGradientCard />];
  return (
    <Layout gradient>
      <Header title={{ text: 'Explore Colors', location: 'below' }} showInput />
      <Carousel items={cards} itemsPerInterval={1} />
      <Button title="test" onPress={() => props.navigation.navigate('Test')} />
    </Layout>
  );
};

export default React.memo(HomeScreen);
