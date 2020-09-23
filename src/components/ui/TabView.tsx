import Text from '@components/ui/text/Text';
import { Colors, Globals } from '@styles/index';
import React, { useState, useCallback, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, StyleProp, ViewStyle } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';

interface Props {
  tabs: { name: string; component: React.ReactNode }[];
  styles?: StyleProp<ViewStyle>;
}

const BORDER_SIZE = 90;
const MARGIN_RIGHT = 25;

const TabView: React.FC<Props> = (props) => {
  const slideAnim = useRef(new Animated.Value(0)).current;

  const [activeTab, setActiveTab] = useState(0);

  const switchTabs = useCallback(
    (index: number) => {
      setActiveTab(index);
      Animated.timing(slideAnim, {
        toValue: (BORDER_SIZE + MARGIN_RIGHT) * index,
        duration: 150,
        useNativeDriver: true,
      }).start();
    },
    [slideAnim]
  );

  return (
    <View style={[styles.container, props.styles]}>
      <View style={styles.tabHeaderContainer}>
        <Animated.View style={[styles.activeBorder, { transform: [{ translateX: slideAnim }] }]} />
        {props.tabs.map((tab, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => switchTabs(i)}
              activeOpacity={1}
              style={styles.tabHeader}
            >
              <Text color={activeTab === i ? Colors.PINK : Colors.GRAY}>{tab.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.componentContainer}>{props.tabs[activeTab].component}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
  },
  tabHeaderContainer: {
    flexDirection: 'row',
    borderColor: Colors.LIGHT_GRAY,
    borderBottomWidth: 1,
  },
  tabHeader: {
    alignSelf: 'stretch',
    width: BORDER_SIZE,
    paddingVertical: moderateVerticalScale(12, 0.3),
    paddingHorizontal: 5,
    marginRight: MARGIN_RIGHT,
    alignItems: 'center',
  },
  componentContainer: {
    marginTop: MARGIN_RIGHT * 1.5,
    flex: 1,
  },
  activeBorder: {
    width: BORDER_SIZE,
    height: 2,
    borderRadius: Globals.BORDER_RADIUS,
    backgroundColor: Colors.PINK,
    position: 'absolute',
    bottom: -1,
    left: 0,
  },
});

export default React.memo(TabView);
