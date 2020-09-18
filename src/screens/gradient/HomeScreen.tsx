import Layout from '@components/layouts/Layout';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import React from 'react';
import { Text, Button } from 'react-native';

type Props = NavigationScreenProps<'Home'>;

const HomeScreen: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Text>Home!</Text>
      <Button
        title="Detail"
        onPress={() => {
          props.navigation.navigate('Detail');
        }}
      />
      <Button
        title="List"
        onPress={() => {
          props.navigation.navigate('List');
        }}
      />
      <Button
        title="Search"
        onPress={() => {
          props.navigation.navigate('Search');
        }}
      />
    </Layout>
  );
};

export default HomeScreen;
