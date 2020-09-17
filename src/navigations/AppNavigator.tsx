import CreateIcon from '@components/icons/CreateIcon';
import ExploreIcon from '@components/icons/ExploreIcon';
import HeartIcon from '@components/icons/HeartIcon';
import ProfileIcon from '@components/icons/ProfileIcon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CreateScreen from '@screens/CreateScreen';
import HomeScreen from '@screens/HomeScreen';
import ProfileScreen from '@screens/ProfileScreen';
import SavedScreen from '@screens/SavedScreen';
import { Colors } from '@styles/index';
import React from 'react';

const Tab = createBottomTabNavigator();

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
          name="home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <ExploreIcon focused={focused} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="saved"
          component={SavedScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <HeartIcon focused={focused} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="create"
          component={CreateScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <CreateIcon focused={focused} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="settings"
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
