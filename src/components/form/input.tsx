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
  success?: boolean;
  secureTextEntry?: boolean | undefined;
  onPressIcon?: () => void;
  keyboardType?: KeyboardTypeOptions | undefined;
}

export const CustomInput = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  icon,
  placeholder,
  innerStyle,
  inputStyle,
  iconStyle,
  success,
  secureTextEntry,
  onPressIcon,
  keyboardType = 'default',
}: TCustomInput<TFieldValues>) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <View
            style={[
              styles.inner,
              innerStyle,
              error ? styles.innerError : null,
              success ? styles.innerSuccess : null,
              shadowStyle.black,
            ]}>
            {icon && (
              <>
                <TouchableOpacity
                  onPress={onPressIcon}
                  disabled={!onPressIcon}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={icon}
                    style={[
                      styles.icon,
                      error ? styles.iconError : null,
                      success ? styles.iconSuccess : null,
                      iconStyle,
                    ]}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <View
                  style={[
                    styles.line,
                    error ? styles.lineError : null,
                    success ? styles.lineSuccess : null,
                  ]}></View>
              </>
            )}
            <>
              <TextInput
                placeholder={placeholder}
                placeholderTextColor={COLORs.BLACK}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoCapitalize={'none'}
                style={[
                  styles.input,
                  inputStyle,
                  error ? styles.inputError : null,
                  success ? styles.inputSuccess : null,
                ]}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
                value={value}
              />
              {error && <Text style={styles.error}>{error?.message}</Text>}
            </>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
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

  // success styles
  iconSuccess: {
    tintColor: COLORs.SUCCESS,
  },
  lineSuccess: {
    backgroundColor: COLORs.SUCCESS,
  },
  innerSuccess: {
    borderWidth: 1,
    borderColor: COLORs.SUCCESS,
  },
  inputSuccess: {
    color: COLORs.SUCCESS,
  },
});
