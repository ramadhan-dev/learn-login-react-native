import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextButton from '../components/TextButton';
import {AuthContext} from '../contexts/Auth';

const ProductsListScreen = ({navigation}) => {
  const {logout} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <TextButton
        title="Logout"
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
};

export default ProductsListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
