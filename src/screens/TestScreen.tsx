import GradientDetailScrollView from '@components/Gradient/GradientDetailScrollView';
import GradientList from '@components/Gradient/GradientList';
import ColorListLayout from '@components/layouts/ColorListLayout';
import Header from '@components/layouts/Header/Header';
import Layout from '@components/layouts/Layout';
import Main from '@components/layouts/Main';
import HeaderLabelText from '@components/texts/HeaderLabelText';
import Backdrop from '@components/ui/BackDrop';
import LikeButton from '@components/ui/buttons/LikeButton';
import * as Constants from '@constants/index';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import { Globals, Colors } from '@styles/index';
import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Text, FlatList } from 'react-native';

type Props = NavigationScreenProps<'Detail'>;

const inputRanges = [-150, 0];

const TestScreen: React.FC<Props> = (props) => {
  const gradientColors = colors.map((color) => color.color);
  const scrollY = useRef(new Animated.Value(0)).current;

  const header = (
    <View>
      <View style={{ justifyContent: 'center', borderColor: 'green', borderWidth: 1 }}>
        <Animated.View
          style={{
            opacity: scrollY.interpolate({
              inputRange: [-150, 0, 150],
              outputRange: [1, 1, -1],
              extrapolate: 'clamp',
            }),
          }}
        >
          <Header
            title={{ text: 'Some text', location: 'above', color: Colors.BLUE }}
            description="some description text"
            styles={{
              justifyContent: 'center',
              borderColor: 'red',
              borderWidth: 1,
              backgroundColor: 'lightblue',
            }}
          />
        </Animated.View>
      </View>
      <Main>
        <ColorListLayout colors={colors} title="Colors" styles={{ marginTop: 0 }} icon />
        <HeaderLabelText styles={{ marginTop: 15 }}>Other Gradients by This User</HeaderLabelText>
      </Main>
    </View>
  );
  return (
    <>
      <Layout whiteBackground>
        <Backdrop
          colors={gradientColors}
          animated
          animatedStyles={{
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [
                    -Globals.HEADER_TRANSLATE_Y + 1,
                    -Globals.HEADER_TRANSLATE_Y,
                    -Globals.HEADER_TRANSLATE_Y - 1,
                  ],
                }),
              },
              { rotate: '-90deg' },
            ],
          }}
        />
        <View style={styles.container}>
          <GradientList
            gradients={gradients}
            listHeaderComponent={header}
            styles={styles.flatList}
            animated
            overScrollMode="never"
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { y: scrollY } },
                },
              ],
              { useNativeDriver: true }
            )}
          />
        </View>
      </Layout>
      <Animated.View
        style={[
          styles.likButton,
          {
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-1, 0, 1, 150, 151],
                  outputRange: [1, 0, -1, -150, -150],
                }),
              },
            ],
          },
        ]}
      >
        <LikeButton focused />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  flatList: {
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
  },
  backdrop: {},
  likButton: Globals.LIKE_BUTTON_STYLES,
});

export default TestScreen;

const colors = [
  { color: '#3C233C', name: 'Magenta' },
  { color: '#463B4D', name: 'Dark Gray Violet' },
  { color: '#688188', name: 'Gray Cyan' },
  { color: '#CCB58D', name: 'Beige' },
  { color: '#DFCC73', name: 'Gold' },
];

const gradients = [
  { name: 'Architecture', description: 'Somber, serious, and mild', likes: 112, colors },
  { name: 'Architecture', description: 'Somber, serious, and mild', likes: 112, colors },
  { name: 'Architecture', description: 'Somber, serious, and mild', likes: 112, colors },
  { name: 'Architecture', description: 'Somber, serious, and mild', likes: 112, colors },
  { name: 'Architecture', description: 'Somber, serious, and mild', likes: 112, colors },
  { name: 'Architecture', description: 'Somber, serious, and mild', likes: 112, colors },
  { name: 'Architecture', description: 'Somber, serious, and mild', likes: 112, colors },
  { name: 'Architecture', description: 'Somber, serious, and mild', likes: 112, colors },
  { name: 'Architecture', description: 'Somber, serious, and mild', likes: 112, colors },
  { name: 'Architecture', description: 'Somber, serious, and mild', likes: 112, colors },
  { name: 'Architecture', description: 'Somber, serious, and mild', likes: 112, colors },
  { name: 'Architecture', description: 'Somber, serious, and mild', likes: 112, colors },
  { name: 'Architecture', description: 'Somber, serious, and mild', likes: 112, colors },
  { name: 'Architecture', description: 'Somber, serious, and mild', likes: 112, colors },
  { name: 'Architecture', description: 'Somber, serious, and mild', likes: 112, colors },
];

// const pan: any = useRef(new Animated.ValueXY()).current;

// const panResponder = useRef(
//   PanResponder.create({
//     onMoveShouldSetPanResponder: () => true,
//     onPanResponderGrant: () => {
//       pan.setOffset({
//         x: pan.x._value,
//         y: pan.y._value,
//       });
//     },
//     onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
//       useNativeDriver: false,
//     }),
//     onPanResponderRelease: () => {
//       pan.flattenOffset();
//     },
//   })
// ).current;
