import BackIcon from '@components/icons/BackIcon';
import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import CreateFromImageScreen from '@screens/create/CreateFromImageScreen';
import CreateFromInputScreen from '@screens/create/CreateFromInputScreen';
import CreateScreen from '@screens/create/CreateScreen';
import { Colors, Spacing } from '@styles/index';
import React from 'react';
import { Platform } from 'react-native';

type Params = 'Create' | 'Image' | 'Input';

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
        headerBackImage: () => <BackIcon size={30} color={Colors.PINK} />,
        headerBackTitleVisible: false,
        headerLeftContainerStyle: { paddingLeft: Platform.OS === 'ios' ? Spacing.SCALE_12 : 0 },
      }}
    >
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen name="Image" component={CreateFromImageScreen} />
      <Stack.Screen name="Input" component={CreateFromInputScreen} />
    </Stack.Navigator>
  );
};

export default CreateNavigator;
