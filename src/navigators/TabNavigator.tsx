import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import 'react-native-gesture-handler';
import {Cart, UserInfo} from '~/views';

const Tab = createBottomTabNavigator();

export const TabNavigators = () => {
  return (
    <Tab.Navigator initialRouteName="Cart">
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="User" component={UserInfo} />
    </Tab.Navigator>
  );
};
