import {StyleSheet} from 'react-native';

export const positionStyles = StyleSheet.create({
  absoluteCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      {
        translateX: -50,
        translateY: -50,
      },
    ],
  },
  center: {
    alignItems: 'center',
  },
  spaceEvenly: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-evenly',
  },
});
