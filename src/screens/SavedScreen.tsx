import ColorList from '@components/Color/ColorList';
import GradientList from '@components/Gradient/GradientList';
import LoginIcon from '@components/icons/LoginIcon';
import Header from '@components/layouts/Header/Header';
import Layout from '@components/layouts/Layout';
import TabView from '@components/ui/TabView';
import useFirebase from '@hooks/useFirebase';
import { NavigationScreenProps } from '@navigations/SavedNavigator';
import { Colors, Globals, Mixins } from '@styles/index';
import { Gradients, Colors as ColorsType } from '@typeDefs/index';
import React, { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateVerticalScale, verticalScale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';

type Props = NavigationScreenProps<'Home'>;

const backdropShown = Mixins.backdropHeight() - Globals.HEADER_TRANSLATE_Y;
const backdropPosition = backdropShown - Globals.HEADER_HEIGHT_WITH_STATUS_BAR - verticalScale(15);

const SavedScreen: React.FC<Props> = (props) => {
  const firebase = useFirebase();
  const savedGradients = useSelector<{ gradient: { userGradients: Gradients } }, Gradients>(
    (state) => state.gradient.userGradients
  );
  const savedColors = useSelector<{ gradient: { userColors: ColorsType } }, ColorsType>(
    (state) => state.gradient.userColors
  );

  useLayoutEffect(() => {
    if (!firebase?.user) {
      props.navigation.setOptions({
        headerRight: () => (
          <LoginIcon
            color={Colors.PINK}
            size={24}
            onPress={() => props.navigation.navigate('Profile')}
          />
        ),
        headerRightContainerStyle: { marginRight: 15 },
      });
    } else {
      props.navigation.setOptions({
        headerRight: undefined,
        headerRightContainerStyle: undefined,
      });
    }
  }, [firebase?.user, props.navigation]);

  return (
    <>
      <Layout
        gradient
        gradientColors={['white', 'white']}
        backdropPosition={backdropPosition}
        cover
      >
        <Header
          title={{ text: 'Saved Colors', location: 'above', color: Colors.PINK }}
          styles={{ justifyContent: 'center' }}
        />
        <View style={styles.container}>
          <TabView
            tabs={[
              { name: 'Gradients', component: <GradientList gradients={savedGradients} /> },
              {
                name: 'Colors',
                component: <ColorList items={savedColors} icon flatList />,
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
