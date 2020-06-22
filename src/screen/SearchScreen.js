import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import TextButton from '../components/TextButton';
import {AuthContext} from '../contexts/Auth';

const SearchScreen = ({navigation}) => {
  const {logout} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title="Go to details screen...again" onPress={() => alert(11)} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
