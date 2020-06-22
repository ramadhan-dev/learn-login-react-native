import React from 'react';
import {View, StyleSheet} from 'react-native';
// import {useTheme} from '@react-navigation/native';

const SplashScreen = () => {
  // const {colors} = useTheme();
  return <View style={[styles.container, {backgroundColor: 'grey'}]} />;
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});