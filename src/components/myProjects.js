import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View,FlatList,Button, TouchableOpacity } from 'react-native';
import ProjectsNavigator from './projectsView'
import Invoices from './invoicesView'

class MyProjectsNavigation extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <View
            style={styles.button}>
            <Text
            style={styles.buttonText}
            onPress={() =>
              this.props.navigation.navigate('Projects')
            }
            >Projects</Text>
          </View>
          <View
            style={styles.button}
            
          >
            <Text
            style={styles.buttonText}
            onPress={() =>
              this.props.navigation.navigate('Invoices')
            }
            >Invoices</Text>
          </View>
        </View>
      );
    }
  }
  

const RootStack = createStackNavigator({
    MyProjectsNavigation: {screen: MyProjectsNavigation},
    Projects: { screen: ProjectsNavigator },
    Invoices: {screen: ProjectsNavigator}
  },
  {
    defaultNavigationOptions:{
        title: 'Projects',
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerStyle: {        
            backgroundColor: "#3B5E89",  
        }
    }
  });

const MyProjectsNavigator = createAppContainer(RootStack);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      borderBottomColor: '#AFAFAF',
      borderBottomWidth: 1,
      alignSelf: "stretch",
      color: 'red',
      alignItems: 'center',
      margin: 10,
      paddingBottom: 10,
    },
    buttonText:{
      fontSize: 17,
      color: '#37669F'
    }
  });
  
  
  export default MyProjectsNavigator;