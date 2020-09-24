import Text from '@components/ui/text/Text';
import { Colors, Globals, Typography } from '@styles/index';
import React, { useState, useCallback, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, StyleProp, ViewStyle } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';

interface Props {
  tabs: { name: string; component: React.ReactNode }[];
  styles?: StyleProp<ViewStyle>;
  fontSize?: number;
}

// const BORDER_SIZE = 90;
const MARGIN_RIGHT = 25;
const PADDING_HORIZONTAL = 10;

const TabView: React.FC<Props> = (props) => {
  const fontSize = props.fontSize || Typography.FONT_SIZE_16;

  const calculateWidth = useCallback(
    (name: string) => {
      return name.length * (fontSize / 1.925) + PADDING_HORIZONTAL;
    },
    [fontSize]
  );

  const slideAnim = useRef(new Animated.Value(0)).current;
  const widthAnim = useRef(new Animated.Value(calculateWidth(props.tabs[0].name))).current;

  const [activeTab, setActiveTab] = useState(0);

  const currentTabWidth = calculateWidth(props.tabs[activeTab].name);

  const switchTabs = useCallback(
    (index: number) => {
      setActiveTab(index);
      Animated.parallel([
        Animated.timing(widthAnim, {
          toValue: props.tabs[index].name.length * (fontSize / 1.9) + PADDING_HORIZONTAL,
          duration: 150,
          useNativeDriver: false,
        }),
        Animated.timing(slideAnim, {
          toValue: (currentTabWidth + MARGIN_RIGHT) * index,
          duration: 150,
          useNativeDriver: false,
        }),
      ]).start();
    },
    [fontSize, props.tabs, widthAnim, slideAnim, currentTabWidth]
  );

  return (
    <View style={[styles.container, props.styles]}>
      <View style={styles.tabHeaderContainer}>
        <Animated.View
          style={[
            styles.activeBorder,
            {
              width: widthAnim,
              transform: [{ translateX: slideAnim }],
            },
          ]}
        />
        {props.tabs.map((tab, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => switchTabs(i)}
              activeOpacity={1}
              style={styles.tabHeader}
            >
              <Text color={activeTab === i ? Colors.PINK : Colors.GRAY} size={fontSize}>
                {tab.name}
              </Text>
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
    paddingVertical: moderateVerticalScale(12, 0.3),
    paddingHorizontal: PADDING_HORIZONTAL / 2,
    marginRight: MARGIN_RIGHT,
    alignItems: 'center',
    borderColor: 'transparent',
    borderWidth: 1,
  },
  componentContainer: {
    marginTop: MARGIN_RIGHT * 1.5,
    flex: 1,
  },
  activeBorder: {
    height: 2,
    borderRadius: Globals.BORDER_RADIUS,
    backgroundColor: Colors.PINK,
    position: 'absolute',
    bottom: -1,
    left: 0,
  },
});

export default React.memo(TabView);
