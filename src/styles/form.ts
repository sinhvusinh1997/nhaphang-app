import {StyleSheet} from 'react-native';

export const formStyles = StyleSheet.create({
  formGroup: {
    position: 'relative',
    width: 300,
    height: 50,
    borderRadius: 100,
    margin: 10,
    backgroundColor: '#fff',
  },
  formText: {
    position: 'absolute',
    top: '50%',
    left: 20,
    transform: [{translateY: -10}],
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  formInput: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    // backgroundColor: '#fff',
  },
});
