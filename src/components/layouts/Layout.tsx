import BackDrop from '@components/ui/BackDrop';
import { HeaderHeightContext } from '@react-navigation/stack';
import { Colors } from '@styles/index';
import Constants from 'expo-constants';
import React, { useContext } from 'react';
import { View, StyleSheet, Platform, StyleProp, ViewStyle } from 'react-native';

interface Props {
  whiteBackground?: boolean;
  header?: boolean;
  gradient?: boolean;
  gradientColors?: string[];
  backdropPosition?: number;
  borderRadius?: number;
  height?: string | number;
  containerStyles?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  cover?: boolean;
}

const Layout: React.FC<Props> = (props) => {
  const headerHeightContext = useContext(HeaderHeightContext);
  const headerHeight = headerHeightContext || 0;
  const layoutStyles = { ...styles.layout };
  if (props.whiteBackground) {
    layoutStyles.backgroundColor = 'white';
  }

  return (
    <View style={layoutStyles}>
      {props.gradient && (
        <BackDrop
          colors={props.gradientColors}
          top={props.backdropPosition}
          borderRadius={props.borderRadius}
          height={props.height}
          cover={props.cover}
        />
      )}
      <View
        style={[
          {
            ...styles.container,
            paddingTop: props.header
              ? headerHeight
              : Platform.OS === 'android'
              ? Constants.statusBarHeight * 3
              : Constants.statusBarHeight * 2,
          },
          props.containerStyles,
        ]}
      >
        {props.children}
      </View>
    </View>
  );
};

export default React.memo(Layout);

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: Colors.PEACH,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
    zIndex: 1,
    alignItems: 'center',
  },
});
