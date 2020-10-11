import CreateCard from '@components/cards/CreateCard';
import EditIcon from '@components/icons/EditIcon';
import Header from '@components/layouts/Header/Header';
import Layout from '@components/layouts/Layout';
import useFirebase from '@hooks/useFirebase';
import { NavigationScreenProps } from '@navigations/CreateNavigator';
import React, { useEffect, useLayoutEffect } from 'react';
import { Alert } from 'react-native';

type Props = NavigationScreenProps<'Create'>;

const CreateScreen: React.FC<Props> = (props) => {
  const firebase = useFirebase();

  useLayoutEffect(() => {
    if (firebase?.user) {
      props.navigation.setOptions({
        headerRight: () => (
          <EditIcon size={24} color="white" onPress={() => props.navigation.navigate('Edit')} />
        ),
      });
    }
  }, [firebase?.user, props.navigation]);

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
