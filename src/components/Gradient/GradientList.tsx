import { Mixins } from '@styles/index';
import { Gradients } from '@typeDefs/index';
import React, { useCallback } from 'react';
import { FlatList, StyleProp, ViewStyle } from 'react-native';

import GradientListItem from './GradientListItem';

interface Props {
  gradients: Gradients;
  iconSize?: number;
  listHeaderComponent?: any;
  styles?: StyleProp<ViewStyle>;
}

const GradientList: React.FC<Props> = (props) => {
  const renderItem = useCallback(
    ({ item, index }) => (
      <GradientListItem
        {...item}
        iconSize={props.iconSize || (Mixins.sizeResponse(24, 28) as number)}
        topBorder={index === 0}
      />
    ),
    [props.iconSize]
  );

  return (
    <FlatList
      data={props.gradients}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      ListHeaderComponent={props.listHeaderComponent}
      contentContainerStyle={props.styles}
    />
  );
};

export default React.memo(GradientList);
