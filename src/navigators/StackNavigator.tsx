import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {ForgetPass, Login, Register} from '~/views';
import {DrawerNavigator} from './DrawerNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform} from 'react-native';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  const [isLogged, setIsLogged] = useState(false);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_token');
      setIsLogged(!!value);
      Platform;
      console.log(Platform.OS, value);
    } catch (e) {
      // error reading value
    }
  };

  getData();

  return (
    <Stack.Navigator
      initialRouteName={isLogged ? 'HomeDrawer' : 'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgetPass" component={ForgetPass} />
      <Stack.Screen name="HomeDrawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};
