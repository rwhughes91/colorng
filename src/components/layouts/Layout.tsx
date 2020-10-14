import BackDrop from '@components/ui/BackDrop';
import { useIsFocused } from '@react-navigation/native';
import { HeaderHeightContext } from '@react-navigation/stack';
import { Colors } from '@styles/index';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
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
  gradientLocations?: number[];
  statusBarColor?: 'dark' | 'light';
}

const Layout: React.FC<Props> = (props) => {
  const isFocused = useIsFocused();
  const headerHeightContext = useContext(HeaderHeightContext);
  const headerHeight = headerHeightContext || 0;
  const layoutStyles = { ...styles.layout };
  if (props.whiteBackground) {
    layoutStyles.backgroundColor = 'white';
  }

  return (
    <>
      {isFocused && (
        <StatusBar style={props.statusBarColor || 'dark'} backgroundColor="transparent" />
      )}
      <View style={layoutStyles}>
        {props.gradient && (
          <BackDrop
            colors={props.gradientColors}
            top={props.backdropPosition}
            borderRadius={props.borderRadius}
            height={props.height}
            cover={props.cover}
            gradientLocations={props.gradientLocations}
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
    </>
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
