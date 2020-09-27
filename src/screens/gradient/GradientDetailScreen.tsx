import GradientDetailScrollView from '@components/Gradient/GradientDetailScrollView';
import Header from '@components/layouts/Header/Header';
import Layout from '@components/layouts/Layout';
import Main from '@components/layouts/Main';
import LikeButton from '@components/ui/buttons/LikeButton';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import { Globals } from '@styles/index';
import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = NavigationScreenProps<'Detail'>;

const GradientDetailScreen: React.FC<Props> = (props) => {
  const gradientColors = props.route?.params?.colors.map((color) => color.color);
  const description = props.route?.params?.description;

  return (
    <>
      <Layout
        whiteBackground
        gradient
        gradientColors={gradientColors}
        backdropPosition={-Globals.BACKDROP_TRANSLATE_SMALL}
      >
        <View style={styles.container}>
          <Header
            title={{ text: props.route.params.name, location: 'above' }}
            description={description}
            styles={{ justifyContent: 'center' }}
          />

          <Main small>
            <GradientDetailScrollView colors={colors} gradients={gradients} />
          </Main>
        </View>
      </Layout>
      <View style={styles.likeButton}>
        <LikeButton focused />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  likeButton: Globals.LIKE_BUTTON_STYLES,
});

export default React.memo(GradientDetailScreen);

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
];
