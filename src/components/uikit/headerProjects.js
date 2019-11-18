import React from 'react';
import {StyleSheet, View, Text,Image, Button, TouchableOpacity } from 'react-native';


class ProjectHeader extends React.Component{
    render(){
            return(
                <View style={this.props.style}>
                    <View style={styles.navigationStyle}>
                        <TouchableOpacity onPress={() => this.props.goBack() }>
                            <Image  style={styles.navigationArrow} source={require('../../../assets/image/arrow-left.png')}/>
                        </TouchableOpacity>
                        
                        <View style={styles.projectsInfo}>
                            <View style={styles.countryFlag}></View>
                            <Text style={styles.projectNumber}>{this.props.projectNumber}</Text>
                        </View>
                    </View>
                </View>
            )
        
    }
}
const styles = StyleSheet.create({
    navigationStyle:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    projectsInfo:{
        alignItems: 'center',
        marginBottom: 10,
        marginRight: 5
    },
    projectNumber:{
        color: '#fff',
        fontSize: 16,
        marginTop: 5
    },
    countryFlag:{
        width: 30,
        height: 20,
        backgroundColor: 'red',
        borderRadius: 3
    },
    navigationArrow:{
        resizeMode: 'contain',
        height: 25,
        marginBottom: 17,
        marginLeft: 5,
    },
})
export default ProjectHeader

