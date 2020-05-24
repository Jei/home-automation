import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DeviceScreen from '../features/device';
import {MainNavigationParamList} from '../types';
import HomeScreen from '../features/home';

const Stack = createStackNavigator<MainNavigationParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4500c6',
        },
        headerTintColor: '#ffffff',
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
