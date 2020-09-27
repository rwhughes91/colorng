import ColorList from '@components/Color/ColorList';
import GradientList from '@components/Gradient/GradientList';
import Header from '@components/layouts/Header/Header';
import Layout from '@components/layouts/Layout';
import TabView from '@components/ui/TabView';
import { NavigationScreenProps } from '@navigations/AppNavigator';
import { Colors, Globals, Mixins } from '@styles/index';
import { Gradients } from '@typeDefs/index';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateVerticalScale, verticalScale } from 'react-native-size-matters';

type Props = NavigationScreenProps<'Saved'>;

const backdropShown = Mixins.backdropHeight() - Globals.HEADER_TRANSLATE_Y;

const SavedScreen: React.FC<Props> = () => {
  const backdropPosition =
    backdropShown - Globals.HEADER_HEIGHT_WITH_STATUS_BAR - verticalScale(15);
  return (
    <>
      <Layout gradient gradientColors={['white', 'white']} backdropPosition={backdropPosition}>
        <Header
          title={{ text: 'Saved Colors', location: 'above', color: Colors.PINK }}
          styles={{ justifyContent: 'center' }}
        />
        <View style={styles.container}>
          <TabView
            tabs={[
              { name: 'Gradients', component: <GradientList gradients={gradients} /> },
              {
                name: 'Colors',
                component: <ColorList items={colors} icon flatList />,
              },
            ]}
            styles={{ marginTop: moderateVerticalScale(20, -3) }}
          />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default React.memo(SavedScreen);

const colors = [
  { color: '#3C233C', name: 'Magenta' },
  { color: '#463B4D', name: 'Dark Gray Violet' },
  { color: '#688188', name: 'Gray Cyan' },
  { color: '#CCB58D', name: 'Beige' },
  { color: '#DFCC73', name: 'Gold' },
];

const gradients: Gradients = [
  { name: 'Architecture', description: 'Somber, serious, and mild', likes: 112, colors },
];
