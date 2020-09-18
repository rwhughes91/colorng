import Layout from '@components/layouts/Layout';
import { NavigationScreenProps } from '@navigations/CreateNavigator';
import React from 'react';
import { Text } from 'react-native';

type Props = NavigationScreenProps<'Image'>;

const CreateFromImageScreen: React.FC<Props> = () => {
  return (
    <Layout header whiteBackground>
      <Text>Create from Image!</Text>
    </Layout>
  );
};

export default React.memo(CreateFromImageScreen);
