import { Mixins } from '@styles/index';
import { Gradients, Gradient } from '@typeDefs/index';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItem, StyleProp, ViewStyle, Animated } from 'react-native';

import EmptyGradientList from './EmptyGradientList';
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
  emptyGradientStyles?: StyleProp<ViewStyle>;
  emptyGradientText?: { title: string; body: string };
  icon?: 'forward' | 'delete';
  onItemPress?: () => void;
  onIconPress?: (x: string) => void;
  itemOpacity?: number;
}

const GradientList: React.FC<Props> = (props) => {
  const { onItemPress, onIconPress } = props;
  const renderItem: ListRenderItem<Gradient> = useCallback(
    ({ item, index }) => {
      return (
        <GradientListItem
          {...item}
          iconSize={props.iconSize || (Mixins.sizeResponse(24, 28) as number)}
          topBorder={index === 0}
          icon={props.icon}
          onItemPress={onItemPress}
          onIconPress={onIconPress}
          itemOpacity={props.itemOpacity}
        />
      );
    },
    [props.iconSize, props.icon, onIconPress, onItemPress, props.itemOpacity]
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

  if (props.gradients.length === 0) {
    return (
      <EmptyGradientList
        styles={props.emptyGradientStyles}
        title={props.emptyGradientText?.title}
        body={props.emptyGradientText?.body}
      />
    );
  }

  return !props.animated ? <FlatList {...config} /> : <Animated.FlatList {...config} />;
};

export default React.memo(GradientList);
