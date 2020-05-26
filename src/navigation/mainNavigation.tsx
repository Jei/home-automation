import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DeviceScreen from '../features/device';
import {MainNavigationParamList} from '../types';
import HomeScreen from '../features/home';
import Colors from '../colors';

const Stack = createStackNavigator<MainNavigationParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: Colors.textPrimary,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Device"
        component={DeviceScreen}
        options={({route}) => ({title: route.params.id})}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
