import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Footer} from '~/components';

export const MainLayout = (props: {children: React.ReactNode}) => {
  console.log('props: ', props.children);
  return (
    <SafeAreaView style={{backgroundColor: 'blue', height: 100}}>
      {/* <Header />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {props.children}
      </View> */}
      <Footer />
    </SafeAreaView>
  );
};
