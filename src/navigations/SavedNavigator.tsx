import BackIcon from '@components/icons/BackIcon';
import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import SavedScreen from '@screens/SavedScreen';
import GradientDetailScreen from '@screens/gradient/GradientDetailScreen';
import { Spacing } from '@styles/index';
import React from 'react';
import { Platform } from 'react-native';

type Params = 'Home' | 'Detail';

type GradientStackParamList = {
  [param in Params]: undefined;
};

export interface NavigationScreenProps<T extends keyof GradientStackParamList> {
  navigation: StackNavigationProp<GradientStackParamList, T>;
  route: RouteProp<GradientStackParamList, T>;
}

const Stack = createStackNavigator<GradientStackParamList>();

const GradientNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerBackImage: ({ tintColor }) => <BackIcon size={30} color={tintColor} />,
        headerBackTitleVisible: false,
        headerLeftContainerStyle: { paddingLeft: Platform.OS === 'ios' ? Spacing.SCALE_12 : 0 },
      }}
    >
      <Stack.Screen name="Home" component={SavedScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Detail"
        component={GradientDetailScreen}
        options={{ headerTintColor: 'white' }}
      />
    </Stack.Navigator>
  );
};

export default GradientNavigator;
