import CreateIcon from '@components/icons/CreateIcon';
import ExploreIcon from '@components/icons/ExploreIcon';
import HeartIcon from '@components/icons/HeartIcon';
import ProfileIcon from '@components/icons/ProfileIcon';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import ProfileScreen from '@screens/ProfileScreen';
import SavedScreen from '@screens/SavedScreen';
import { Colors } from '@styles/index';
import React from 'react';

import CreateNavigator from './CreateNavigator';
import GradientNavigator from './GradientNavigator';

type Params = 'Home' | 'Saved' | 'Create' | 'Profile';

type AppTabParamList = {
  [param in Params]: undefined;
};

export interface NavigationScreenProps<T extends keyof AppTabParamList> {
  navigation: BottomTabNavigationProp<AppTabParamList, T>;
  route: RouteProp<AppTabParamList, T>;
}

const Tab = createBottomTabNavigator<AppTabParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          activeTintColor: Colors.PINK,
          inactiveTintColor: Colors.GRAY,
        }}
      >
        <Tab.Screen
          name="Home"
          component={GradientNavigator}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <ExploreIcon focused={focused} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <HeartIcon focused={focused} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Create"
          component={CreateNavigator}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <CreateIcon focused={focused} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <ProfileIcon focused={focused} size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
