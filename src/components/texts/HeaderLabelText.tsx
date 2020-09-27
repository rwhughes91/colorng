import HeaderText from '@components/ui/text/HeaderText';
import { Colors, Typography } from '@styles/index';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';

interface Props {
  children: string;
  styles?: StyleProp<ViewStyle>;
}

const HeaderLabelText: React.FC<Props> = (props) => {
  return (
    <HeaderText
      color={Colors.PINK}
      size={Typography.FONT_SIZE_20}
      styles={[{ marginBottom: moderateVerticalScale(6, 0.2) }, props.styles]}
    >
      {props.children}
    </HeaderText>
  );
};

export default React.memo(HeaderLabelText);
