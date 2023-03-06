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

type TCustomLink = {
  title: string;
  onPress: () => void;
  linkStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const CustomLink: React.FC<{props: TCustomLink}> = ({props}) => {
  return (
    <TouchableOpacity
      style={[styles.container, props?.linkStyle]}
      onPress={props.onPress}>
      <Text style={[styles.text, props?.textStyle]}>{props?.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    color: COLORs.BLACK,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
