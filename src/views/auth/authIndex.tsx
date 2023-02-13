import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TextTouch} from '~/components';
import {ICONs} from '~/library';
import {positionStyles} from '~/styles/index';
import {AuthRegister} from '.';
import {AuthLoginIndex} from './login';

const stylesHead = StyleSheet.create({
  background: {
    height: '30%',
    width: '100%',
  },
  logo: {
    width: 120,
    height: 100,
  },
  logoText: {
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

const styleMain = StyleSheet.create({
  mainContaner: {
    height: '100%',
    justifyContent: 'flex-start',
  },
  mainDir: {
    flexDirection: 'row',
  },
  mainButton: {
    width: '50%',
    borderBottomWidth: 2,
  },
  mainButtonText: {
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

const AuthHead = () => {
  return (
    <View style={[stylesHead.background]}>
      <ImageBackground
        source={ICONs.BG_LOGIN}
        resizeMode="cover"
        style={[positionStyles.center, {width: '100%', height: '100%'}]}>
        <Image
          source={ICONs.LOGO}
          resizeMode="contain"
          style={stylesHead.logo}
        />
        <Text style={stylesHead.logoText}>
          mona <Text style={{color: '#F5851E'}}>nhtq</Text>
        </Text>
      </ImageBackground>
    </View>
  );
};

const AuthMain = ({navigation}: any) => {
  const [state, setState] = useState('SIGN-IN');

  return (
    <View style={[styleMain.mainContaner, {}]}>
      <View style={styleMain.mainDir}>
        <TextTouch
          textButton="Đăng nhập"
          styleButton={[styleMain.mainButton]}
          styleText={[styleMain.mainButtonText]}
          onPress={() => setState('SIGN-IN')}
          disabled={state === 'SIGN-IN'}
        />
        <TextTouch
          textButton="Đăng ký"
          styleButton={[styleMain.mainButton]}
          styleText={[styleMain.mainButtonText]}
          onPress={() => setState('SIGN-UP')}
          disabled={state === 'SIGN-UP'}
        />
      </View>
      {state === 'SIGN-IN' ? <AuthLoginIndex /> : <AuthRegister />}
    </View>
  );
};

export const AuthIndex = () => {
  return (
    <View>
      <StatusBar barStyle={'light-content'} />
      <AuthHead />
      <SafeAreaView style={{height: '70%', backgroundColor: '#e9eff1'}}>
        <AuthMain />
      </SafeAreaView>
    </View>
  );
};
