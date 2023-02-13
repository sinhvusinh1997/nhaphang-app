import React, {useState} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ButtonTouch, FormInput} from '~/components';
import {ICONs} from '~/library';
import {buttonStyles, positionStyles} from '~/styles';

const AuthPass = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <FormInput
        type="password"
        label="Mật khẩu"
        placeholder="Mật khẩu"
        icon={!showPass ? ICONs.LOCK : ICONs.UNLOCK}
        onPress={() => setShowPass(!showPass)}
        secureTextEntry={!showPass}
      />
      <FormInput
        type="password"
        label="Nhập lại mật khẩu"
        placeholder="Nhập lại mật khẩu"
        icon={!showPass ? ICONs.LOCK : ICONs.UNLOCK}
        onPress={() => setShowPass(!showPass)}
        secureTextEntry={!showPass}
      />
    </>
  );
};

export const AuthRegister = ({navigation}: any) => {
  return (
    <ScrollView>
      <View style={[positionStyles.center, {marginTop: 20}]}>
        <FormInput
          type="username"
          label="Tên đăng nhập"
          placeholder="Tên đăng nhập"
          icon={ICONs.USER}
        />
        <FormInput
          type="fullname"
          label="Họ & tên"
          placeholder="Họ & tên"
          icon={ICONs.USER}
        />
        <FormInput
          type="email"
          label="Emall"
          placeholder="Email"
          icon={ICONs.EMAIL}
          keyboardType="email-address"
        />
        <FormInput
          type="phone"
          label="Số điện thoại"
          placeholder="Số điện thoại"
          icon={ICONs.PHONE}
          keyboardType="numeric"
        />
        <AuthPass />
        <ButtonTouch
          textButton="Đăng ký"
          styleButton={[
            buttonStyles.buttonBase,
            buttonStyles.buttonPrimary,
            {marginTop: 20},
          ]}
          styleText={[
            {fontWeight: 'bold', color: '#fff', textTransform: 'uppercase'},
          ]}
        />
      </View>
    </ScrollView>
  );
};
