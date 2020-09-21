import Layout from '@components/layouts/Layout';
import { NavigationScreenProps } from '@navigations/CreateNavigator';
import React from 'react';
import { Text, Button } from 'react-native';

type Props = NavigationScreenProps<'Create'>;

const CreateScreen: React.FC<Props> = (props) => {
  return (
    <Layout gradient>
      <Text>Create!</Text>
      <Button
        title="Image"
        onPress={() => {
          props.navigation.navigate('Image');
        }}
      />
      <Button
        title="Input"
        onPress={() => {
          props.navigation.navigate('Input');
        }}
      />
    </Layout>
  );
};

export default React.memo(CreateScreen);
