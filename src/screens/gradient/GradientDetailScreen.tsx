import GradientDetailScrollView from '@components/Gradient/GradientDetailScrollView';
import Header from '@components/layouts/Header/Header';
import Layout from '@components/layouts/Layout';
import Main from '@components/layouts/Main';
import LikeButton from '@components/ui/buttons/LikeButton';
import useFirebase from '@hooks/useFirebase';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import * as actions from '@store/actions/index';
import { Globals } from '@styles/index';
import { Gradients, Gradient } from '@typeDefs/index';
import { capitalize } from '@utils/helpers';
import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

type Props = NavigationScreenProps<'Detail'>;

const GradientDetailScreen: React.FC<Props> = (props) => {
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const userGradients = useSelector<{ gradient: { userGradients: Gradients } }, Gradients>(
    (state) => state.gradient.userGradients
  );
  const gradientColors = props.route.params.colors.map((color) =>
    color.hex.startsWith('#') ? color.hex : `#${color.hex}`
  );
  const description = props.route.params.description;

  let liked = false;
  if (userGradients.filter((gradient) => gradient.id === props.route.params.id).length > 0) {
    liked = true;
  }

  const onSaveGradientHandler = useCallback(() => {
    const gradient: Gradient = props.route.params;
    dispatch(actions.addGradientOrColor('userGradients', gradient, firebase?.user?.uid));
  }, [dispatch, props.route.params, firebase?.user?.uid]);

  const onRemoveGradientHandler = useCallback(() => {
    const gradientId = props.route.params.id;
    dispatch(actions.removeGradientOrColor('userGradients', gradientId, firebase?.user?.uid));
  }, [dispatch, props.route.params.id, firebase?.user?.uid]);

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
            title={{ text: capitalize(props.route.params.name), location: 'above' }}
            description={description}
            styles={{ justifyContent: 'center' }}
          />

          <Main small>
            <GradientDetailScrollView colors={props.route.params.colors} gradients={[]} />
          </Main>
        </View>
      </Layout>
      <View style={styles.likeButton}>
        <LikeButton
          focused={liked}
          onPress={liked ? onRemoveGradientHandler : onSaveGradientHandler}
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
