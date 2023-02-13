import React from 'react';
import {
  Image,
  ImageSourcePropType,
  KeyboardTypeOptions,
  TextInput,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {formStyles} from '~/styles';

interface TFormInput {
  type: string;
  label: string;
  placeholder: string;
  icon: ImageSourcePropType;
  secureTextEntry?: boolean;
  onPress?: () => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  clearButtonMode?:
    | 'while-editing'
    | 'never'
    | 'unless-editing'
    | 'always'
    | undefined;
}

export const FormInput = ({
  type,
  label,
  placeholder,
  icon,
  secureTextEntry = false,
  onPress,
  clearButtonMode = 'while-editing',
  keyboardType = undefined,
}: TFormInput) => {
  return (
    <View style={formStyles.formGroup}>
      <View style={formStyles.formIconWrapper}>
        <TouchableOpacity onPress={onPress} disabled={type !== 'password'}>
          <Image
            source={icon}
            resizeMode="contain"
            style={formStyles.formIcon}
          />
        </TouchableOpacity>
        <View style={formStyles.formLine}></View>
      </View>
      <View style={formStyles.formContent}>
        {/* <Text style={formStyles.formText}>{label}</Text> */}
        <TextInput
          style={formStyles.formInput}
          placeholder={placeholder}
          placeholderTextColor="#91adb7"
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
          clearButtonMode={clearButtonMode}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};
