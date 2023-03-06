import {StyleSheet} from 'react-native';

const BASE = {
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 9,
};

export const shadowStyle = StyleSheet.create({
  white: {
    ...BASE,
    shadowColor: '#f5f5f5',
  },
  black: {
    ...BASE,
    shadowColor: '#333',
  },
});
