import HeartIcon from '@components/icons/HeartIcon';
import Text from '@components/ui/text/Text';
import { Colors } from '@styles/index';
import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, TextStyle, Animated } from 'react-native';

import Color from './Color';

interface Props {
  name: string;
  hex: string;
  icon?: boolean;
  fill?: boolean;
  styles?: StyleProp<ViewStyle>;
  colorStyles?: StyleProp<ViewStyle>;
  textStylesView?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  colorOnly?: boolean;
  customIcon?: React.ReactNode;
}

const ColorItem: React.FC<Props> = (props) => {
  return (
    <Animated.View style={[styles.container, { flex: props.fill ? 1 : 0 }, props.styles]}>
      <Color
        color={props.hex}
        colorStyles={[props.colorStyles, { opacity: 1 }]}
        fill={props.fill}
        scaleVertical
      />
      {!props.colorOnly && (
        <View style={[styles.TextContainer, props.textStylesView]}>
          <Text color={Colors.BLUE} styles={props.textStyles}>
            {props.name}
          </Text>
          {props.icon && <HeartIcon size={24} focused={false} color={Colors.GRAY} />}
          {props.customIcon}
        </View>
      )}
    </Animated.View>
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
