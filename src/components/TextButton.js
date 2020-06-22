import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const TextButton = ({title, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    borderRadius: 3,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '300',
    color: 'orange',
  },
});
