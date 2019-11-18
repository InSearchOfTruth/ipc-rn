import React from 'react'
import LoginMainScreen from './login/'
import MainWindowForLoggedIn from './MainWindowForLoggedIn'
import {connect} from 'react-redux'
import Loading from './uikit/loading'


class MainAppScreen extends React.Component{
    render(){
        if(this.props.store.loginState.login === 'login'){
            return(
                <MainWindowForLoggedIn />
            )
        }else if(this.props.store.loginState.login === 'loading'){
            return(<Loading/>)
        }else{
            return(
                <LoginMainScreen/>
            )
        }
    }
}
export default connect(
    state =>({
        store: state
    }),
    dispatch => ({})
)(MainAppScreen)