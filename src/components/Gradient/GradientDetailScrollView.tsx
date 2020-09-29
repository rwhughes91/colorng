import ColorListLayout from '@components/layouts/ColorListLayout';
import HeaderLabelText from '@components/texts/HeaderLabelText';
import { Colors as ColorsType, Gradients } from '@typeDefs/index';
import React from 'react';
import { View } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';

import GradientList from './GradientList';

interface Props {
  colors: ColorsType;
  gradients: Gradients;
  scrollEnabled?: boolean;
}

const GradientDetailScrollView: React.FC<Props> = (props) => {
  const header = (
    <View>
      <ColorListLayout colors={props.colors} title="Colors" styles={{ marginTop: 0 }} icon />
      <HeaderLabelText styles={{ marginTop: moderateVerticalScale(15) }}>
        Other Gradients by This User
      </HeaderLabelText>
    </View>
  );
  return (
    <GradientList
      gradients={props.gradients}
      listHeaderComponent={header}
      styles={{ paddingTop: 3 }}
      scrollEnabled={props.scrollEnabled}
    />
  );
};

export default React.memo(GradientDetailScrollView);
