import React from 'react';
import {connect} from 'react-redux'
import MainWindowForLoggedIn from './MainWindow'
import Loading from '../uikit/loading'

class MainScreen extends React.Component {

 
  render() {
    // console.log(this.props.store)
    if(this.props.store.loadingState.state === 'loading'){
      console.log(this.props.store.loadingState.state)
      return(
        <Loading/>
      )
    }else if(this.props.store.loadingState.state === 'load'){
      console.log(this.props.store.loadingState.state)
      return(
        <MainWindowForLoggedIn/>
      )
    }else{
      console.log(this.props.store.loadingState)
      return(
        <MainWindowForLoggedIn/>
      )
    }
  }
}


export default connect(
    state =>({
        store: state
    }),
  
)(MainScreen)
