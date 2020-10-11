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

  const calculateTotalWidth = useCallback(
    (index: number) => {
      let totalWidth = 0;
      for (let i = 0; i < index; i++) {
        let addOn = 0;
        if (index === 2) {
          addOn = 0.75;
        }
        totalWidth = totalWidth + calculateWidth(props.tabs[i].name) + MARGIN_RIGHT + addOn;
      }
      return totalWidth;
    },
    [calculateWidth, props.tabs]
  );

  const switchTabs = useCallback(
    (index: number) => {
      setActiveTab(index);
      Animated.parallel([
        Animated.timing(widthAnim, {
          toValue: calculateWidth(props.tabs[index].name),
          duration: 150,
          useNativeDriver: false,
        }),
        Animated.timing(slideAnim, {
          toValue: calculateTotalWidth(index),
          duration: 150,
          useNativeDriver: false,
        }),
      ]).start();
    },
    [props.tabs, widthAnim, slideAnim, calculateTotalWidth, calculateWidth]
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
    paddingVertical: moderateVerticalScale(10, 0.3),
    paddingHorizontal: PADDING_HORIZONTAL / 2,
    marginRight: MARGIN_RIGHT,
    alignItems: 'center',
    borderColor: 'transparent',
    borderWidth: 1,
  },
  componentContainer: {
    marginTop: 0,
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
