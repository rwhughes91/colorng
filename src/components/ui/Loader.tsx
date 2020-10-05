import { Colors } from '@styles/index';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loader: React.FC = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator animating size="large" color={Colors.BLUE} />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default React.memo(Loader);
