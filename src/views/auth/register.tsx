import React, {Component} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const AuthRegister = ({navigation}: any) => {
  return (
    <View>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView>
        <View
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'space-between',
            paddingBottom: 20,
            paddingTop: 20,
            borderWidth: 2,
            borderColor: '#333',
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: '#fff',
              width: '50%',
              alignSelf: 'center',
              backgroundColor: '#fcdc9d',
              borderRadius: 10,
              shadowColor: '#192461',
              shadowOffset: {width: 0, height: 4},
              shadowOpacity: 2,
              shadowRadius: 5,
            }}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text
              style={{
                color: '#0d1933',
                fontSize: 20,
                textAlign: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                textTransform: 'uppercase',
              }}>
              More
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: '#fff',
              width: '50%',
              alignSelf: 'center',
              backgroundColor: '#0d1933',
              borderRadius: 10,
              shadowColor: '#192461',
              shadowOffset: {width: 0, height: 4},
              shadowOpacity: 2,
              shadowRadius: 5,
            }}>
            <Text
              style={{
                color: '#c6bfc2',
                fontSize: 20,
                textAlign: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                textTransform: 'uppercase',
              }}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
