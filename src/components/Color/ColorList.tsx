import { Mixins, Colors } from '@styles/index';
import { Colors as ColorsType } from '@typeDefs/index';
import React from 'react';
import { StyleProp, View, ViewStyle, StyleSheet, TextStyle } from 'react-native';

import ColorItem from './ColorItem';
interface Props {
  items: ColorsType;
  fill?: boolean;
  styles?: StyleProp<ViewStyle>;
  textStylesView?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  icon?: boolean;
}

const ColorList: React.FC<Props> = (props) => {
  const listItemStyles: object = props.styles || {};
  const items = props.items.map((item, i) => {
    let colorStyles = {};
    if (i === 0) {
      colorStyles = Mixins.roundCornersRadius('first', 3);
    }
    if (i === props.items.length - 1) {
      colorStyles = Mixins.roundCornersRadius('last', 3);
    }

    return (
      <ColorItem
        key={i}
        name={item.name}
        color={item.color}
        icon={props.icon}
        styles={listItemStyles}
        fill={props.fill}
        colorStyles={colorStyles}
        textStylesView={props.textStylesView}
        textStyles={props.textStyles}
      />
    );
  });
  return (
    <View
      style={[
        styles.colorList,
        {
          flex: props.fill ? 1 : 0,
        },
      ]}
    >
      {items}
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
