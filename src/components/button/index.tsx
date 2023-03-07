import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {COLORs, ICONs} from '~/library';
import {shadowStyle} from '~/styles';

interface TCustomButton {
  name?: string;
  icon?: ImageSourcePropType;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
}

export const CustomButton = ({
  name,
  icon,
  iconStyle,
  onPress,
  buttonStyle,
  textStyle,
}: TCustomButton) => {
  return (
    <TouchableOpacity
      style={[styles.defaultStyle, buttonStyle, shadowStyle.black]}
      onPress={onPress}>
      {name && <Text style={styles.text}>{name}</Text>}
      {icon && (
        <Image source={ICONs.BACK} style={iconStyle} resizeMode="contain" />
      )}
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
