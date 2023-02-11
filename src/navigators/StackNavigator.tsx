import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthForgetPassword, AuthLogin, AuthRegister} from '~/views';
import {DrawerNavigator} from './DrawerNavigator';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={AuthLogin} />
      <Stack.Screen name="Register" component={AuthRegister} />
      <Stack.Screen name="ForgetPassword" component={AuthForgetPassword} />
      <Stack.Screen name="HomeDrawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};
