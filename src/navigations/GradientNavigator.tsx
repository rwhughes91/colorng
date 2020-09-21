import BackIcon from '@components/icons/BackIcon';
import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import GradientDetailScreen from '@screens/gradient/GradientDetailScreen';
import GradientListScreen from '@screens/gradient/GradientListScreen';
import GradientSearchScreen from '@screens/gradient/GradientSearchScreen';
import HomeScreen from '@screens/gradient/HomeScreen';
import { Spacing, Colors } from '@styles/index';
import React from 'react';
import { Platform } from 'react-native';
type Params = 'Home' | 'List' | 'Search' | 'Detail';

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
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="List"
        component={GradientListScreen}
        options={{ headerTintColor: 'white' }}
      />
      <Stack.Screen
        name="Search"
        component={GradientSearchScreen}
        options={{ headerTintColor: Colors.PINK }}
      />
      <Stack.Screen
        name="Detail"
        component={GradientDetailScreen}
        options={{ headerTintColor: 'white' }}
      />
    </Stack.Navigator>
  );
};

export default GradientNavigator;
