import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {buttonStyles, textStyles} from '~/styles';

export const Finance = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          style={[buttonStyles.buttonBase, buttonStyles.buttonPrimary]}>
          <Text
            style={[
              textStyles.textBase,
              textStyles.textLight,
              textStyles.textBold,
              {textTransform: 'uppercase'},
            ]}>
            Finance page
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});