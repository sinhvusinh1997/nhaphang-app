import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>Home!</Text>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  return (
    <SafeAreaView>
      <Text>Settings!</Text>
    </SafeAreaView>
  );
}

export const Footer = () => (
  /* return <View style={{backgroundColor: 'blue', flexDirection: 'row'}}></View>;*/
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({});
