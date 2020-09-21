import BackDrop from '@components/ui/BackDrop';
import { HeaderHeightContext } from '@react-navigation/stack';
import { Colors } from '@styles/index';
import React, { useContext } from 'react';
import { View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

interface Props {
  whiteBackground?: boolean;
  header?: boolean;
  gradient?: boolean;
  gradientColors?: string[];
  backdropPosition?: number;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  const headerHeight = useContext(HeaderHeightContext);
  const layoutStyles = { ...styles.layout };
  if (props.whiteBackground) {
    layoutStyles.backgroundColor = 'white';
  }
  return (
    <View style={layoutStyles}>
      {props.gradient && <BackDrop colors={props.gradientColors} top={props.backdropPosition} />}
      <SafeAreaView
        style={{
          ...styles.container,
          paddingTop: !props.header && Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          marginTop: props.header ? headerHeight || 0 : 0,
        }}
      >
        {props.children}
      </SafeAreaView>
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
