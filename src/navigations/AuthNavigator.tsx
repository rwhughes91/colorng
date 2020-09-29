import BackIcon from '@components/icons/BackIcon';
import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import LoginScreen from '@screens/auth/LoginScreen';
import SignUpScreen from '@screens/auth/SignUpScreen';
import { Spacing, Colors } from '@styles/index';
import React from 'react';
import { Platform } from 'react-native';

type Params = 'Login' | 'SignUp';

type CreateStackParamList = {
  [param in Params]: undefined;
};

export interface NavigationScreenProps<T extends keyof CreateStackParamList> {
  navigation: StackNavigationProp<CreateStackParamList, T>;
  route: RouteProp<CreateStackParamList, T>;
}

const Stack = createStackNavigator<CreateStackParamList>();

const CreateNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerBackImage: ({ tintColor }) => <BackIcon size={30} color={tintColor} />,
        headerBackTitleVisible: false,
        headerLeftContainerStyle: { paddingLeft: Platform.OS === 'ios' ? Spacing.SCALE_12 : 0 },
        headerTintColor: Colors.PINK,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default CreateNavigator;
