/* eslint-disable eqeqeq */
import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';
import TextButton from '../components/TextButton';
import Error from '../components/Error';
import {AuthContext} from '../contexts/Auth';
import IconButton from '../components/IconButton';
import Loading from '../components/Loading';

const LoginScreen = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const {login} = React.useContext(AuthContext);
  const [error, setError] = React.useState('');
  const [identifier, setidentifier] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const submitForm = async () => {
    try {
      setLoading(true);
      await login(password, identifier);
      setLoading(false);
    } catch (e) {
      console.log(e);
      
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
      <Heading style={styles.title}>LOGIN</Heading>
      {!error == '' ? <Error error={error} /> : null}
      <View style={styles.form}>
        <View>
          <Input
            style={styles.input}
            placeholder="Email"
            name="email"
            type="text"
            keyboardType={'email-address'}
            onChangeText={setidentifier}
          />
        </View>
        <View style={styles.password}>
          <Input
            style={styles.input}
            placeholder="Password"
            secureTextEntry={secureTextEntry}
            onChangeText={setPassword}
            name="password"
            type="text"
          />
          <TouchableOpacity style={styles.containerIconButton}>
            <IconButton
              name="eye"
              style={styles.IconButton}
              onPress={() => {
                setSecureTextEntry(prev => !prev);
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FilledButton
        titile="Login"
        style={styles.loginButton}
        onPress={submitForm}
      />
      <TextButton
        title="Have you an account? Create one"
        onPress={() => navigation.push('Registration')}
      />
      <Loading loading={loading} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    paddingHorizontal: 13,
    backgroundColor: 'grey',
  },
  title: {
    marginBottom: 20,
    color: '#fff',
  },
  form: {
    flexDirection: 'column',
    width: '100%',
  },
  input: {
    marginVertical: 5,
    fontSize: 18,
  },
  password: {
    marginVertical: 10,
    position: 'relative',
  },
  containerIconButton: {
    position: 'absolute',
    right: 5,
    top: 5,
    width: 40,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconButton: {
    paddingVertical: 9,
    paddingHorizontal: 5,
  },
  loginButton: {
    marginVertical: 10,
  },
});
