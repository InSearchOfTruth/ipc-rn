import React from 'react';
import {StyleSheet, Text, View, Image, TextInput,Button} from 'react-native';
import {connect} from 'react-redux'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  sendLoginForm(){
    let username = this.state.username
    let password = this.state.password
    // , {method: 'POST',body:{username: username, password: password}}
    fetch("http://shupenko.kl.com.ua/query/login.php")
            .then((response) => {
              response.json()
              // console.log(response)
              this.props.loading()
              console.log(this.props.store)
            })
            .then((response) => {
              this.props.loaded(this.state.username, this.state.password)
            })
            .then((error) => {
                
            })
  }
    render() {
        
      return (
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image style={styles.logoImg} source={require('../../assets/image/ip-coster-logo.png')}/>
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
      loading:() =>{
        dispatch({type: 'LOADING', payload: {login:'loading'}})
      },
      loaded: (username, password)=>{
        dispatch({type: 'LOGIN', payload: {login:'login', name: username, password: password}})
      }

      
    })
)(Login)