import ColorList from '@components/Color/ColorList';
import HeaderLabelText from '@components/texts/HeaderLabelText';
import { Colors as ColorsType } from '@typeDefs/index';
import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

interface Props {
  title?: string;
  colors: ColorsType;
  styles?: StyleProp<ViewStyle>;
  containerStyles?: StyleProp<ViewStyle>;
  icon?: boolean;
  customIcon?: React.ReactNode;
}

const ColorListLayout: React.FC<Props> = (props) => {
  return (
    <View>
      {props.title && <HeaderLabelText>{props.title}</HeaderLabelText>}
      <ColorList
        items={props.colors}
        styles={props.styles}
        containerStyles={props.containerStyles}
        icon={props.icon}
        customIcon={props.customIcon}
      />
    </View>
  );
};

export default React.memo(ColorListLayout);
