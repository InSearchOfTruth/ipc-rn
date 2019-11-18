import React from 'react';
import {View, Text, } from 'react-native';
import {connect} from 'react-redux'

class WelcomeBlock extends React.Component{
    render(){
        return(
            <View style={this.props.style}>
                <Text style={this.props.styleText}>Welcome, {this.props.store.loginState.name}</Text>

            </View>
        )
    }
}

export default connect(
    state =>({
        store: state
    })
)(WelcomeBlock)