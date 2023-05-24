import React from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const CustomText = (props: any) => {
  return (
    <Text {...props} style={[styles.defaultFontStyle, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultFontStyle: {
    fontFamily: 'Montserrat-Thin',
    color: "red"
  },
  icon: {
    fontSize: 24,
  },
  text: {
    fontSize: 16,
  },
});

export default CustomText;


