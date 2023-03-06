import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CustomInput} from '~/components';
import {AuthenLayout} from '~/layout';
import {COLORs, ICONs, IMAGEs} from '~/library';

const {width, height} = Dimensions.get('window');

export const Register = () => {
  return (
    <AuthenLayout>
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1, borderWidth: 2, width: '100%', height: '100%'}}>
          <CustomInput
            props={{placeholder: 'Tên đăng nhập', icon: ICONs.USER}}
          />
          <CustomInput props={{placeholder: 'Họ & tên', icon: ICONs.USER}} />
          <CustomInput props={{placeholder: 'Nhập email', icon: ICONs.EMAIL}} />
          <CustomInput
            props={{placeholder: 'Số điện thoại', icon: ICONs.PHONE}}
          />
          <CustomInput props={{placeholder: 'Mật khẩu', icon: ICONs.LOCK}} />
          <CustomInput
            props={{placeholder: 'Nhập lại mật khẩu', icon: ICONs.LOCK}}
          />
        </View>
      </ScrollView>

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
    </AuthenLayout>
    // <View>
    //   <Text style={{color: 'red'}}>button</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: '20%',
    justifyContent: 'center',
    marginTop: 40,
  },
});
