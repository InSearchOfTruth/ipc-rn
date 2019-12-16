import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native';
import {AsyncStorage} from 'react-native'

const Logout = (props) =>{
  let deleteStorage = () =>{
    AsyncStorage.removeItem('Token')
    AsyncStorage.removeItem('UserName')
    AsyncStorage.removeItem('email')
    AsyncStorage.removeItem('userRole')
    props.logout()
  }
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button title="Logout" onPress={deleteStorage}/>
        </View>
    )
}

export default connect(
    state =>({
        store: state
    }),
    dispatch => ({
      logout: ()=>{
        dispatch({type: 'LOGIN', payload: {login:'notLogin'}})
      }

    })
)(Logout)