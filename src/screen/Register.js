/* eslint-disable eqeqeq */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';
import Error from '../components/Error';
import IconButton from '../components/IconButton';
import Loading from '../components/Loading';

import {AuthContext} from '../contexts/Auth';

const Register = ({navigation}) => {
  const {register} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const submitForm = async () => {
    try {
      setLoading(true);
      await register(email, password);
      navigation.navigate('Login');
    } catch (e) {
      const errors = e.response.data.message;
      const err = errors.map(a => {
        return a.messages[0].message;
      });
      setError(err);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <IconButton
        name={'close-circle-outline'}
        style={styles.iconButton}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <Heading style={styles.title}>Register</Heading>
      {!error == '' ? <Error error={error} /> : null}
      <Input
        style={styles.input}
        placeholder="Email"
        keyboardType={'email-address'}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <FilledButton
        titile="Register"
        style={styles.registerButton}
        onPress={submitForm}
      />
      <Loading loading={loading} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    paddingHorizontal: 13,
    backgroundColor: 'grey',
  },
  title: {
    marginBottom: 40,
    color: '#fff',
  },
  input: {
    marginVertical: 5,
    fontSize: 18,
  },
  registerButton: {
    marginVertical: 15,
  },
  iconButton: {
    position: 'absolute',
    top: 20,
    right: 13,
  },
});
