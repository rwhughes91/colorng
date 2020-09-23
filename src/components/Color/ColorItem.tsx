import HeartIcon from '@components/icons/HeartIcon';
import Text from '@components/ui/text/Text';
import { Colors } from '@styles/index';
import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

import Color from './Color';

interface Props {
  name: string;
  color: string;
  icon?: boolean;
  fill?: boolean;
  styles?: StyleProp<ViewStyle>;
  colorStyles?: StyleProp<ViewStyle>;
  textStylesView?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
}

const ColorItem: React.FC<Props> = (props) => {
  return (
    <View style={[styles.container, { flex: props.fill ? 1 : 0 }, props.styles]}>
      <Color color={props.color} colorStyles={props.colorStyles} fill={props.fill} scaleVertical />
      <View style={[styles.TextContainer, props.textStylesView]}>
        <Text color={Colors.BLUE} styles={props.textStyles}>
          {props.name}
        </Text>
        {props.icon && <HeartIcon size={24} focused={false} color={Colors.GRAY} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  TextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    borderColor: Colors.LIGHT_GRAY,
    borderBottomWidth: 1,
  },
});

export default React.memo(ColorItem);
