import { Colors } from '@styles/index';
import { Colors as ColorsType } from '@typeDefs/index';
import React from 'react';
import { View, StyleProp, ViewStyle, StyleSheet, TextStyle, FlatList } from 'react-native';

import ColorItem from './ColorItem';
interface Props {
  items: ColorsType;
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
}

const ColorList: React.FC<Props> = (props) => {
  const listItemStyles: object = props.styles || {};
  const containerStyles = { ...styles.colorList, flex: props.fill ? 1 : 0 };
  const renderItem: (x: any) => any = ({ item, index }) => {
    const colorStyles = {};
    // if (index === 0) {
    //   colorStyles = Mixins.roundCornersRadius('first', 3);
    // }
    // if (index === props.items.length - 1) {
    //   colorStyles = Mixins.roundCornersRadius('last', 3);
    // }
    return (
      <ColorItem
        {...item}
        key={index}
        fill={props.fill}
        icon={props.icon}
        styles={listItemStyles}
        colorStyles={!props.colorsOnly && !props.noRadius && colorStyles}
        textStylesView={props.textStylesView}
        textStyles={props.textStyles}
        colorOnly={props.colorsOnly}
        customIcon={props.customIcon}
      />
    );
  };
  return props.flatList ? (
    <FlatList
      data={props.items}
      contentContainerStyle={[containerStyles, { flex: 0 }]}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
    />
  ) : (
    <View style={[containerStyles, props.containerStyles]}>
      {props.items.map((item, index) => {
        return renderItem({ item, index });
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  colorList: {
    borderColor: Colors.LIGHT_GRAY,
    borderTopWidth: 1,
    overflow: 'hidden',
  },
});

export default React.memo(ColorList);
