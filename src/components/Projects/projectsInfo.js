import React from 'react'
import { StyleSheet, Text, View,FlatList,Button, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import ProjectHeader from '../uikit/headerProjects'

class ProjectsInfo extends React.Component {
    render() {
        console.log(this.props.navigation)
        const { goBack } = this.props.navigation;
      return(
        <View style={styles.container}>
            <ProjectHeader style={styles.header} goBack={goBack} projectNumber={this.props.navigation.state.params.number}/>
            <View style={styles.projectContent}>
                <View style={styles.projectHeader}>
                    <View style={styles.projectHeaderRow}>
                        <Text style={styles.projectHeaderText}>Project:   <Text style={styles.projectHeaderInfo}>{this.props.navigation.state.params.number}</Text></Text>
                    </View>
                    <View style={styles.projectHeaderRow}>
                        <Text style={styles.projectHeaderText}>Agent:   <Text style={styles.projectHeaderInfo}>{this.props.navigation.state.params.agent}</Text></Text>
                    </View>
                    <View style={styles.projectHeaderRow}>
                        <Text style={styles.projectHeaderText}>Type:   <Text style={styles.projectHeaderInfo}>{this.props.navigation.state.params.type}</Text></Text>
                    </View>

                </View>
                
            </View>
        </View>
      )
      }
    }
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        flex: 1,
        backgroundColor: '#3B5E88'
    },
    projectContent:{
        flex: 5,
        padding: 10,
    },
    projectHeader:{
        flex: 1,
        justifyContent: 'flex-start'
    },
    projectHeaderRow:{
        marginVertical: 5
    },
    projectHeaderText: {
        color: '#605f5f',
        fontSize: 14,
    },
    projectHeaderInf: {
        color: '#797a7b',
        fontSize: 14,
        paddingLeft: 10
    }
})
    export default ProjectsInfo