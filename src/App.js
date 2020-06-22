import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackNavigator} from './navigators/AuthStack';
import {AuthContext} from './contexts/Auth';
import {UserContext} from './contexts/User';
import {useAuth} from './hooks/useAuth';

import MainStackNavigator from './navigators/MainStack';
import SplashScreen from './screen/SplashScreen';

const rootStack = createStackNavigator();

export default () => {
  const {auth, state} = useAuth();

  const renderScreen = () => {
    if (state.loading) {
      return <rootStack.Screen name={'Splash'} component={SplashScreen} />;
    }

    return state.user ? (
      <rootStack.Screen name={'MainStack'}>
        {() => (
          <UserContext.Provider value={state.user}>
            <MainStackNavigator />
          </UserContext.Provider>
        )}
      </rootStack.Screen>
    ) : (
      <rootStack.Screen name="Auth" component={AuthStackNavigator} />
    );
  };

  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer>
        <rootStack.Navigator
          mode="modal"
          screenOptions={{
            headerShown: false,
          }}>
          {renderScreen()}
        </rootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
