import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import 'react-native-gesture-handler';
import {AuthIndex} from '~/views';
import {DrawerNavigator} from './DrawerNavigator';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthIndex"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AuthIndex" component={AuthIndex} />
      <Stack.Screen name="HomeDrawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};
