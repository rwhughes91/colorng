import Layout from '@components/layouts/Layout';
import { NavigationScreenProps } from '@navigations/CreateNavigator';
import React from 'react';
import { Text } from 'react-native';

type Props = NavigationScreenProps<'Input'>;

const CreateFromInputScreen: React.FC<Props> = () => {
  return (
    <Layout header whiteBackground>
      <Text>Create From Input!</Text>
    </Layout>
  );
};

export default React.memo(CreateFromInputScreen);
