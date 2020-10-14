import CreateGradientLayout from '@components/layouts/CreateGradientLayout';
import Layout from '@components/layouts/Layout';
import * as Constants from '@constants/index';
import useFirebase from '@hooks/useFirebase';
import Color from '@models/Color';
import Gradient from '@models/Gradient';
import { NavigationScreenProps } from '@navigations/CreateNavigator';
import Firebase from '@services/firebase/client';
import * as actions from '@store/actions/index';
import { Globals } from '@styles/index';
import { Gradient as GradientType, Gradients } from '@typeDefs/index';
import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

type Props = NavigationScreenProps<'New'>;

const CreateFromImageScreen: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const firebase = useFirebase();

  const [loading, setLoading] = useState(false);

  const createdGradients = useSelector<{ gradient: { createdGradients: Gradients } }, Gradients>(
    (state) => state.gradient.createdGradients
  );

  const gradientColors = props.route.params.colors.map((color) => color.hex);

  const goToHome = useCallback(() => {
    props.navigation.navigate('Create', {});
  }, [props.navigation]);

  const createGradient = useCallback(
    async (userId: string, value: Gradient) => {
      const gradientToAdd = {
        ...value,
        colors: value.colors.map((color) => {
          return { name: color.name, hex: color.hex };
        }),
        createdBy: firebase?.user?.uid,
      };
      try {
        const id = await Firebase.addGradient({ ...value, createdBy: firebase?.user?.uid });
        await Firebase.appendUserData<GradientType>(userId, 'createdGradients', [
          { ...gradientToAdd, id },
        ]);
        return { ...gradientToAdd, id };
      } catch (error) {
        throw new Error(error.message);
      }
    },
    [firebase?.user?.uid]
  );

  const onSaveHandler = useCallback(
    (name: string, description: string) => {
      if (createdGradients.length >= 50) {
        Alert.alert(
          'Error',
          'You cannot have more than 50 created gradients. Please delete a created gradient.'
        );
      } else {
        if (firebase?.user) {
          setLoading(true);
          const newGradient = new Gradient(
            name,
            props.route.params.colors.map((color) => Color.hexToRgb(color.hex)),
            0,
            description
          );
          createGradient(firebase.user.uid, newGradient)
            .then((gradientWithId) => {
              dispatch(actions.appendList('createdGradients', { ...gradientWithId }));
              setLoading(false);
              Alert.alert(
                'Saved',
                'Your gradient has been created!',
                [{ text: 'OK', onPress: goToHome }],
                {
                  cancelable: false,
                }
              );
            })
            .catch(() => {
              setLoading(false);
              Alert.alert(
                'Error',
                'There was an issue saving your gradient. Please check your internet connection'
              );
            });
        }
      }
    },
    [
      firebase?.user,
      dispatch,
      createGradient,
      goToHome,
      props.route.params.colors,
      createdGradients.length,
    ]
  );

  return (
    <>
      <Layout
        whiteBackground
        gradient
        backdropPosition={
          Constants.DEVICE_HEIGHT > Globals.HEIGHT_BREAKPOINT
            ? undefined
            : -Globals.BACKDROP_TRANSLATE_SMALL
        }
        gradientColors={gradientColors.length > 0 ? gradientColors : undefined}
      >
        <CreateGradientLayout
          gradientColors={props.route.params.colors}
          onSubmit={onSaveHandler}
          icons={false}
          loading={loading}
          navigation={props.navigation}
          saveHeader={Constants.DEVICE_HEIGHT < 750}
          onSaveColorHandler={() => {}}
        />
      </Layout>
    </>
  );
};

export default React.memo(CreateFromImageScreen);
