import React from 'react';
import { StyleSheet,Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MessengerSupportScreen from './MessengerSupportScreen';
import MessengerContactsScreen from './MessengerContactsScreen';
import MessengerProjectsScreen from './MessengerProjectsScreen';
import Header from '../uikit/header'
import WelcomeBlock from '../uikit/welcome'

class MessengerNavigation extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Header style={styles.header} styleImg={styles.headerImg} />
            <WelcomeBlock style={styles.welcome} styleText={styles.welcomeText}/>
            <View style={styles.content}>
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
                  this.props.navigation.navigate('Contacts')}>
              Contacts
                </Text>
              </View>
              <View style={styles.button} >
                  <Text
                  style={styles.buttonText}
                  onPress={() =>
                      this.props.navigation.navigate('Supports')
                  }
                  >Supports
                  </Text>
              </View>
            </View>
          </View>
        );
      }
  }

  const RootStack = createStackNavigator({
    MessengerNavigation: {screen: MessengerNavigation},
    Projects: { screen: MessengerProjectsScreen },
    Contacts: {screen: MessengerContactsScreen},
    Supports: {screen: MessengerSupportScreen},
  },
  {
    defaultNavigationOptions:{
        title: 'Messages',
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
  const MessengerMainScreen = createAppContainer(RootStack);

  const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      header:{
        flex: 1,
        backgroundColor: '#3B5E88',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 10
      },
      headerImg:{
        width: 200,
        resizeMode: 'contain',
  
        height: 50
      },
      welcome:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      welcomeText:{
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold'
      },
      content:{
        flex: 5,
        justifyContent: 'flex-start',
        paddingTop: 60
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
    
    
    export default MessengerMainScreen;