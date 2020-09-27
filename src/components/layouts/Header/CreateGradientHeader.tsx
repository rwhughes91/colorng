import SearchInput from '@components/ui/inputs/SearchInput';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import styles from './HeaderStyles';

const CreateGradientHeader: React.FC = () => {
  return (
    <View style={[styles.header, { justifyContent: 'space-around' }]}>
      <SearchInput noIcon inputStyles={headerStyles.input} placeholder="Name" />
      <SearchInput noIcon inputStyles={headerStyles.input} placeholder="Description" />
    </View>
  );
};

const headerStyles = StyleSheet.create({
  input: {
    textAlign: 'center',
  },
});

export default React.memo(CreateGradientHeader);
