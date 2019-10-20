import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native';

const Logout = (props) =>{
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button title="Logout" onPress={props.logout}/>
        </View>
    )
}

export default connect(
    state =>({
        store: state
    }),
    dispatch => ({
      logout: ()=>{
        dispatch({type: 'LOGOUT', payload: ''})
      }

    })
)(Logout)