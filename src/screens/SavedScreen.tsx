import ColorList from '@components/Color/ColorList';
import EmptyGradientList from '@components/Gradient/EmptyGradientList';
import GradientList from '@components/Gradient/GradientList';
import LoginIcon from '@components/icons/LoginIcon';
import Header from '@components/layouts/Header/Header';
import Layout from '@components/layouts/Layout';
import TabView from '@components/ui/TabView';
import * as Constants from '@constants/index';
import useFirebase from '@hooks/useFirebase';
import { NavigationScreenProps } from '@navigations/SavedNavigator';
import { Colors, Globals, Mixins } from '@styles/index';
import { Gradients, Colors as ColorsType } from '@typeDefs/index';
import React, { useLayoutEffect, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';

type Props = NavigationScreenProps<'Home'>;

const backdropShown = Mixins.backdropHeight() - Globals.HEADER_TRANSLATE_Y;
const backdropPosition = backdropShown - Globals.HEADER_HEIGHT_WITH_STATUS_BAR - 50;

const SavedScreen: React.FC<Props> = (props) => {
  const firebase = useFirebase();
  const savedGradients = useSelector<{ gradient: { userGradients: Gradients } }, Gradients>(
    (state) => state.gradient.userGradients
  );
  const savedColors = useSelector<{ gradient: { userColors: ColorsType } }, ColorsType>(
    (state) => state.gradient.userColors
  );

  const createdGradients = useSelector<{ gradient: { createdGradients: Gradients } }, Gradients>(
    (state) => state.gradient.createdGradients
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

  const header = useMemo(() => {
    return <View style={{ height: 35 }} />;
  }, []);

  const emptyStyles = useMemo(() => {
    return { marginTop: 35 };
  }, []);

  const tabs = [
    {
      name: 'Gradients',
      component:
        savedGradients.length > 0 ? (
          <GradientList
            gradients={savedGradients}
            listHeaderComponent={header}
            emptyGradientStyles={emptyStyles}
          />
        ) : (
          <EmptyGradientList styles={emptyStyles} />
        ),
    },
    {
      name: 'Colors',
      component: (
        <ColorList
          items={savedColors.map((color) => {
            return { ...color, focused: true };
          })}
          icon
          flatList
          listHeaderComponent={header}
          emptyStyles={emptyStyles}
          onSaveColorHandler={() => {}}
        />
      ),
    },
  ];

  if (firebase?.user) {
    tabs.push({
      name: 'Created',
      component: (
        <GradientList
          gradients={createdGradients}
          listHeaderComponent={header}
          emptyGradientStyles={emptyStyles}
          emptyGradientText={{
            title: 'No created gradients',
            body: 'You can create your own gradients! Just go to the create tab below.',
          }}
        />
      ),
    });
  }

  return (
    <Layout gradient gradientColors={['white', 'white']} backdropPosition={backdropPosition} cover>
      <Header
        title={{ text: 'Saved Colors', location: 'above', color: Colors.PINK }}
        styles={[
          {
            marginBottom:
              Constants.DEVICE_HEIGHT > Globals.HEIGHT_BREAKPOINT ? moderateVerticalScale(30) : 10,
          },
          Constants.DEVICE_HEIGHT > Globals.HEIGHT_BREAKPOINT ? { justifyContent: 'center' } : null,
        ]}
      />
      <View style={styles.container}>
        <TabView tabs={tabs} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default React.memo(SavedScreen);
