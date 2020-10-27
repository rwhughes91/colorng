import Loader from '@components/ui/Loader';
import { Colors } from '@styles/index';
import { Colors as ColorsType, Color } from '@typeDefs/index';
import React, { useCallback, useMemo } from 'react';
import { View, StyleProp, ViewStyle, StyleSheet, TextStyle, FlatList } from 'react-native';

import ColorItem from './ColorItem';
import EmptyColorList from './EmptyColorList';

interface Props {
  items: ColorsType & { focused?: boolean };
  fill?: boolean;
  styles?: StyleProp<ViewStyle>;
  textStylesView?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  containerStyles?: StyleProp<ViewStyle>;
  icon?: boolean;
  flatList?: boolean;
  colorsOnly?: boolean;
  noRadius?: boolean;
  customIcon?: React.ReactNode;
  listHeaderComponent?: any;
  emptyStyles?: StyleProp<ViewStyle>;
  checkmarkIcon?: boolean;
  iconPress?: (x: any) => void;
  emptyText?: { title: string; body: string };
  loading?: boolean;
  onSaveColorHandler: (name: string, hex: string, id: string) => void;
  onSelectItemHandler?: (color: Color) => void;
}

const ColorList: React.FC<Props> = (props) => {
  const loading = useMemo(() => {
    return (
      <View style={{ paddingVertical: 50 }}>
        <Loader />
      </View>
    );
  }, []);

  const customStyles = useMemo(() => {
    return {
      borderColor: Colors.LIGHT_GRAY,
      borderTopWidth: 1,
    };
  }, []);

  const aggStyles = useMemo(() => {
    return [customStyles, props.styles];
  }, [props.styles, customStyles]);

  const renderItem: (x: any) => any = useCallback(
    ({ item, index }) => {
      const borderStyles = props.flatList && index === 0 ? aggStyles : props.styles;
      return (
        <ColorItem
          {...item}
          key={item.hex}
          icon={props.icon}
          styles={borderStyles}
          colorStyles={!props.colorsOnly && !props.noRadius}
          textStylesView={props.textStylesView}
          textStyles={props.textStyles}
          colorOnly={props.colorsOnly}
          customIcon={props.customIcon}
          checkmarkIcon={props.checkmarkIcon}
          iconPress={props.iconPress}
          fill={props.fill}
          onSaveColorHandler={props.onSaveColorHandler}
          onSelectItemHandler={props.onSelectItemHandler}
        />
      );
    },
    [
      aggStyles,
      props.checkmarkIcon,
      props.colorsOnly,
      props.customIcon,
      props.fill,
      props.flatList,
      props.icon,
      props.iconPress,
      props.noRadius,
      props.styles,
      props.textStyles,
      props.textStylesView,
      props.onSaveColorHandler,
      props.onSelectItemHandler,
    ]
  );

  const keyExtractor = useCallback((item) => {
    return item.hex;
  }, []);

  if (props.items.length === 0) {
    return <EmptyColorList styles={props.emptyStyles} emptyText={props.emptyText} />;
  }

  return props.flatList ? (
    <FlatList
      data={props.items}
      contentContainerStyle={styles.colorList}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListHeaderComponent={props.listHeaderComponent}
      ListFooterComponent={props.loading ? loading : undefined}
      initialNumToRender={10}
    />
  ) : (
    <View
      style={[
        styles.colorList,
        { borderColor: Colors.LIGHT_GRAY, borderTopWidth: 1 },
        props.containerStyles,
        props.fill ? { flex: 1 } : null,
      ]}
    >
      {props.items.map((item, index) => {
        return renderItem({ item, index });
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  colorList: {
    overflow: 'hidden',
  },
});

export default React.memo(ColorList);
