import * as Constants from '@constants/index';
import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface Props {
  styles?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const HeaderContainer: React.FC<Props> = (props) => {
  return <View style={[styles.header, props.styles]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: Constants.DEVICE_HEIGHT * 0.2,
  },
});

export default React.memo(HeaderContainer);
