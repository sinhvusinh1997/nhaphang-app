import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import 'react-native-gesture-handler';
import {Complain, Deposit, Order, Payment, Tracking} from '~/views';
import {TabNavigators} from './TabNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={TabNavigators} />
      <Drawer.Screen name="Order" component={Order} />
      <Drawer.Screen name="Complain" component={Complain} />
      <Drawer.Screen name="Deposit" component={Deposit} />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="Tracking" component={Tracking} />
    </Drawer.Navigator>
  );
};
