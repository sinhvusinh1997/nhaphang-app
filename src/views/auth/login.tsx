import React, {useEffect, useState} from 'react';
import {Alert, Dimensions, Image, StyleSheet, View} from 'react-native';
import {CustomButton, CustomInput, CustomLink} from '~/components';
import {AuthenLayout} from '~/layout';
import {COLORs, ICONs, IMAGEs} from '~/library';
import {TLogin} from '~/types';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {SchemaLogin} from '~/schema';
import {useIsFocused} from '@react-navigation/native';
import {authenticate} from '~/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');

const FormGroup = () => {
  const [showPass, setShowPass] = useState(false);
  const outFocus = useIsFocused();

  const storeData = async (token: string) => {
    try {
      await AsyncStorage.setItem('@storage_token', token);
    } catch (e) {
      // saving error
    }
  };

  const {control, handleSubmit, clearErrors, reset} = useForm<TLogin>({
    mode: 'onBlur',
    defaultValues: {
      UserName: '',
      Password: '',
    },
    resolver: yupResolver(SchemaLogin),
  });

  useEffect(() => {
    reset();
    clearErrors();
  }, [outFocus]);

  const onSubmit = (data: TLogin) => {
    authenticate
      .login({UserName: data?.UserName, Password: data?.Password})
      .then(res => {
        storeData(res?.Data?.token);
      })
      .catch(err => {
        Alert.alert('Không thể đăng nhập!', `${err.ResultMessage}`);
      });
  };

  return (
    <>
      <CustomInput
        {...{
          control,
          name: 'UserName',
          placeholder: 'Nhập username',
          icon: ICONs.USER,
        }}
      />
      <CustomInput
        {...{
          control,
          name: 'Password',
          placeholder: 'Nhập mật khẩu',
          icon: showPass ? ICONs.UNLOCK : ICONs.LOCK,
          secureTextEntry: !showPass,
          onPressIcon: () => setShowPass(!showPass),
        }}
      />
      <CustomButton
        {...{
          name: 'Đăng nhập',
          buttonStyle: {backgroundColor: COLORs.PRIMARY},
          onPress: handleSubmit(onSubmit),
        }}
      />
    </>
  );
};

export const Login = ({navigation}: any) => {
  return (
    <AuthenLayout>
      <View style={styles.logo}>
        <Image
          source={IMAGEs.LOGO}
          resizeMode="contain"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
      <View style={styles.form}>
        <FormGroup />
        <CustomLink
          {...{
            title: 'Quên mật khẩu?',
            onPress: () => navigation.navigate('ForgetPass'),
            linkStyle: {maxWidth: 120},
            textStyle: {color: COLORs.SECONDARY},
          }}
        />
        <View style={styles.another}>
          <CustomButton
            {...{
              name: 'Đăng ký',
              buttonStyle: {backgroundColor: COLORs.INFOR},
              onPress: () => navigation.navigate('Register'),
            }}
          />
        </View>
      </View>
    </AuthenLayout>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: '20%',
    padding: 20,
    width: width,
    marginBottom: 20,
  },
  form: {
    width: '80%',
    alignItems: 'center',
  },
  another: {
    width: width,
    borderTopWidth: 2,
    borderTopColor: COLORs.BLACK,
    marginTop: 30,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 200,
  },
});
