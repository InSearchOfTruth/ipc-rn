import React from 'react';
import {StyleSheet, Text, View, Image, TextInput,Button} from 'react-native';
import {connect} from 'react-redux'
import {readCookieFromStorage}  from '../../functions/getItemFromStorage'

import {AsyncStorage} from 'react-native'
import axios from 'axios'

class LoginMainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  _retrieveData = async () => {
    
    readCookieFromStorage()
    
  };
  sendLoginForm(){
    let username = this.state.username
    let password = this.state.password
    let data = {
      Email: username,
      Password: password
    }
    // , {method: 'POST',body:{username: username, password: password}}
    fetch("https://api.ipcoster.internera.com/api/Token/login",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)})
            .then((response) => {
              let username, token
              let props = this.props
              response.json().then(function (data) {
               if(!data){
                  return
               }
              
                _storeData = async () => {
                  try {
                    await AsyncStorage.setItem('Token', data.Token);
                    await AsyncStorage.setItem('UserName', data.User.UserName);
                    await AsyncStorage.setItem('email', data.User.Email);
                    await AsyncStorage.setItem('userRole', data.User.UserRole.join(' '));

                  } catch (error) {
                    
                  }
                  

                  
                }
                _storeData()
               
                props.login(data.Token, data.User.UserName,data.User.Email,data.User.UserRole.join(' '))
                
              })
              
            })
            .then((error) => {
              
            })
  }
    render() {
      // console.log(AsyncStorage.getAllKeys())  
      let test = this._retrieveData()
      return (
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image style={styles.logoImg} source={require('../../../assets/image/ip-coster-logo.png')}/>
          </View>
          <View style={styles.loginForm}> 
            <View>
              <View>
                <TextInput onChangeText={(text) => this.setState({username: text})} style={styles.input} placeholder="Username"  />
                <TextInput onChangeText={(text) => this.setState({password: text})} secureTextEntry={true} style={styles.input} placeholder="Password" />
              </View>
              <Button title="Login" onPress={this.sendLoginForm.bind(this)} style={styles.button}/>
              {/* <View style={styles.button} onClick={this.sendLoginForm.bind(this)}>
                <Text style={styles.buttonText}>Login</Text>
              </View> */}
            </View>
          </View>
          
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15
    },
    logo:{
      flex: 2,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      // borderBottomWidth: 1,
      // borderColor: 'black'
    },
    logoImg: {
      width: 300,
      resizeMode: 'contain',
    },
    input:{
      width: 280,
      padding: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#AFAFAF',
      fontSize: 16,
      fontFamily: 'Roboto',
      marginTop: 10,
      marginBottom: 10
    },
    loginForm:{
      flex: 6,
      alignItems: 'flex-start',
      paddingTop: 50,
    },
    button:{
      width: 280,
      borderRadius: 5,
      backgroundColor: '#356BAD', 
      height: 135,
      marginTop: 20,
      fontSize: 17,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      
      fontFamily: 'Roboto'
    }
  })


  export default connect(
    state =>({
        store: state
    }),
    dispatch => ({
      notLogin:() =>{
        dispatch({type: 'LOGIN', payload: {login:'notLogin'}})
    },
      login: (token,username, email,role)=>{
        dispatch({type: 'LOGIN', payload: {login:'login', name: username, email: email, userRole: role, token: token}})
      }

      
    })
)(LoginMainScreen)