import Loader from '@components/ui/Loader';
import { Mixins } from '@styles/index';
import { Gradients, Gradient } from '@typeDefs/index';
import React, { useCallback, useMemo } from 'react';
import { FlatList, ListRenderItem, StyleProp, ViewStyle, Animated, View } from 'react-native';

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
  onItemPress?: (x?: any) => void;
  onIconPress?: (x: string) => void;
  itemOpacity?: number;
  loading?: boolean;
  onRefresh?: () => void;
  refreshing?: boolean;
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

  const keyExtractor = useCallback((item) => {
    return item.id;
  }, []);

  const loading = useMemo(() => {
    return (
      <View style={{ marginTop: 50 }}>
        <Loader />
      </View>
    );
  }, []);

  const config = {
    data: props.gradients,
    renderItem,
    keyExtractor,
    ListHeaderComponent: props.listHeaderComponent,
    contentContainerStyle: props.styles ? props.styles : undefined,
    scrollEnabled: props.scrollEnabled,
    onScroll: props.onScroll,
    overScrollMode: props.overScrollMode,
    scrollEventThrottle: props.scrollEventThrottle,
    ListEmptyComponent: loading,
    onRefresh: props.onRefresh,
    refreshing: props.refreshing,
    initialNumToRender: 10,
  };

  if (props.gradients.length === 0 && !props.loading) {
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
