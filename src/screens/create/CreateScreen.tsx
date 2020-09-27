import CreateCard from '@components/cards/CreateCard';
import Header from '@components/layouts/Header/Header';
import Layout from '@components/layouts/Layout';
import { NavigationScreenProps } from '@navigations/CreateNavigator';
import React from 'react';

type Props = NavigationScreenProps<'Create'>;

const CreateScreen: React.FC<Props> = (props) => {
  return (
    <Layout gradient>
      <Header title={{ text: 'Create a Gradient', location: 'below' }} showInput />
      <CreateCard navigation={props.navigation} route={props.route} />
    </Layout>
  );
};

export default React.memo(CreateScreen);
