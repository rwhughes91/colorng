import CreateCard from '@components/cards/CreateCard';
import Header from '@components/layouts/Header/Header';
import Layout from '@components/layouts/Layout';
import { NavigationScreenProps } from '@navigations/CreateNavigator';
import React, { useEffect } from 'react';
import { Alert } from 'react-native';

type Props = NavigationScreenProps<'Create'>;

const CreateScreen: React.FC<Props> = (props) => {
  useEffect(() => {
    if (props.route.params && props.route.params.error) {
      Alert.alert(props.route.params.error);
    }
  }, [props.route.params]);

  return (
    <Layout gradient header>
      <Header title={{ text: 'Create a Gradient', location: 'below' }} showInput />
      <CreateCard navigation={props.navigation} route={props.route} />
    </Layout>
  );
};

export default React.memo(CreateScreen);
