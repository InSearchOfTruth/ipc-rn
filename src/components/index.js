import React from 'react'
import LoginMainScreen from './login/'
import MainWindowForLoggedIn from './MainWindowForLoggedIn'
import {connect} from 'react-redux'
import Loading from './uikit/loading'
import {readCookieFromStorage}  from '../functions/getItemFromStorage'
import {AsyncStorage} from 'react-native'
import axios from 'axios'

class MainAppScreen extends React.Component{
    async retrieveItem(tokenKey, nameKey, mailKey, roleKey){
        try {
            const retrieveToken =  await AsyncStorage.getItem(tokenKey);
            const retrieveName =  await AsyncStorage.getItem(nameKey);
            const retrieveMail =  await AsyncStorage.getItem(mailKey);
            const retrieveRole =  await AsyncStorage.getItem(roleKey);
            const retrieveData = {
                token: retrieveToken,
                name: retrieveName,
                mail: retrieveMail,
                role: retrieveRole 
            }
            // const item = JSON.parse(retrievedItem);
            return retrieveData;
        } catch (error) {
            console.log(error.message);
        }
        
    }
    componentDidMount() {
        this.retrieveItem('Token','UserName','email','userRole').then((value) => {
            const myHeaders = new Headers();
            let props = this.props
            myHeaders.append('Content-Type', 'application/json;charset=utf-8');
            myHeaders.append('Authorization', 'Bearer ' + value.token);
                  fetch("https://api.ipcoster.internera.com/api/values",{
                      method: 'POST',
                      headers: myHeaders})
                      .then((response) => {
                        console.log(response)
                        response.json().then(function (data) {
                            
                          if(data == 'yes'){
                            props.login(value.token,value.name,value.mail,value.role)
                          }else{
                            props.notLogin()
                          }

                        })

                      })
                      .then((error) => {
                        
                      })
           
            
        }).catch((error) => {
            console.log('Promise is rejected with error: ' + error);
        });
    }
    render(){
 
        if(this.props.store.loginState.login === 'login' ){
            
            return(
                <MainWindowForLoggedIn />
            )
        }else if(this.props.store.loginState.login === 'notLogin'){
            return(
                <LoginMainScreen/>
            )
        }else if(!this.props.store.loginState.login){
            
            return(<Loading />)
        }
    }
}
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
)(MainAppScreen)