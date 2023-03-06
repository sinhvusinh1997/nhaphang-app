import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {Login, Register} from '~/views';
import {DrawerNavigator} from './DrawerNavigator';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <Stack.Navigator
      initialRouteName={isLogged ? 'HomeDrawer' : 'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="HomeDrawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};
