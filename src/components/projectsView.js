import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View,FlatList,Button, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import ProjectsList from './projectsList'
import ProjectsInfo from './projectsInfo'

  
  
  

const RootStack = createStackNavigator({
    Home: { screen: ProjectsList },
    ProjectsInfo: {screen: ProjectsInfo}
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
    },
    headerMode: 'none'
  });

const ProjectsNavigator = createAppContainer(RootStack);

  
  
  export default ProjectsNavigator;