import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORs} from '~/library';
import {shadowStyle} from '~/styles';

type TCustomInput = {
  icon?: ImageSourcePropType;
  placeholder: string | undefined;
  innerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  errorMsg?: string | undefined | boolean;
  success?: boolean;
  secureTextEntry?: boolean | undefined;
  onPressIcon?: () => void;
};

export const CustomInput: React.FC<{props: TCustomInput}> = ({props}) => {
  return (
    <View>
      <View
        style={[
          styles.inner,
          props?.innerStyle,
          props?.errorMsg ? styles.innerError : null,
          props?.success ? styles.innerSuccess : null,
          shadowStyle.black,
        ]}>
        {props.icon && (
          <>
            <TouchableOpacity
              onPress={props.onPressIcon}
              disabled={!props.onPressIcon}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={props?.icon}
                style={[
                  styles.icon,
                  props?.errorMsg ? styles.iconError : null,
                  props?.success ? styles.iconSuccess : null,
                  props?.iconStyle,
                ]}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View
              style={[
                styles.line,
                props?.errorMsg ? styles.lineError : null,
                props?.success ? styles.lineSuccess : null,
              ]}></View>
          </>
        )}
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={COLORs.BLACK}
          secureTextEntry={props?.secureTextEntry}
          style={[
            styles.input,
            props?.inputStyle,
            props?.errorMsg ? styles.inputError : null,
            props?.success ? styles.inputSuccess : null,
          ]}
        />
      </View>
      {props?.errorMsg && (
        <Text style={styles.errorMsg}>{props?.errorMsg}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  errorMsg: {
    color: COLORs.ERROR,
    fontSize: 12,
    textAlign: 'right',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: -6,
  },
  inner: {
    backgroundColor: COLORs.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
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
    padding: 12,
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
