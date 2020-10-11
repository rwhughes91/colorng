import GradientCard from '@components/cards/GradientCard';
import Header from '@components/layouts/Header/Header';
import Layout from '@components/layouts/Layout';
import Carousel from '@components/ui/Carousel';
import Loader from '@components/ui/Loader';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import * as actions from '@store/actions/index';
import { Gradients } from '@typeDefs/index';
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

type Props = NavigationScreenProps<'List'>;

const GradientListScreen: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const todaysGradients = useSelector<{ gradient: { todaysGradients: Gradients } }, Gradients>(
    (state) => state.gradient.todaysGradients
  );
  const items = todaysGradients.map((gradient) => <GradientCard {...gradient} />);

  useEffect(() => {
    dispatch(actions.fetchTodaysGradients());
  }, [dispatch]);

  return (
    <Layout header gradient>
      <View style={styles.container}>
        <Header title={{ text: "Today's Gradients", location: 'below' }} showInput />
        {items.length > 0 ? <Carousel items={items} itemsPerInterval={1} /> : <Loader />}
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
