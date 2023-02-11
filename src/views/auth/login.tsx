import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {ICONs} from '~/library';
import {
  buttonStyles,
  formStyles,
  positionStyles,
  textStyles,
} from '~/styles/index';

const styles = StyleSheet.create({
  background: {
    height: '100%',
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

export const AuthLogin = ({navigation}: any) => {
  return (
    <ImageBackground
      source={ICONs.loginBG}
      style={styles.background}
      resizeMode="cover">
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView>
        <View style={positionStyles.spaceEvenly}>
          {/* LOGO */}
          <View style={[positionStyles.center]}>
            <Image
              source={ICONs.logo}
              resizeMode="contain"
              style={styles.logo}
            />
            <Text style={styles.logoText}>
              mona <Text style={{color: '#F5851E'}}>nhtq</Text>
            </Text>
          </View>

          {/* Form */}
          <View style={[positionStyles.center]}>
            <View style={formStyles.formGroup}>
              {/* <Text style={formStyles.formText}>UserName</Text> */}
              <TextInput
                style={formStyles.formInput}
                placeholder="Username"
                placeholderTextColor="black"
              />
            </View>

            <View style={formStyles.formGroup}>
              {/* <Text style={formStyles.formText}>Password</Text> */}
              <TextInput
                style={formStyles.formInput}
                placeholder="Password"
                placeholderTextColor="black"
              />
            </View>
          </View>

          {/* Button tools */}
          <View>
            <View>
              <TouchableOpacity
                style={[buttonStyles.buttonBase, buttonStyles.buttonPrimary]}
                onPress={() => {
                  navigation.navigate('HomeDrawer');
                }}>
                <Text
                  style={[
                    textStyles.textBase,
                    textStyles.textLight,
                    textStyles.textBold,
                    {textTransform: 'uppercase'},
                  ]}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={[buttonStyles.buttonBase, buttonStyles.buttonSecondary]}
                onPress={() => {
                  navigation.navigate('Register');
                }}>
                <Text
                  style={[
                    textStyles.textBase,
                    textStyles.textDrak,
                    textStyles.textBold,
                    {textTransform: 'uppercase'},
                  ]}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* @ */}
          <View style={[positionStyles.center]}>
            <Text style={[textStyles.textBase, textStyles.textLight]}>
              Design & Build by Siinh
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
