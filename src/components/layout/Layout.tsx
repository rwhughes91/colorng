import { Colors } from '@styles/index';
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

const Layout: React.FC = (props) => {
  return (
    <View style={styles.layout}>
      <SafeAreaView>{props.children}</SafeAreaView>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: Colors.PEACH,
  },
});
