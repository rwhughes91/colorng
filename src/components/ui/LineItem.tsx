import Text from '@components/ui/text/Text';
import { Colors, Globals } from '@styles/index';
import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, TouchableHighlight } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';

interface Props {
  text: string;
  color?: string;
  size?: number;
  icon?: React.ReactNode;
  styles?: StyleProp<ViewStyle>;
}

const LineItem: React.FC<Props> = (props) => {
  return (
    <TouchableHighlight
      underlayColor="rgba(0, 0, 0, .05)"
      onPress={() => {}}
      style={{ width: '100%', alignItems: 'center' }}
    >
      <View style={[styles.lineItem, props.styles]}>
        <Text color={props.color || Colors.GRAY} size={props.size}>
          {props.text}
        </Text>
        <View style={styles.icon}>{props.icon}</View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  lineItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY,
    height: moderateVerticalScale(45),
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
  },
  icon: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(LineItem);
