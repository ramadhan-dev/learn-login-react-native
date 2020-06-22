import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({error, style, ...props}) => {

  return (
    <TextInput
      {...props}
      placeholderTextColor={'darkgray'}
      style={[styles.text, style]}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  text: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 8,
  }
});
