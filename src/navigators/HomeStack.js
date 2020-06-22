import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SearchScreen from './../screen/SearchScreen';
import IconButton from '../components/IconButton';
import {StyleSheet, Dimensions} from 'react-native';

import Icon from 'react-native-ionicons';

const HomeStack = createStackNavigator();
const {width} = Dimensions.get('window');

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={MyTabs}
        options={{
          headerLeft: () => (
            <IconButton name={'person'} style={styles.iconButton} />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const Top = createMaterialTopTabNavigator();
function MyTabs() {
  return (
    <Top.Navigator
      activeColor="red"
      tabBarOptions={{
        tabStyle: {width: width / 5},
        showIcon: false,
        showLabel: true,
        activeTintColor: 'lightgreen',
        inactiveTintColor: '#d2d2d2',
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 3,
        },
      }}>
      <Top.Screen
        name="1"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <IconButton name={'person'} style={{color: color}} />
          ),
        }}
      />
      <Top.Screen
        name="2"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <IconButton name={'home'} style={{color: color}} />
          ),
        }}
      />
      <Top.Screen
        name="3"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <IconButton name={'home'} style={{color: color}} />
          ),
        }}
      />
      <Top.Screen
        name="4"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <IconButton name={'home'} style={{color: color}} />
          ),
        }}
      />
      <Top.Screen
        name="5"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <IconButton name={'home'} style={{color: color}} />
          ),
        }}
      />
    </Top.Navigator>
  );
}

export default HomeStackScreen;

const styles = StyleSheet.create({
  iconButton: {
    color: 'white',
    paddingLeft: 10,
  },
});
