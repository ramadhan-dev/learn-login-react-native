import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const FilledButton = ({titile, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{titile.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default FilledButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'orange',
    padding: 8,
    borderRadius: 3,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '300',
    color: '#fff',
  },
});
