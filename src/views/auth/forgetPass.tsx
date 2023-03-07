import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {CustomButton, CustomInput} from '~/components';
import {AuthenLayout} from '~/layout';
import {COLORs, ICONs} from '~/library';
import {SchemaForgetPass} from '~/schema';
import {TForgetPassword} from '~/types';

export const ForgetPass = ({navigation}: any) => {
  const {control, handleSubmit} = useForm<TForgetPassword>({
    mode: 'onBlur',
    resolver: yupResolver(SchemaForgetPass),
  });

  const onSubmit = (data: TForgetPassword) => {
    console.log(data);
  };

  return (
    <AuthenLayout>
      <View style={styles.inner}>
        <View style={styles.logo}>
          <CustomButton
            icon={ICONs.BACK}
            onPress={() => navigation.goBack()}
            iconStyle={styles.icon}
            buttonStyle={{
              paddingVertical: 6,
              margin: 0,
              width: '16%',
              backgroundColor: COLORs.SECONDARY,
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
              name: 'Email',
              placeholder: 'Nhập Email đã đăng ký!',
              icon: ICONs.EMAIL,
            }}
          />
        </View>
        <CustomButton
          {...{
            name: 'Gửi yêu cầu khởi tạo!',
            buttonStyle: {backgroundColor: COLORs.PRIMARY, width: '80%'},
            onPress: handleSubmit(onSubmit),
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
