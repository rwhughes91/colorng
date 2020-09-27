import BackDrop from '@components/ui/BackDrop';
import { useHeaderHeight } from '@react-navigation/stack';
import { Colors } from '@styles/index';
import Constants from 'expo-constants';
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

interface Props {
  whiteBackground?: boolean;
  header?: boolean;
  gradient?: boolean;
  gradientColors?: string[];
  backdropPosition?: number;
  borderRadius?: number;
  height?: string | number;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  const headerHeight = useHeaderHeight();
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
        />
      )}
      <View
        style={{
          ...styles.container,
          paddingTop: props.header
            ? headerHeight
            : Platform.OS === 'android'
            ? Constants.statusBarHeight * 3
            : Constants.statusBarHeight * 2,
        }}
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
