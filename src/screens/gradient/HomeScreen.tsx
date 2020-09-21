import ExploreHeader from '@components/headers/ExploreHeader';
import Layout from '@components/layouts/Layout';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = NavigationScreenProps<'Home'>;

const HomeScreen: React.FC<Props> = () => {
  return (
    <Layout gradient>
      <View style={styles.container}>
        <ExploreHeader title="Explore Colors" />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '75%',
  },
});

export default React.memo(HomeScreen);
