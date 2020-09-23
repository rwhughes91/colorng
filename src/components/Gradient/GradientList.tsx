import { Mixins } from '@styles/index';
import { Gradients } from '@typeDefs/index';
import React, { useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import GradientListItem from './GradientListItem';

interface Props {
  gradients: Gradients;
  iconSize?: number;
}

const GradientList: React.FC<Props> = (props) => {
  const renderItem = useCallback(
    ({ item }) => (
      <GradientListItem
        {...item}
        iconSize={props.iconSize || (Mixins.sizeResponse(24, 28) as number)}
      />
    ),
    [props.iconSize]
  );
  return (
    <FlatList
      data={props.gradients}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.gradientList}
    />
  );
};

const styles = StyleSheet.create({
  gradientList: {
    flex: 1,
  },
});

export default React.memo(GradientList);
