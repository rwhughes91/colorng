import ColorExtract from '@components/ColorExtract/ColorExtract';
import ColorListLayout from '@components/layouts/ColorListLayout';
import CreateGradientHeader from '@components/layouts/Header/CreateGradientHeader';
import Layout from '@components/layouts/Layout';
import Main from '@components/layouts/Main';
import Loader from '@components/ui/Loader';
import Button from '@components/ui/buttons/Button';
import * as Constants from '@constants/index';
import Color from '@models/Color';
import { NavigationScreenProps } from '@navigations/CreateNavigator';
import { Globals, Mixins } from '@styles/index';
import React, { useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type Props = NavigationScreenProps<'Image'>;

const calculateCutoff = () => {
  return (Mixins.backdropHeight() - Constants.DEVICE_WIDTH) / 2 / Mixins.backdropHeight();
};

const CreateFromImageScreen: React.FC<Props> = (props) => {
  const [colorPalette, setColorPalette] = useState<any[]>([]);

  const onColorPaletteGenerated = useCallback((palette: any[]) => {
    const colors = palette.map((rgb) => {
      const color = new Color(rgb);
      return { name: color.name, hex: `#${color.hex}` };
    });
    setColorPalette(colors);
  }, []);

  const gradientColors = colorPalette.map((color) =>
    color.hex.startsWith('#') ? color.hex : `#${color.hex}`
  );
  const gradientLocations = [];
  const colorWidth = (calculateCutoff() * 2) / gradientColors.length;
  for (let i = 1; i <= gradientColors.length; i++) {
    gradientLocations.push(colorWidth * i + calculateCutoff() / 2);
  }

  const onColorPaletteError = useCallback(() => {
    props.navigation.navigate('Create', { error: 'Could not generate palette from photo' });
  }, [props.navigation]);

  let items = (
    <>
      <Loader />
      <View style={[styles.imagePreview]}>
        <ColorExtract
          uri={props.route.params.uri}
          onColorPalette={onColorPaletteGenerated}
          onError={onColorPaletteError}
        />
      </View>
    </>
  );
  if (colorPalette.length > 0) {
    items = (
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <ColorListLayout colors={colorPalette} title="Colors" icon />
        <View style={styles.buttonContainer}>
          <Button>Save</Button>
        </View>
      </View>
    );
  }

  return (
    <>
      <Layout
        whiteBackground
        gradient
        backdropPosition={-Globals.BACKDROP_TRANSLATE_SMALL}
        gradientColors={gradientColors.length > 0 ? gradientColors : undefined}
        gradientLocations={gradientLocations.length > 0 ? gradientLocations : undefined}
      >
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
  imagePreview: {
    width: moderateScale(70, 0.2),
    height: moderateScale(70, 0.2),
    borderRadius: moderateScale(35, 0.2),
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'absolute',
    opacity: 0,
  },
});

export default React.memo(CreateFromImageScreen);
