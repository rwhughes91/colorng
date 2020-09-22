import { Mixins } from '@styles/index';
import React from 'react';
import { StyleProp, View, ViewStyle, StyleSheet, TextStyle } from 'react-native';

import ColorItem from './ColorItem';

interface Props {
  items: { name: string; color: string }[];
  height: number;
  styles?: StyleProp<ViewStyle>;
  textStylesView?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  icon?: boolean;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

const ColorList: React.FC<Props> = (props) => {
  const listItemStyles: object = props.styles || {};
  const items = props.items.map((item, i) => {
    let additionalStyles = {};
    let colorStyles = {};
    if (i === 0) {
      additionalStyles = { borderTopWidth: 1 };
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
        styles={[listItemStyles, additionalStyles]}
        height={props.height}
        colorStyles={colorStyles}
        textStylesView={props.textStylesView}
        textStyles={props.textStyles}
      />
    );
  });
  return (
    <View style={[styles.colorList, { alignItems: props.alignItems || 'stretch' }]}>{items}</View>
  );
};

const styles = StyleSheet.create({
  colorList: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default React.memo(ColorList);
