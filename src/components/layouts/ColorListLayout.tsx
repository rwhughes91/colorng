import ColorList from '@components/Color/ColorList';
import HeaderLabelText from '@components/texts/HeaderLabelText';
import { Colors as ColorsType } from '@typeDefs/index';
import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

interface Props {
  title?: string;
  colors: ColorsType & { focused?: boolean };
  styles?: StyleProp<ViewStyle>;
  containerStyles?: StyleProp<ViewStyle>;
  icon?: boolean;
  customIcon?: React.ReactNode;
  flatList?: boolean;
  mainContainer?: StyleProp<ViewStyle>;
  loading?: boolean;
  onSaveColorHandler: (x: string, y: string, z: string) => void;
}

const ColorListLayout: React.FC<Props> = (props) => {
  return (
    <View style={props.mainContainer}>
      {props.title && <HeaderLabelText>{props.title}</HeaderLabelText>}
      <ColorList
        items={props.colors}
        styles={props.styles}
        containerStyles={props.containerStyles}
        icon={props.icon}
        customIcon={props.customIcon}
        flatList={props.flatList}
        loading={props.loading}
        onSaveColorHandler={props.onSaveColorHandler}
      />
    </View>
  );
};

export default React.memo(ColorListLayout);
