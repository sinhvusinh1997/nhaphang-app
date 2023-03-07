import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {ICONs} from '~/library';
import {Complain, Deposit, Order, Payment, Tracking} from '~/views';
import {CustomeDrawer} from './CustomeDrawer';
import {TabNavigators} from './TabNavigator';

const Drawer = createDrawerNavigator();

const style = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});

const initDrawerScreen = [
  {
    icon: ICONs.HOME,
    name: 'home',
    title: 'Trang chủ',
    component: TabNavigators,
  },
  {
    icon: ICONs.ORDER,
    name: 'order',
    title: 'Mua hộ',
    component: Order,
  },
  {
    icon: ICONs.DEPOSIT,
    name: 'deposit',
    title: 'Ký gửi',
    component: Deposit,
  },
  {
    icon: ICONs.PAYMENT,
    name: 'payment',
    title: 'Thanh toán hộ',
    component: Payment,
  },
  {
    icon: ICONs.TRACKING,
    name: 'tracking',
    title: 'Tracking',
    component: Tracking,
  },
  {
    icon: ICONs.REPORT,
    name: 'report',
    title: 'Khiếu nại',
    component: Complain,
  },
];

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{
        // headerShown: false,
        drawerActiveBackgroundColor: '#9e598d',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#9e598d',
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}
      drawerContent={props => <CustomeDrawer {...props} />}>
      {initDrawerScreen.map(item => (
        <Drawer.Screen
          name={item.name}
          key={item.name}
          component={item.component}
          options={{
            title: item.title,
            drawerIcon: ({color}) => {
              return (
                <Image
                  source={item.icon}
                  style={[style.icon, {tintColor: color}]}
                  resizeMode="contain"
                />
              );
            },
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};
