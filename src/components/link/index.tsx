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

interface TCustomLink {
  title: string;
  onPress: () => void;
  linkStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const CustomLink = ({
  title,
  onPress,
  linkStyle,
  textStyle,
}: TCustomLink) => {
  return (
    <TouchableOpacity style={[styles.container, linkStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
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
