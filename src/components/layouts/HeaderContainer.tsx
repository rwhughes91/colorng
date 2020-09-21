import * as Constants from '@constants/index';
import { Spacing, Mixins } from '@styles/index';
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
    paddingVertical: Spacing.SCALE_25,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Mixins.sizeResponse(Constants.DEVICE_WIDTH / 2.5, Constants.DEVICE_WIDTH / 3),
  },
});

export default React.memo(HeaderContainer);
