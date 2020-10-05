import CreateIcon from '@components/icons/CreateIcon';
import ExploreIcon from '@components/icons/ExploreIcon';
import HeartIcon from '@components/icons/HeartIcon';
import ProfileIcon from '@components/icons/ProfileIcon';
import useFirebase from '@hooks/useFirebase';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import * as actions from '@store/actions/index';
import { Colors } from '@styles/index';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AuthNavigator from './AuthNavigator';
import CreateNavigator from './CreateNavigator';
import GradientNavigator from './GradientNavigator';
import ProfileNavigator from './ProfileNavigator';
import SavedNavigator from './SavedNavigator';

type Params = 'Home' | 'Saved' | 'Create' | 'Profile';

type AppTabParamList = {
  [param in Params]: undefined;
};

export interface NavigationScreenProps<T extends keyof AppTabParamList> {
  navigation: BottomTabNavigationProp<AppTabParamList, T>;
  route: RouteProp<AppTabParamList, T>;
}

const Tab = createBottomTabNavigator<AppTabParamList>();

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const firebase = useFirebase();

  useEffect(() => {
    dispatch(actions.fetchTodaysGradients());
    dispatch(actions.fetchUsersGradientsAndColors());
  }, [dispatch]);

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
          component={SavedNavigator}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <HeartIcon focused={focused} size={size} color={color} />
            ),
          }}
        />
        {firebase && firebase.user && (
          <Tab.Screen
            name="Create"
            component={CreateNavigator}
            options={{
              tabBarIcon: ({ focused, size, color }) => (
                <CreateIcon focused={focused} size={size} color={color} />
              ),
            }}
          />
        )}
        <Tab.Screen
          name="Profile"
          component={firebase?.user ? ProfileNavigator : AuthNavigator}
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
