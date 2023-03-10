import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {ICONs, IMAGEs} from '~/library';
import {RootState} from '~/redux';

/** HEAD INFORMATION OF USER
 *
 * @returns
 */
const styleHeadInfo = StyleSheet.create({
  bg: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#9e598d',
  },
  containerMenu: {
    alignItems: 'flex-end',
  },
  text: {
    color: '#f8f8f8',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  coins: {
    width: 16,
    height: 16,
    marginRight: 10,
    tintColor: '#fff',
  },
  vip: {
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f8f8f8',
    color: '#fff',
    fontWeight: 'bold',
    padding: 4,
    fontSize: 12,
  },
});

const HeadInfo = () => {
  const {current} = useSelector((state: RootState) => state.user);

  return (
    <ImageBackground source={IMAGEs.BG_MENU} style={styleHeadInfo.bg}>
      <Image
        source={ICONs.USER}
        resizeMode="contain"
        style={styleHeadInfo.userImage}
      />
      <View style={styleHeadInfo.containerMenu}>
        <Text style={styleHeadInfo.text}>{current?.UserName}</Text>
        <Text style={styleHeadInfo.vip}>VIP 10</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={ICONs.COINS}
            resizeMode="contain"
            style={styleHeadInfo.coins}
          />
          <Text style={styleHeadInfo.text}>1.000.000.000</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

/** LOGOUT COMPONENT
 *
 * @returns Button to logout
 */

const Logout = () => {
  return (
    <View
      style={{
        padding: 10,
        paddingBottom: 50,
      }}>
      <TouchableOpacity
        style={{
          width: '50%',
          borderRadius: 16,
          padding: 10,
          justifyContent: 'flex-end',
          backgroundColor: '#ef5350',
        }}>
        <Text style={{textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>
          ĐĂNG XUẤT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const CustomeDrawer = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{}}>
        {/* Head menu information */}
        <HeadInfo />
        {/* Main menu */}
        <View style={{paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      {/* Logout componet */}
      <Logout />
    </View>
  );
};
