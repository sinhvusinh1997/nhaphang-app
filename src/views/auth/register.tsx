import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  Alert,
  Dimensions,
  ImageSourcePropType,
  KeyboardTypeOptions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {authenticate} from '~/api';
import {CustomButton, CustomInput} from '~/components';
import {AuthenLayout} from '~/layout';
import {COLORs, ICONs} from '~/library';
import {TRegister, TViewProps} from '~/types';
import {LocalStorage, SchemaResgiter} from '~/utils';

const {width, height} = Dimensions.get('window');

interface TInputTemplate {
  placeholder: string;
  icon: ImageSourcePropType;
  name: any;
  keyboardType?: KeyboardTypeOptions | undefined;
  onPressIcon?: () => void;
  secureTextEntry?: boolean;
}

export const Register = () => {
  const navigation = useNavigation<TViewProps['navigation']>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      icon: showPassword ? ICONs.UNLOCK : ICONs.LOCK,
      onPressIcon: () => setShowPassword(!showPassword),
      secureTextEntry: !showPassword,
    },
    {
      placeholder: 'Nhập lại mật khẩu',
      name: 'ConfirmPassword',
      icon: showConfirmPassword ? ICONs.UNLOCK : ICONs.LOCK,
      onPressIcon: () => setShowConfirmPassword(!showConfirmPassword),
      secureTextEntry: !showConfirmPassword,
    },
  ];

  const {
    control,
    handleSubmit,
    formState: {},
  } = useForm<TRegister>({
    mode: 'onBlur',
    resolver: yupResolver(SchemaResgiter),
  });

  const onRegister = (data: TRegister) => {
    setIsLoading(true);
    authenticate
      .register(data)
      .then(res => {
        const newToken = res?.Data?.token;
        LocalStorage.setToken(newToken);
      })
      .catch(err => {
        Alert.alert('Tạo tài khoản thất bại! Vui lòng thử lại.');
      })
      .finally(() => setIsLoading(false));
  };
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
              disabled={isLoading}
            />
            <Text style={styles.text}>Tạo tài khoản</Text>
          </View>
          <View style={styles.inputGroup}>
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
                  disabled: isLoading,
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
                isLoading: isLoading,
              }}
            />
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
