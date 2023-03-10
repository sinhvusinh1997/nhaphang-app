import React from 'react';
import {ActivityIndicator, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const LoadingScreen = () => {
  return (
    <LinearGradient
      colors={['#F5851E', '#1F1F67']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={{
        width: '100%',
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
      }}>
      <StatusBar barStyle={'light-content'} />
      <ActivityIndicator size="large" color={'#fff'} />
    </LinearGradient>
  );
};
