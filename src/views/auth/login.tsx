import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonTouch, FormInput, TextTouch} from '~/components';
import {ICONs} from '~/library';
import {buttonStyles, positionStyles, textStyles} from '~/styles';

const AuthForgetPassword = ({onPress}: {onPress: () => void}) => {
  return (
    <View style={[positionStyles.center]}>
      <ButtonTouch
        iconButton={ICONs.BACK}
        onPress={onPress}
        styleButton={[buttonStyles.buttonBase, buttonStyles.buttonSecondary]}
        styleIcon={[{tintColor: '#fff'}]}
      />
      <Text
        style={[
          textStyles.textDrak,
          {fontSize: 14, textAlign: 'center', padding: 20},
        ]}>
        Vui lòng nhập chính xác thông tin bạn đã đăng ký trước đây. Chúng tôi sẽ
        gửi email tới địa chỉ email bạn đã đăng ký để lấy lại mật khẩu.
      </Text>
      <FormInput
        type="email"
        label="Email"
        placeholder={'Địa chỉ email khôi phục mật khẩu'}
        icon={ICONs.EMAIL}
      />
    </View>
  );
};

const AuthLogin = ({onPress}: {onPress: () => void}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <View style={{alignItems: 'flex-end'}}>
      <FormInput
        type="username"
        label="UserName"
        placeholder="UserName"
        icon={ICONs.USER}
      />
      <FormInput
        type="password"
        label="Mật khẩu"
        placeholder="Mật khẩu"
        icon={!showPass ? ICONs.LOCK : ICONs.UNLOCK}
        secureTextEntry={!showPass}
        onPress={() => setShowPass(!showPass)}
      />
      <TextTouch
        textButton="Quên mật khẩu?"
        styleText={[
          textStyles.textBase,
          textStyles.textDrak,
          {
            textAlign: 'right',
            padding: 10,
            width: 140,
            fontStyle: 'italic',
          },
        ]}
        onPress={onPress}
      />
    </View>
  );
};

export const AuthLoginIndex = () => {
  const [login, setLogin] = useState(true);

  return (
    <View style={[positionStyles.spaceEvenly, {flex: 1}]}>
      {login ? (
        <AuthLogin onPress={() => setLogin(false)} />
      ) : (
        <AuthForgetPassword onPress={() => setLogin(true)} />
      )}

      <ButtonTouch
        textButton={login ? 'Đăng nhập' : 'Xác nhận'}
        styleButton={[buttonStyles.buttonBase, buttonStyles.buttonPrimary]}
        styleText={[
          {fontWeight: 'bold', color: '#fff', textTransform: 'uppercase'},
        ]}
      />
      <View
        style={{
          width: '100%',
          paddingRight: 10,
          alignItems: 'center',
        }}>
        <Text
          style={[
            textStyles.textBase,
            textStyles.textDrak,
            {fontStyle: 'italic'},
          ]}>
          Design & Build
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={{paddingTop: 5, marginRight: 2, fontStyle: 'italic'}}>
            by
          </Text>
          <Text style={{fontSize: 30, color: '#F5851E', fontWeight: 'bold'}}>
            Siinh
          </Text>
        </View>
      </View>
    </View>
  );
};
