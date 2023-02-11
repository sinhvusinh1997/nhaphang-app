import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const Header = () => {
  return (
    <View style={{backgroundColor: 'red', height: 40}}>
      <View>
        <Text>back</Text>
      </View>
      <View>
        <Text>wallet - noti</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
