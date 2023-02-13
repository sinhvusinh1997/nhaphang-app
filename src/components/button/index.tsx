import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {formStyles, textStyles} from '~/styles';

interface TTouch {
  onPress?: () => void;
  textButton?: string;
  iconButton?: any;
  styleButton?: any[];
  styleText?: any[];
  disabled?: boolean;
  styleIcon?: any[];
}

export const ButtonTouch = ({
  onPress,
  textButton,
  styleButton,
  styleText,
  disabled = false,
  iconButton,
  styleIcon,
}: TTouch) => {
  return (
    <TouchableOpacity
      style={[styleButton, {opacity: disabled ? 0.4 : 1}]}
      onPress={onPress}
      disabled={disabled}>
      {iconButton && (
        <Image
          source={iconButton}
          resizeMode="contain"
          style={[formStyles.formIcon, styleIcon]}
        />
      )}
      {textButton && (
        <Text style={[textStyles.textBase, styleText]}>{textButton}</Text>
      )}
    </TouchableOpacity>
  );
};

export const TextTouch = ({
  onPress,
  textButton,
  styleButton,
  styleText,
  disabled = false,
}: TTouch) => {
  return (
    <TouchableOpacity
      style={[styleButton, {opacity: !disabled ? 0.4 : 1}]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[textStyles.textBase, styleText]}>{textButton}</Text>
    </TouchableOpacity>
  );
};
