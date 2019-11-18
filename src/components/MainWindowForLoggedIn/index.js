import React from 'react';
import { Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ProjectsMainScreen from '../Projects'
import SettingsMainScreen from '../Settings'
import MessangerMainScreen from '../Messenger'




class IconHome extends React.Component {
  render() {
    if(this.props.name == 'Home'){
      return (
        <Image style={this.props.style} source={require('../../../assets/image/MainPageLogo.png')}/>
      )
    }else if(this.props.name == 'Settings'){
      return (
        <Image style={this.props.style} source={require('../../../assets/image/settingsLogo.png')}/>
      )
    }else if(this.props.name == 'MyProjects'){
      return (
        <Image style={this.props.style} source={require('../../../assets/image/projectsLogo.png')}/>
      )
    }else if(this.props.name == 'Messanger'){
      return (
        <Image style={this.props.style} source={require('../../../assets/image/messangerLogo.png')}/>
      )
    }
  }
}

const MainWindowForLoggedIn = createBottomTabNavigator({
  // Home: { screen: AppNavigator },
  MyProjects: { screen: ProjectsMainScreen },
  Messanger: { screen: MessangerMainScreen },
  Settings: { screen: SettingsMainScreen },
},{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: () => {
        const { routeName } = navigation.state;
        
          return <IconHome style={{width: 20, height: 20}} name={routeName}/>
       
        
      
    }
  })
});

export default createAppContainer(MainWindowForLoggedIn);
