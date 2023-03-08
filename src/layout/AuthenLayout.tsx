import React from 'react';
import {
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface IProps {
  children: React.ReactNode;
}

export const AuthenLayout = ({children}: IProps) => {
  return (
    <LinearGradient
      colors={['#f5f5f5', '#1F1F67']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={{
        width: '100%',
        flex: 1,
      }}>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.inner}>{children}</SafeAreaView>
          {/* {children} */}
        </TouchableWithoutFeedback>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    backgroundColor: '#f2f2f2',
  },
  inner: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
