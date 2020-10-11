import GradientDetailScrollView from '@components/Gradient/GradientDetailScrollView';
import Header from '@components/layouts/Header/Header';
import Layout from '@components/layouts/Layout';
import Main from '@components/layouts/Main';
import LikeButton from '@components/ui/buttons/LikeButton';
import useFirebase from '@hooks/useFirebase';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import * as actions from '@store/actions/index';
import { Globals } from '@styles/index';
import { Gradients, Gradient, Colors } from '@typeDefs/index';
import { capitalize } from '@utils/helpers';
import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

type Props = NavigationScreenProps<'Detail'>;

// const calculateCutoff = () => {
//   return (Mixins.backdropHeight() - Constants.DEVICE_WIDTH) / 2 / Mixins.backdropHeight();
// };

const GradientDetailScreen: React.FC<Props> = (props) => {
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const userGradients = useSelector<{ gradient: { userGradients: Gradients } }, Gradients>(
    (state) => state.gradient.userGradients
  );
  const userColors = useSelector<{ gradient: { userColors: Colors } }, Colors>(
    (state) => state.gradient.userColors
  );
  const createdGradients = useSelector<{ gradient: { createdGradients: Gradients } }, Gradients>(
    (state) => state.gradient.createdGradients
  );
  const gradientColors = props.route.params.colors.map((color) => color.hex);
  const description = props.route.params.description;

  const colors = props.route.params.colors.map((color) => {
    const focused = userColors.some((userColor) => color.hex === userColor.hex);
    return { ...color, focused };
  });

  let liked = false;
  let disabled = false;
  if (createdGradients.filter((gradient) => gradient.id === props.route.params.id).length > 0) {
    liked = true;
    disabled = true;
  } else if (userGradients.filter((gradient) => gradient.id === props.route.params.id).length > 0) {
    liked = true;
  }

  const onSaveGradientHandler = useCallback(() => {
    const gradient: Gradient = props.route.params;
    dispatch(actions.addGradientOrColor('userGradients', gradient, firebase?.user?.uid));
  }, [dispatch, props.route.params, firebase?.user?.uid]);

  const onRemoveGradientHandler = useCallback(() => {
    const gradientId = props.route.params.id;
    if (gradientId) {
      dispatch(actions.removeGradientOrColor('userGradients', gradientId, firebase?.user?.uid));
    }
  }, [dispatch, props.route.params.id, firebase?.user?.uid]);

  // const colorWidth = (calculateCutoff() * 2) / gradientColors.length;
  // const gradientLocations = [];
  // for (let i = 1; i <= gradientColors.length; i++) {
  //   gradientLocations.push(colorWidth * i + calculateCutoff() / 2);
  // }

  return (
    <>
      <Layout
        whiteBackground
        gradient
        gradientColors={gradientColors}
        backdropPosition={-Globals.BACKDROP_TRANSLATE_SMALL}
        // gradientLocations={gradientLocations}
      >
        <View style={styles.container}>
          <Header
            title={{ text: capitalize(props.route.params.name), location: 'above' }}
            description={description}
            styles={{ justifyContent: 'center' }}
          />
          <Main small>
            <GradientDetailScrollView colors={colors} gradients={[]} />
          </Main>
        </View>
      </Layout>
      <View style={styles.likeButton}>
        <LikeButton
          focused={liked}
          onPress={liked ? onRemoveGradientHandler : onSaveGradientHandler}
          disabled={disabled}
          icon={disabled && liked ? 'star' : 'heart'}
        />
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
