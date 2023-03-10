import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {CustomButton, CustomInput} from '~/components';
import {AuthenLayout} from '~/layout';
import {COLORs, ICONs} from '~/library';
import {SchemaForgetPass} from '~/utils';
import {TForgetPassword, TViewProps} from '~/types';
import {useNavigation} from '@react-navigation/native';
import {authenticate} from '~/api';

export const ForgetPass = () => {
  const navigation = useNavigation<TViewProps['navigation']>();
  const [isLoading, setIsLoading] = useState(false);
  const {control, handleSubmit, reset} = useForm<TForgetPassword>({
    mode: 'onBlur',
    resolver: yupResolver(SchemaForgetPass),
  });

  const onSubmit = (data: TForgetPassword) => {
    setIsLoading(true);
    authenticate
      .forgotPassword({userName: data.UserName})
      .then(res => {
        Alert.alert(
          'Gửi yêu cầu thành công!',
          'Vui lòng kiểm tra email để lấy mật khẩu mới!',
          [
            {
              text: 'Đăng nhập',
              onPress: () => navigation.navigate('Login'),
            },
            {
              text: 'Huỷ',
            },
          ],
        );
      })
      .catch(err =>
        Alert.alert('Gửi yêu cầu thất bại!', `Email không tồn tại!`),
      )
      .finally(() => {
        reset();
        setIsLoading(false);
      });
  };

  return (
    <AuthenLayout>
      <View style={styles.inner}>
        <View style={styles.logo}>
          <CustomButton
            {...{
              icon: ICONs.BACK,
              onPress: () => navigation.goBack(),
              iconStyle: styles.icon,
              buttonStyle: {
                paddingVertical: 6,
                margin: 0,
                width: '16%',
                backgroundColor: COLORs.SECONDARY,
              },
              disabled: isLoading,
            }}
          />
          <Text style={styles.text}>Reset mật khẩu!</Text>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.noteText}>
            Vui lòng nhập đúng email bạn đã đăng ký tài khoản!
          </Text>
          <CustomInput
            {...{
              control,
              name: 'UserName',
              placeholder: 'Nhập Email đã đăng ký!',
              icon: ICONs.EMAIL,
              disabled: isLoading,
            }}
          />
        </View>
        <CustomButton
          {...{
            name: 'Gửi yêu cầu khởi tạo!',
            buttonStyle: {backgroundColor: COLORs.PRIMARY, width: '100%'},
            onPress: handleSubmit(onSubmit),
            isLoading,
            disabled: isLoading,
          }}
        />
      </View>
    </AuthenLayout>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 40,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 20,
    height: 20,
  },
  inner: {
    paddingHorizontal: '10%',
    height: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
    color: COLORs.SECONDARY,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  inputGroup: {
    width: '100%',
    alignItems: 'center',
    marginTop: '20%',
  },
  noteText: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORs.BLACK,
  },
});
