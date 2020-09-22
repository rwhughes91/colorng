import HeartIcon from '@components/icons/HeartIcon';
import { Colors, Typography } from '@styles/index';
import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface Props {
  name: string;
  color: string;
  height: number;
  icon?: boolean;
  styles?: StyleProp<ViewStyle>;
  colorStyles?: StyleProp<ViewStyle>;
  textStylesView?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
}

const ColorItem: React.FC<Props> = (props) => {
  return (
    <View style={[styles.container, { paddingLeft: props.height * 1.5 }, props.styles]}>
      <View style={[styles.color, props.colorStyles, { backgroundColor: props.color }]} />
      <View style={[styles.TextContainer, props.textStylesView]}>
        <Text style={[styles.name, props.textStyles]}>{props.name}</Text>
        {props.icon && <HeartIcon size={24} focused={false} color={Colors.GRAY} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: Colors.LIGHT_GRAY,
    borderBottomWidth: 1,
  },
  color: {
    position: 'absolute',
    height: '100%',
    aspectRatio: 1,
  },
  name: {
    color: Colors.BLUE,
    fontSize: Typography.FONT_SIZE_16,
    ...Typography.FONT_REGULAR,
  },
  TextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default React.memo(ColorItem);
