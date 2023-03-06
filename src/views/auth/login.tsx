import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CustomButton, CustomInput, CustomLink} from '~/components';
import {AuthenLayout} from '~/layout';
import {COLORs, ICONs, IMAGEs} from '~/library';

const {width, height} = Dimensions.get('window');

const FormGroup = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <CustomInput props={{placeholder: 'Nhập username', icon: ICONs.USER}} />
      <CustomInput
        props={{
          placeholder: 'Nhập mật khẩu',
          icon: showPass ? ICONs.UNLOCK : ICONs.LOCK,
          secureTextEntry: !showPass,
          onPressIcon: () => setShowPass(!showPass),
          // errorMsg: 'error error',
        }}
      />
      <CustomButton
        props={{
          name: 'Đăng nhập',
          buttonStyle: {backgroundColor: COLORs.PRIMARY},
          onPress: () => console.log('Đăng nhập'),
        }}
      />
    </>
  );
};

export const Login = () => {
  return (
    <AuthenLayout>
      <View style={styles.logo}>
        <Image
          source={IMAGEs.LOGO}
          resizeMode="contain"
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={styles.form}>
        <FormGroup />
        <CustomLink
          props={{
            title: 'Quên mật khẩu?',
            onPress: () => console.log('Quên mật khẩu'),
            linkStyle: {maxWidth: 120},
            textStyle: {color: COLORs.SECONDARY},
          }}
        />
      </View>
      <View style={styles.another}>
        <CustomButton
          props={{
            name: 'Đăng ký',
            buttonStyle: {backgroundColor: COLORs.INFOR},
            onPress: () => console.log('Đăng ký'),
          }}
        />
      </View>
    </AuthenLayout>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: '20%',
    width: width,
    padding: 10,
    marginBottom: 20,
  },
  form: {
    width: '70%',
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
