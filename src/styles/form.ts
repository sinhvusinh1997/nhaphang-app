import {StyleSheet} from 'react-native';

export const formStyles = StyleSheet.create({
  formGroup: {
    position: 'relative',
    width: 300,
    height: 50,
    borderRadius: 10,
    margin: 7,
    backgroundColor: '#fff',
    shadowColor: '#00000010',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 9,
    flexDirection: 'row',
  },
  formContent: {
    width: '88%',
    height: '100%',
  },
  formText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 14,
  },
  formInput: {
    width: '100%',
    height: '100%',
    paddingLeft: 10,
    paddingRight: 30,
    // borderWidth: 1,
  },
  formIconWrapper: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // borderRightWidth: 2,
    // borderColor: '#bdced4',
  },
  formLine: {
    position: 'absolute',
    top: '50%',
    right: 0,
    backgroundColor: '#bdced4',
    width: 2,
    height: 20,
  },
  formIcon: {
    width: 18,
    height: 18,
    tintColor: '#4f7b8c',
  },
});
