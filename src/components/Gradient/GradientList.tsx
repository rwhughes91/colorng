import { Mixins } from '@styles/index';
import { Gradients, Gradient } from '@typeDefs/index';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItem, StyleProp, ViewStyle, Animated } from 'react-native';

import GradientListItem from './GradientListItem';

interface Props {
  gradients: Gradients;
  iconSize?: number;
  listHeaderComponent?: any;
  styles?: StyleProp<ViewStyle> | Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  scrollEnabled?: boolean;
  animated?: boolean;
  onScroll?: () => void;
  overScrollMode?: 'never' | 'auto' | 'always';
  scrollEventThrottle?: number;
}

const GradientList: React.FC<Props> = (props) => {
  const renderItem: ListRenderItem<Gradient> = useCallback(
    ({ item, index }) => {
      return (
        <GradientListItem
          {...item}
          iconSize={props.iconSize || (Mixins.sizeResponse(24, 28) as number)}
          topBorder={index === 0}
        />
      );
    },
    [props.iconSize]
  );

  const config = {
    data: props.gradients,
    renderItem,
    keyExtractor: (_, index) => index.toString(),
    ListHeaderComponent: props.listHeaderComponent,
    contentContainerStyle: props.styles ? props.styles : undefined,
    scrollEnabled: props.scrollEnabled,
    onScroll: props.onScroll,
    overScrollMode: props.overScrollMode,
    scrollEventThrottle: props.scrollEventThrottle,
  };

  return !props.animated ? <FlatList {...config} /> : <Animated.FlatList {...config} />;
};

export default React.memo(GradientList);
