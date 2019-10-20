import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View,FlatList,Button, TouchableOpacity } from 'react-native';

class Invoices extends React.Component {
    cb = () => {
      this.props.navigation.push('ProjectsInfo');
    }
      render() {
        return(
          <View>
            <Text>Invoices</Text>
          </View>
        )
        }
      }

      export default Invoices;