import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View, Button } from 'react-native';
import {connect} from 'react-redux'
import Logout from './logout'

class SettingsScreen extends React.Component {
    render() {
      return (
        <Logout />
        
      );
    }
  }

  const RootStack = createStackNavigator({
    Home: { screen: SettingsScreen }
  },
  {
    defaultNavigationOptions:{
        title: 'Settings',
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerStyle: {        
            backgroundColor: "#3B5E89",  
        }
    }
  });

  const SettingsNavigator = createAppContainer(RootStack);

  export default SettingsNavigator