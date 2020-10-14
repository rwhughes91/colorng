import GradientDetailScrollView from '@components/Gradient/GradientDetailScrollView';
import AnimatedBackdrop from '@components/Gradient/detail/AnimatedBackdrop';
import AnimatedLikeButton from '@components/Gradient/detail/AnimatedLikeButton';
import AnimatedSecondaryHeader from '@components/Gradient/detail/AnimatedSecondaryHeader';
import Layout from '@components/layouts/Layout';
import useFirebase from '@hooks/useFirebase';
import Color from '@models/Color';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import Firebase from '@services/firebase/client';
import * as actions from '@store/actions/index';
import { Globals } from '@styles/index';
import { Gradients, Gradient, Colors } from '@typeDefs/index';
import { capitalize } from '@utils/helpers';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Animated, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

type Props = NavigationScreenProps<'Detail'>;

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
  const [otherGradients, setOtherGradients] = useState<Gradients>([]);
  const [loading, setLoading] = useState(false);
  const gradientColors = props.route.params.colors.map((color) => color.hex);
  const description = props.route.params.description;

  const colors = props.route.params.colors.map((color) => {
    const focused = userColors.some((userColor) => color.hex === userColor.hex);
    return { ...color, focused };
  });

  const scrollY = useRef(new Animated.Value(0)).current;
  const lastId = useRef<string | undefined>('');
  const onScrollAnimation = Animated.event(
    [
      {
        nativeEvent: { contentOffset: { y: scrollY } },
      },
    ],
    { useNativeDriver: true }
  );

  useEffect(() => {
    if (lastId.current !== props.route.params.id) {
      const colorToSearch = new Color(Color.hexToRgb(colors[2].hex));
      const condition: any = {
        field: 'colorSearch',
        operator: 'array-contains',
        eq: colorToSearch.shade,
      };
      lastId.current = props.route.params.id;
      setLoading(true);
      Firebase.paginateDataArray<Gradients>('gradients', [condition], 'likes', 11)
        .then((res) => {
          setLoading(false);
          setOtherGradients(res.filter((color) => color.id !== props.route.params.id) as any);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [otherGradients.length, colors, props.route.params.id]);

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
    if (userGradients.length >= 50) {
      Alert.alert(
        'Error',
        'You cannot have more than 50 saved gradients. Please delete a saved gradient.'
      );
    } else {
      dispatch(actions.addGradientOrColor('userGradients', gradient, firebase?.user?.uid));
    }
  }, [dispatch, props.route.params, firebase?.user?.uid, userGradients.length]);

  const onRemoveGradientHandler = useCallback(() => {
    const gradientId = props.route.params.id;
    if (gradientId) {
      dispatch(actions.removeGradientOrColor('userGradients', gradientId, firebase?.user?.uid));
    }
  }, [dispatch, props.route.params.id, firebase?.user?.uid]);

  const onReplaceHandler = useCallback(
    (gradient: Gradient) => {
      props.navigation.replace('Detail', gradient);
    },
    [props.navigation]
  );

  const onSaveColorHandler = useCallback(
    (name: string, hex: string, id: string) => {
      if (userColors.length >= 50) {
        Alert.alert(
          'Error',
          'You cannot have more than 50 saved colors. Please delete a saved color.'
        );
      } else {
        dispatch(actions.addGradientOrColor('userColors', { name, hex, id }, firebase?.user?.uid));
      }
    },
    [userColors.length, firebase?.user, dispatch]
  );

  return (
    <>
      <Layout whiteBackground statusBarColor="light">
        <AnimatedBackdrop gradientColors={gradientColors} animatedValue={scrollY} />
        <View style={styles.container}>
          <GradientDetailScrollView
            title={capitalize(props.route.params.name)}
            colors={colors}
            gradients={otherGradients}
            onScroll={onScrollAnimation}
            animatedValue={scrollY}
            description={description}
            onItemPress={onReplaceHandler}
            loading={loading}
            onSaveColorHandler={onSaveColorHandler}
          />
        </View>
      </Layout>
      <AnimatedLikeButton
        focused={liked}
        onPress={liked ? onRemoveGradientHandler : onSaveGradientHandler}
        disabled={disabled}
        icon={disabled && liked ? 'star' : 'heart'}
        animatedValue={scrollY}
      />
      <AnimatedSecondaryHeader
        animatedValue={scrollY}
        gradientColors={gradientColors}
        title={capitalize(props.route.params.name)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
    alignItems: 'center',
  },
  likeButton: Globals.LIKE_BUTTON_STYLES,
});

export default React.memo(GradientDetailScreen);
