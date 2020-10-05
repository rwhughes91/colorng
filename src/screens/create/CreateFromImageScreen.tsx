import ColorListLayout from '@components/layouts/ColorListLayout';
import CreateGradientHeader from '@components/layouts/Header/CreateGradientHeader';
import Layout from '@components/layouts/Layout';
import Main from '@components/layouts/Main';
import Button from '@components/ui/buttons/Button';
import { NavigationScreenProps } from '@navigations/CreateNavigator';
import { Globals } from '@styles/index';
import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = NavigationScreenProps<'Image'>;

const CreateFromImageScreen: React.FC<Props> = () => {
  const items = (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <ColorListLayout colors={colors} title="Colors" icon />
      <View style={styles.buttonContainer}>
        <Button>Save</Button>
      </View>
    </View>
  );
  return (
    <>
      <Layout whiteBackground gradient backdropPosition={-Globals.BACKDROP_TRANSLATE_SMALL}>
        <View style={styles.container}>
          <CreateGradientHeader />
          <Main small styles={{ paddingBottom: 10 }}>
            {items}
          </Main>
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: 'center',
    flex: 1,
    maxHeight: 200,
  },
});

export default React.memo(CreateFromImageScreen);

const colors = [
  { color: '#3C233C', name: 'Magenta' },
  { color: '#463B4D', name: 'Dark Gray Violet' },
  { color: '#688188', name: 'Gray Cyan' },
  { color: '#CCB58D', name: 'Beige' },
  { color: '#DFCC73', name: 'Gold' },
];
