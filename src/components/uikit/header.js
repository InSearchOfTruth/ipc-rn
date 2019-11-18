import React from 'react';
import {StyleSheet, View, Text,Image, Button, TouchableOpacity } from 'react-native';


class Header extends React.Component{
    render(){
        if(this.props.navigationPanel === true){

            
            return(
                <View style={this.props.style}>
                    <View style={styles.navigationStyle}>
                        <TouchableOpacity onPress={() => this.props.navigate('MyProjectsNavigation') }>
                            <Image  style={styles.navigationArrow} source={require('../../../assets/image/arrow-left.png')}/>
                        </TouchableOpacity>
                        
                        <Image style={styles.navigationLogo} source={require('../../../assets/image/ip-coster-logo-white.png')}/>
                    </View>
                </View>
            )
        }else{
            return(
                <View style={this.props.style}>
                    <Image style={this.props.styleImg} source={require('../../../assets/image/ip-coster-logo-white.png')}/>
                </View>
            )
        }
        
    }
}
const styles = StyleSheet.create({
    navigationStyle:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    navigationLogo:{
        resizeMode: 'contain',
        height: 60,
        width: 120,
        marginRight: 20,
        marginBottom: 5
    },
    navigationArrow:{
        resizeMode: 'contain',
        height: 25,
        marginBottom: 17,
        marginLeft: 5,
    },
})
export default Header

