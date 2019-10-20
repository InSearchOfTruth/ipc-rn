import React from 'react'
import Login from './login'
import MainScreen from './mainScreen'
import {connect} from 'react-redux'
import Loading from './loading'


class FirstPage extends React.Component{
    render(){
        console.log('firstPage:'+this.props.store.loginState.login)
        if(this.props.store.loginState.login === 'login'){
            return(
                <MainScreen />
            )
        }else if(this.props.store.loginState.login === 'loading'){
            return(<Loading/>)
        }else{
            return(
                <Login/>
            )
        }
    }
}
export default connect(
    state =>({
        store: state
    }),
    dispatch => ({})
)(FirstPage)