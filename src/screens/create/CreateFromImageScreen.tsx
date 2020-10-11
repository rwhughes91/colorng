import ColorExtract from '@components/ColorExtract/ColorExtract';
import CreateGradientLayout from '@components/layouts/CreateGradientLayout';
import Layout from '@components/layouts/Layout';
import Loader from '@components/ui/Loader';
import useFirebase from '@hooks/useFirebase';
import Color from '@models/Color';
import Gradient from '@models/Gradient';
import { NavigationScreenProps } from '@navigations/CreateNavigator';
import Firebase from '@services/firebase/client';
import * as actions from '@store/actions/index';
import { Globals } from '@styles/index';
import { Gradient as GradientType, Colors } from '@typeDefs/index';
import * as FileSystem from 'expo-file-system';
import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';

type Props = NavigationScreenProps<'Image'>;

const CreateFromImageScreen: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const userColors = useSelector<{ gradient: { userColors: Colors } }, Colors>(
    (state) => state.gradient.userColors
  );
  const [colorPalette, setColorPalette] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const onColorPaletteGenerated = useCallback(
    (palette: any[]) => {
      const colors = palette.map((rgb) => {
        const color = new Color(rgb);
        const focused = userColors.some((userColor) => color.hex === userColor.hex);
        return { name: color.name, hex: color.hex, rgb, focused };
      });
      setColorPalette(colors);
    },
    [userColors]
  );

  useEffect(() => {
    setColorPalette((prevState) => {
      return prevState.map((colorP) => {
        const focused = userColors.some((userColor) => colorP.hex === userColor.hex);
        return { ...colorP, focused };
      });
    });
  }, [userColors]);

  const gradientColors = colorPalette.map((color) => color.hex);

  const onColorPaletteError = useCallback(() => {
    props.navigation.navigate('Create', { error: 'Could not generate palette from photo' });
  }, [props.navigation]);

  const goBack = useCallback(async () => {
    props.navigation.goBack();
  }, [props.navigation]);

  const createGradient = useCallback(async (userId: string, value: Gradient) => {
    const gradientToAdd = {
      ...value,
      colors: value.colors.map((color) => {
        return { name: color.name, hex: color.hex };
      }),
    };
    try {
      const id = await Firebase.addGradient(value);
      await Firebase.appendUserData<GradientType>(userId, 'createdGradients', [
        { ...gradientToAdd, id },
      ]);
      return { ...gradientToAdd, id };
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  const onSaveHandler = useCallback(
    (name: string, description: string) => {
      if (firebase?.user) {
        setLoading(true);
        const newGradient = new Gradient(
          name,
          colorPalette.map((rgb) => rgb.rgb),
          0,
          description
        );
        createGradient(firebase.user.uid, newGradient)
          .then((gradientWithId) => {
            dispatch(actions.appendList('createdGradients', { ...gradientWithId }));
            FileSystem.deleteAsync(props.route.params.uri)
              .then(() => {
                setLoading(false);
                Alert.alert(
                  'Saved',
                  'Your gradient has been created!',
                  [{ text: 'OK', onPress: goBack }],
                  {
                    cancelable: false,
                  }
                );
              })
              .catch(() => {
                setLoading(false);
              });
          })
          .catch(() => {
            setLoading(false);
            Alert.alert(
              'Error',
              'There was an issue saving your gradient. Please check your internet connection'
            );
          });
      }
    },
    [colorPalette, firebase?.user, dispatch, goBack, props.route.params.uri, createGradient]
  );

  return (
    <>
      <Layout
        whiteBackground
        gradient
        backdropPosition={-Globals.BACKDROP_TRANSLATE_SMALL}
        gradientColors={gradientColors.length > 0 ? gradientColors : undefined}
      >
        {colorPalette.length > 0 ? (
          <CreateGradientLayout
            gradientColors={colorPalette}
            onSubmit={onSaveHandler}
            loading={loading}
          />
        ) : (
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
        )}
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
