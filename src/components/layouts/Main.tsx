import * as Constants from '@constants/index';
import { HeaderHeightContext } from '@react-navigation/stack';
import { Globals, Mixins } from '@styles/index';
import React, { useContext } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';

interface Props {
  children: React.ReactNode;
  marginTop?: string | number;
  styles?: StyleProp<ViewStyle>;
  header?: boolean;
  small?: boolean;
}

const Main: React.FC<Props> = (props) => {
  const backdropShown =
    Mixins.backdropHeight() -
    (props.small ? Globals.BACKDROP_TRANSLATE_SMALL : Globals.HEADER_TRANSLATE_Y);
  const header = Globals.HEADER_HEIGHT + Globals.HEADER_MARGINS;
  const headerHeightContext = useContext(HeaderHeightContext);
  const headerHeight = headerHeightContext || 0;
  const adjustment = props.header ? headerHeight : Globals.HEADER_HEIGHT_WITH_STATUS_BAR;
  const marginTopNormal = backdropShown - header - adjustment;

  const marginTop =
    props.marginTop || Constants.DEVICE_HEIGHT > Globals.HEIGHT_BREAKPOINT
      ? marginTopNormal + moderateVerticalScale(20)
      : marginTopNormal;

  return (
    <View
      style={[
        styles.container,
        props.styles,
        {
          marginTop,
        },
      ]}
    >
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(Main);
