import BackIcon from '@components/icons/BackIcon';
import EditIcon from '@components/icons/EditIcon';
import ColorPickerButton from '@components/ui/buttons/ColorPickerButton';
import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import CreateEditScreen from '@screens/create/CreateEditScreen';
import CreateFromImageScreen from '@screens/create/CreateFromImageScreen';
import CreateFromInputScreen from '@screens/create/CreateFromInputScreen';
import CreateNewScreen from '@screens/create/CreateNewScreen';
import CreateScreen from '@screens/create/CreateScreen';
import { Spacing, Colors, Globals } from '@styles/index';
import { Colors as ColorsType } from '@typeDefs/index';
import React from 'react';
import { Platform } from 'react-native';

type CreateStackParamList = {
  Image: { uri: string };
  Create: { error?: string };
  Input: undefined;
  Edit: undefined;
  New: { colors: ColorsType };
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
        options={{
          headerTintColor: Colors.PINK,
          headerRight: () => (
            <ColorPickerButton size={Globals.COLOR_SIZE} iconSize={24} focused={false} />
          ),
        }}
      />
      <Stack.Screen
        name="Edit"
        component={CreateEditScreen}
        options={{ headerTintColor: Colors.PINK }}
      />
      <Stack.Screen name="New" component={CreateNewScreen} options={{ headerTintColor: 'white' }} />
    </Stack.Navigator>
  );
};

export default CreateNavigator;
