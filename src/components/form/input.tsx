import {Control, Controller, FieldValues, Path} from 'react-hook-form';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ImageStyle,
  KeyboardTypeOptions,
  ActivityIndicator,
} from 'react-native';
import {COLORs} from '~/library';
import {shadowStyle} from '~/styles';

interface TCustomInput<TFieldValues extends FieldValues> {
  control: Control<TFieldValues, object>;
  name: Path<TFieldValues>;
  icon?: ImageSourcePropType;
  placeholder: string | undefined;
  innerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  secureTextEntry?: boolean | undefined;
  onPressIcon?: () => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  disabled?: boolean;
}

export const CustomInput = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  icon,
  placeholder,
  innerStyle,
  inputStyle,
  iconStyle,
  secureTextEntry,
  onPressIcon,
  keyboardType = 'default',
  disabled,
}: TCustomInput<TFieldValues>) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({
          field: {onChange, onBlur, value},
          fieldState: {error, isTouched, isDirty, invalid},
          formState: {isValidating},
        }) => (
          <View
            style={[
              styles.inner,
              innerStyle,
              error ? styles.innerError : null,
              shadowStyle.black,
              disabled ? styles.disabled : null,
            ]}>
            {icon && (
              <>
                <TouchableOpacity
                  onPress={onPressIcon}
                  disabled={!onPressIcon || disabled}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={icon}
                    style={[
                      styles.icon,
                      error ? styles.iconError : null,
                      iconStyle,
                    ]}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <View
                  style={[styles.line, error ? styles.lineError : null]}></View>
              </>
            )}
            <>
              <TextInput
                placeholder={placeholder}
                placeholderTextColor={COLORs.PLACEHOLDER}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoCapitalize={'none'}
                style={[
                  styles.input,
                  inputStyle,
                  error ? styles.inputError : {color: COLORs.BLACK},
                ]}
                editable={!disabled}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
                value={value}
              />
              {isValidating && isTouched && invalid && (
                <ActivityIndicator size="small" color={COLORs.SECONDARY} />
              )}

              {error && <Text style={styles.error}>{error?.message}</Text>}
            </>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.4,
  },
  error: {
    color: COLORs.ERROR,
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: -6,
    position: 'absolute',
    bottom: -18,
    right: 5,
  },
  inner: {
    backgroundColor: COLORs.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORs.SECONDARY,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: COLORs.SECONDARY,
  },
  line: {
    width: 2,
    height: 20,
    marginVertical: 10,
    backgroundColor: COLORs.SECONDARY,
  },
  input: {
    flex: 1,
    padding: Platform.OS === 'android' ? 8 : 16,
  },

  // error styles
  iconError: {
    tintColor: COLORs.ERROR,
  },
  lineError: {
    backgroundColor: COLORs.ERROR,
  },
  innerError: {
    borderWidth: 1,
    borderColor: COLORs.ERROR,
  },
  inputError: {
    color: COLORs.ERROR,
  },
});
