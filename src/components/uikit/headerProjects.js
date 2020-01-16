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
                            <Text style={styles.projectNumber}>{this.props.projectNumber}</Text>
                            <View>
                                <Image style={styles.navigationLogo} source={require('../../../assets/image/ip-coster-logo-white.png')}/>
                            </View>
                            
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
        marginRight: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    projectNumber:{
        color: '#fff',
        fontSize: 24,
        marginTop: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    countryFlag:{
        
        
    },
    navigationArrow:{
        resizeMode: 'contain',
        height: 25,
        marginBottom: 17,
        marginLeft: 5,
    },
    navigationLogo:{
        resizeMode: 'contain',
        height: 60,
        width: 120,
        marginRight: 20,
        marginTop: 5,
    }
})
export default ProjectHeader

