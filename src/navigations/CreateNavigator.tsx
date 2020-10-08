import BackIcon from '@components/icons/BackIcon';
import EditIcon from '@components/icons/EditIcon';
import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import CreateFromImageScreen from '@screens/create/CreateFromImageScreen';
import CreateFromInputScreen from '@screens/create/CreateFromInputScreen';
import CreateScreen from '@screens/create/CreateScreen';
import { Spacing, Colors } from '@styles/index';
import React from 'react';
import { Platform } from 'react-native';

type CreateStackParamList = {
  Image: { uri: string };
  Create: { error?: string };
  Input: undefined;
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
      }}
    >
      <Stack.Screen
        name="Create"
        component={CreateScreen}
        options={{
          headerRight: () => <EditIcon size={24} color="white" />,
          headerRightContainerStyle: { marginRight: 15 },
        }}
      />
      <Stack.Screen
        name="Image"
        component={CreateFromImageScreen}
        options={{ headerTintColor: 'white' }}
      />
      <Stack.Screen
        name="Input"
        component={CreateFromInputScreen}
        options={{ headerTintColor: Colors.PINK }}
      />
    </Stack.Navigator>
  );
};

export default CreateNavigator;
