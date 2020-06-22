import React, {useReducer} from 'react';
import axios from 'axios';
import SecureStorage from 'react-native-secure-storage';

import {createAction} from './../utils/CreateAction';
import {BASE_URL} from '../config';
export function useAuth() {
  const auth = React.useMemo(
    () => ({
      login: async (password, identifier) => {
        const {data} = await axios.post(`${BASE_URL}/auth/local`, {
          identifier,
          password,
        });
        const user = {
          email: data.user.email,
          token: data.jwt,
        };
        await SecureStorage.setItem('user', JSON.stringify(user));
        dispatch(createAction('SET_USER', user));
      },
      logout: async () => {
        await SecureStorage.removeItem('user');
        dispatch(createAction('REMOVE_USER'));
      },
      register: async (email, password) => {
        await axios.post(`${BASE_URL}/auth/local/register`, {
          username: email,
          email,
          password,
        });
      },
    }),
    [],
  );

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_USER':
          return {
            ...state,
            user: {...action.payload},
          };
        case 'REMOVE_USER':
          return {
            ...state,
            user: undefined,
          };
        case 'SET_LOADING':
          return {
            ...state,
            loading: action.payload,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
      loading: true,
    },
  );

  React.useEffect(() => {
    SecureStorage.getItem('user').then(user => {
      if (user) {
        dispatch(createAction('SET_USER', JSON.parse(user)));
      }
      dispatch(createAction('SET_LOADING', false));
    });
  }, []);

  return {auth, state};
}
