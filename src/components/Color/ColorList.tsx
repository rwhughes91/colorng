import { Mixins, Colors } from '@styles/index';
import { Colors as ColorsType } from '@typeDefs/index';
import React from 'react';
import { StyleProp, ViewStyle, StyleSheet, TextStyle, FlatList, View } from 'react-native';

import ColorItem from './ColorItem';
interface Props {
  items: ColorsType;
  fill?: boolean;
  styles?: StyleProp<ViewStyle>;
  textStylesView?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  icon?: boolean;
  flatList?: boolean;
}

const ColorList: React.FC<Props> = (props) => {
  const listItemStyles: object = props.styles || {};
  const containerStyles = { ...styles.colorList, flex: props.fill ? 1 : 0 };
  const renderItem: (x: any) => any = ({ item, index }) => {
    let colorStyles = {};
    if (index === 0) {
      colorStyles = Mixins.roundCornersRadius('first', 3);
    }
    if (index === props.items.length - 1) {
      colorStyles = Mixins.roundCornersRadius('last', 3);
    }
    return (
      <ColorItem
        {...item}
        key={index}
        fill={props.fill}
        icon={props.icon}
        styles={listItemStyles}
        colorStyles={colorStyles}
        textStylesView={props.textStylesView}
        textStyles={props.textStyles}
      />
    );
  };
  return props.flatList ? (
    <FlatList
      data={props.items}
      contentContainerStyle={containerStyles}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
    />
  ) : (
    <View style={containerStyles}>
      {props.items.map((item, index) => {
        return renderItem({ item, index });
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  colorList: {
    marginTop: 10,
    borderColor: Colors.LIGHT_GRAY,
    borderTopWidth: 1,
  },
});

export default React.memo(ColorList);
