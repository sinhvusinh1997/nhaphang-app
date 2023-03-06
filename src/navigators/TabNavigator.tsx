import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import 'react-native-gesture-handler';
import {ICONs} from '~/library';
import {Cart, Home, UserInfo} from '~/views';

const Tab = createBottomTabNavigator();

const initTabScreen = [
  {
    icon: ICONs.HOME,
    name: 'homePage',
    title: 'Trang chu',
    component: Home,
  },
  {
    icon: ICONs.USER,
    name: 'user',
    title: 'Cá nhân',
    component: UserInfo,
  },
  {
    icon: ICONs.CART,
    name: 'cart',
    title: 'Giỏ hàng',
    component: Cart,
  },
];

export const TabNavigators = () => {
  return (
    <Tab.Navigator initialRouteName="homePage">
      {initTabScreen.map(item => (
        <Tab.Screen
          name={item.name}
          key={item.name}
          component={item.component}
          options={{
            title: item.title,
            tabBarIcon: () => {
              return (
                <Image
                  source={item.icon}
                  resizeMode="stretch"
                  style={{width: 20, height: 20}}
                />
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
