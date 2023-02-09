import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const AuthLogin = ({navigation}: any) => {
  return (
    <ImageBackground
      source={require('../../assets/images/loginBG.jpeg')}
      style={{height: '100%', width: '100%'}}
      resizeMode="stretch">
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView>
        <View
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'flex-end',
          }}>
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
            }}
            onPress={() => {
              navigation.navigate('HomeDrawer');
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
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
