import GradientList from '@components/Gradient/GradientList';
import Header from '@components/layouts/Header/Header';
import Layout from '@components/layouts/Layout';
import LabelText from '@components/texts/LabelText';
import ColorButtons from '@components/ui/buttons/TagButton/TagButtons';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import { Colors, Globals } from '@styles/index';
import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = NavigationScreenProps<'Search'>;

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
];

const GradientSearch: React.FC<Props> = () => {
  return (
    <Layout header whiteBackground>
      <View style={styles.container}>
        <Header
          title={{ text: 'Find a Gradient', location: 'above', color: Colors.PINK }}
          showInput
          showInputColors={{
            backgroundColors: [Colors.ORANGE, Colors.PINK],
            color: 'white',
            placeholderColor: 'white',
            iconColor: 'white',
          }}
        />
        <View style={styles.buttonWrapper}>
          <ColorButtons buttons={['#ebeef2', 'red', 'orange', 'green', 'magenta']} />
        </View>
        <View style={styles.main}>
          <LabelText>Results: 4 gradients</LabelText>
          <GradientList gradients={gradients} />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
  },
  buttonWrapper: {
    top: -Globals.HEADER_MARGINS,
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
  },
  main: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default React.memo(GradientSearch);
