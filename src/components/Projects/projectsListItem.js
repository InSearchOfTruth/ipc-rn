import React from 'react'

import { StyleSheet, Text, View,FlatList,Button, TouchableOpacity } from 'react-native';


const ProjectsListItem = (props) =>{
    return(
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <View style={styles.flag}></View>
            </View>
            <View style={styles.orderNumber}><Text>{props.projectId}</Text></View>
            <View style={styles.orderAgent}><Text>{props.agent}</Text></View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#8E8E8E',
        paddingVertical: 10,
    },
    flagContainer:{
        flex: 1,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flag:{
        width: 30,
        height: 20,
        backgroundColor: 'red',
        borderRadius: 3
    },
    orderNumber:{
        flex: 4,
        alignItems: 'flex-start',
        justifyContent: 'center',
        color: '#8E8E8E'
    },
    orderAgent:{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
})

export default ProjectsListItem