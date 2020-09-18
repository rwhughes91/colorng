import { HeaderHeightContext } from '@react-navigation/stack';
import { Colors } from '@styles/index';
import React, { useContext } from 'react';
import { View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

interface Props {
  whiteBackground?: boolean;
  header?: boolean;
}

const Layout: React.FC<Props> = (props) => {
  const headerHeight = useContext(HeaderHeightContext);
  const layoutStyles = { ...styles.layout };
  if (props.whiteBackground) {
    layoutStyles.backgroundColor = 'white';
  }
  return (
    <View style={layoutStyles}>
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
  },
  container: {
    flex: 1,
  },
});
