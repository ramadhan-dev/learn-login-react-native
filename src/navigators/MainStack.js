import React from 'react';
import ProductsListScreen from './../screen/ProductsListScreen';
import SearchScreen from './../screen/SearchScreen';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-ionicons';
import HomeStackScreen from './HomeStack';

const Tab = createMaterialBottomTabNavigator();

const MainStackNavigator = () => {
  return (
    <Tab.Navigator
      shifting={false}
      initialRouteName="Home"
      activeColor="lightgreen"
      barStyle={{backgroundColor: '#fff'}}
      screenOptions={{
        headerShown: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerTitle: 'Lorem',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Kimia"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="medkit" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Seacrh"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Herbal"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="leaf" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Profil"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStackNavigator;
