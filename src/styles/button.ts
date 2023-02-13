import {StyleSheet} from 'react-native';

export const buttonStyles = StyleSheet.create({
  buttonBase: {
    width: '50%',
    alignSelf: 'center',
    borderRadius: 14,
    shadowColor: '#00000040',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 9,
    margin: 5,
    padding: 14,
  },
  buttonPrimary: {
    backgroundColor: '#DC8C12',
  },
  buttonSecondary: {
    backgroundColor: '#459fc2',
  },
});
