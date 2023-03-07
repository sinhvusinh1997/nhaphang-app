import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from 'react';
import {FieldValues, Path, useForm} from 'react-hook-form';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  KeyboardTypeOptions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CustomButton, CustomInput} from '~/components';
import {AuthenLayout} from '~/layout';
import {COLORs, ICONs, IMAGEs} from '~/library';
import {SchemaResgiter} from '~/schema';
import {TRegister} from '~/types';

const {width, height} = Dimensions.get('window');

interface TInputTemplate {
  placeholder: string;
  icon: ImageSourcePropType;
  name: any;
  keyboardType?: KeyboardTypeOptions | undefined;
  onPressIcon?: () => void;
  secureTextEntry?: boolean;
}

const FormGroup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const InputTemplate: TInputTemplate[] = [
    {
      placeholder: 'Nhập tên đăng nhập',
      name: 'UserName',
      icon: ICONs.USER,
    },
    {
      placeholder: 'Nhập họ & tên',
      name: 'FullName',
      icon: ICONs.USER,
    },
    {
      placeholder: 'Nhập email',
      name: 'Email',
      icon: ICONs.EMAIL,
      keyboardType: 'email-address',
    },
    {
      placeholder: 'Nhập số điện thoại',
      name: 'Phone',
      icon: ICONs.PHONE,
      keyboardType: 'numeric',
    },
    {
      placeholder: 'Nhập mật khẩu',
      name: 'Password',
      icon: !showPassword ? ICONs.UNLOCK : ICONs.LOCK,
      onPressIcon: () => setShowPassword(!showPassword),
      secureTextEntry: showPassword,
    },
    {
      placeholder: 'Nhập lại mật khẩu',
      name: 'ConfirmPassword',
      icon: !showConfirmPassword ? ICONs.UNLOCK : ICONs.LOCK,
      onPressIcon: () => setShowConfirmPassword(!showConfirmPassword),
      secureTextEntry: showConfirmPassword,
    },
  ];

  const {control, handleSubmit} = useForm<TRegister>({
    mode: 'onBlur',
    resolver: yupResolver(SchemaResgiter),
  });

  const onRegister = (data: TRegister) => {
    console.log(data);
  };
  return (
    <>
      {InputTemplate.map(input => (
        <CustomInput
          key={input.placeholder}
          {...{
            control,
            name: input.name,
            placeholder: input.placeholder,
            icon: input.icon,
            keyboardType: input.keyboardType || 'default',
            onPressIcon: input?.onPressIcon,
            secureTextEntry: input?.secureTextEntry,
          }}
        />
      ))}
      <CustomButton
        {...{
          name: 'Đăng ký',
          onPress: handleSubmit(onRegister),
          buttonStyle: {
            backgroundColor: COLORs.PRIMARY,
          },
          textStyle: undefined,
        }}
      />
    </>
  );
};

export const Register = ({navigation}: any) => {
  return (
    <AuthenLayout>
      <ScrollView style={{flex: 1, width: width}}>
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
            <Text style={styles.text}>Tạo tài khoản</Text>
          </View>
          <View style={styles.inputGroup}>
            <FormGroup />
          </View>
        </View>
      </ScrollView>
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
  },
  text: {
    fontSize: 26,
    color: COLORs.SECONDARY,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  inputGroup: {
    width: '100%',
    alignItems: 'flex-end',
  },
});
