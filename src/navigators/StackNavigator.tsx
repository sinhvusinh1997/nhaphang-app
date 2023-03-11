import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import 'react-native-gesture-handler';
import {ForgetPass, Login, Register} from '~/views';
import {DrawerNavigator} from './DrawerNavigator';

const Stack = createNativeStackNavigator();

export const StackNavigator: FC<{userToken: null | string}> = ({userToken}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {userToken ? (
        <Stack.Screen name="HomeDrawer" component={DrawerNavigator} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ForgetPass" component={ForgetPass} />
        </>
      )}
    </Stack.Navigator>
  );
};
