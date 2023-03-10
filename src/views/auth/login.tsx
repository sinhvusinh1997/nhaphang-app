import {yupResolver} from '@hookform/resolvers/yup';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Alert, Dimensions, Image, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {authenticate} from '~/api';
import {CustomButton, CustomInput, CustomLink} from '~/components';
import {AuthenLayout} from '~/layout';
import {COLORs, ICONs, IMAGEs} from '~/library';
import {RootState, setUser} from '~/redux';
import {TLogin, TViewProps} from '~/types';
import {LocalStorage, SchemaLogin, _format} from '~/utils';

const {width, height} = Dimensions.get('window');

const FormGroup = ({setUserToken}: any) => {
  const navigation = useNavigation<TViewProps['navigation']>();
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const outFocus = useIsFocused();
  const dispatch = useDispatch();
  const {current} = useSelector((state: RootState) => state.user);

  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    formState: {isSubmitted, isSubmitSuccessful, isLoading: formLoading},
  } = useForm<TLogin>({
    mode: 'onBlur',
    resolver: yupResolver(SchemaLogin),
  });

  useEffect(() => {
    reset();
    // clearErrors();
  }, [outFocus]);

  const onSubmit = (data: TLogin) => {
    setIsLoading(true);
    authenticate
      .login({UserName: data?.UserName, Password: data?.Password})
      .then(res => {
        const newToken = res?.Data?.token;

        LocalStorage.setToken(newToken);
        const user: any = JSON.parse(
          _format.getJWTDecode(newToken)[
            'http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata'
          ],
        );

        dispatch(setUser(user));
        setUserToken(newToken);
      })
      .catch(err => Alert.alert('Lỗi đăng nhập!', `${err}`))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <CustomInput
        {...{
          control,
          name: 'UserName',
          placeholder: 'Nhập username',
          icon: ICONs.USER,
          disabled: isLoading,
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
          disabled: isLoading,
        }}
      />
      <CustomButton
        {...{
          name: 'Đăng nhập',
          buttonStyle: {backgroundColor: COLORs.PRIMARY},
          onPress: handleSubmit(onSubmit),
          isLoading,
        }}
      />
      <CustomLink
        {...{
          title: 'Quên mật khẩu?',
          onPress: () => navigation.navigate('ForgetPass'),
          linkStyle: {maxWidth: 120},
          textStyle: {color: COLORs.SECONDARY},
          disabled: isLoading,
        }}
      />
      <View style={styles.another}>
        <CustomButton
          {...{
            name: 'Đăng ký',
            buttonStyle: {backgroundColor: COLORs.INFOR},
            onPress: () => navigation.navigate('Register'),
            disabled: isLoading,
          }}
        />
      </View>
    </>
  );
};

export const Login = (props: any) => {
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
        <FormGroup setUserToken={props.setUserToken} />
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
