import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Error = ({error}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'pink',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
