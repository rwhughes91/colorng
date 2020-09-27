import ColorList from '@components/Color/ColorList';
import HeaderText from '@components/ui/text/HeaderText';
import * as Constants from '@constants/index';
import { Globals, Colors, Typography } from '@styles/index';
import { Colors as ColorsType } from '@typeDefs/index';
import React, { useRef } from 'react';
import { View, Animated, PanResponder, StyleSheet } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';

interface Props {
  colors: ColorsType;
  children?: React.ReactNode;
}

const CONTAINER_MAX_HEIGHT = Globals.COLOR_SIZE_VERTICAL * 6;
const CONTAINER_MIN_HEIGHT = moderateVerticalScale(100);

const AnimatedColorList: React.FC<Props> = (props) => {
  const pan: any = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onStartShouldSetPanResponder: () => false,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.colorsContainer,
        {
          height: Animated.add(new Animated.Value(CONTAINER_MAX_HEIGHT), pan.y).interpolate({
            inputRange: [0, CONTAINER_MAX_HEIGHT],
            outputRange: [CONTAINER_MIN_HEIGHT, CONTAINER_MAX_HEIGHT],
            extrapolate: 'clamp',
          }),
        },
      ]}
    >
      <View style={styles.colorsList}>
        <HeaderText color={Colors.PINK} size={Typography.FONT_SIZE_20} styles={{ marginBottom: 5 }}>
          Colors
        </HeaderText>
        <Animated.View
          style={{
            opacity: 0,
          }}
        >
          <ColorList
            items={props.colors}
            containerStyles={{
              borderTopWidth: 0,
              marginTop: 0,
              flexDirection: 'row',
            }}
            colorsOnly
          />
        </Animated.View>
        <Animated.View
          style={{
            top: -Globals.COLOR_SIZE_VERTICAL,
            opacity: pan.y.interpolate({
              inputRange: [Globals.COLOR_SIZE_VERTICAL * -3, 0, Globals.COLOR_SIZE_VERTICAL * 3],
              outputRange: [0, 1, 1],
              extract: 'clamp',
            }),
          }}
        >
          <ColorList
            items={props.colors}
            containerStyles={{
              marginTop: 0,
            }}
            noRadius
            icon
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.childWrapper,
            {
              top: -Globals.COLOR_SIZE_VERTICAL + 10,
              transform: [
                {
                  translateY: pan.y.interpolate({
                    inputRange: [
                      Globals.COLOR_SIZE_VERTICAL * -5,
                      0,
                      Globals.COLOR_SIZE_VERTICAL * 3,
                    ],
                    outputRange: [
                      Globals.COLOR_SIZE_VERTICAL * -5,
                      0,
                      Globals.COLOR_SIZE_VERTICAL * 3,
                    ],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}
        >
          {props.children}
        </Animated.View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  colorsContainer: {
    flex: 1,
    marginTop: 60,
    minHeight: CONTAINER_MIN_HEIGHT,
    // maxHeight: CONTAINER_MAX_HEIGHT,
    alignSelf: 'stretch',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'red',
  },
  colorsList: {
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
  },
  childWrapper: {
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
    height: Constants.DEVICE_HEIGHT / 2,
  },
});

export default React.memo(AnimatedColorList);
