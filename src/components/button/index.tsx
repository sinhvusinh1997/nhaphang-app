import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {COLORs} from '~/library';
import {shadowStyle} from '~/styles';

type TCustomButton = {
  name: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const CustomButton: React.FC<{props: TCustomButton}> = ({props}) => {
  return (
    <TouchableOpacity
      style={[styles.defaultStyle, props?.buttonStyle, shadowStyle.black]}>
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: COLORs.BLACK,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    marginVertical: 20,
  },
  text: {
    color: COLORs.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
