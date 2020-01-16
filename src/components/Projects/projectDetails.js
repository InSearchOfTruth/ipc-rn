import React from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native';
import ProjectsDetailsTableBody from './projectDetailsTableBody'

class ProjectsDetails extends React.Component{
    render(){
            let OrderManagement = this.props.stages.OrderManagement ? this.props.stages.OrderManagement : '_____________'
            
            let tableName 
            if(this.props.projectType === 'mainproject'){
                tableName = 'Project details'
            }else if(this.props.projectType === 'subproject'){
                tableName = this.props.count > 1 ? 'Subproject' : 'Main project'
            }
            return(
                
                <View style={styles.detailsTable}>
                    <View style={styles.detailsTableName}><Text style={styles.detailsTableNameText}>{tableName}</Text></View>
                    <View style={styles.detailsTableHead}>
                        <View style={styles.detailsTableTr}><Text>Country</Text></View>
                        <View style={styles.detailsTableTr}><Text>Stages</Text></View>
                        <View style={styles.detailsTableTr}><Text>Total</Text></View>
                    </View>
                    
                        
                        <FlatList
                            key={Math.random().toString()} 
                            data={this.props.stages}
                            scrollEnabled={false}
                            renderItem={({ item }) =><ProjectsDetailsTableBody stages={item}/>}
                            keyExtractor={item => Math.random().toString()}
                        />
                        
                    <View style={styles.detailsTableHead}>
                        <View style={styles.detailsTableTr}><Text>Order Management</Text></View>
                    </View>
                    <View style={styles.detailsTableBody}>
                        <View style={styles.detailsTableTd}><Text>{OrderManagement}</Text></View>
                    </View>
                </View>
            )
        
    }
}
const styles = StyleSheet.create({
    detailsTable:{
        flex: 1,
        marginBottom: 30
    },
    detailsTableName:{
        marginLeft: 20,
        marginBottom: 10
    },
    detailsTableNameText:{
        fontSize: 22,
        fontStyle: 'bold',
        color: '#3B5E89'
    },
    detailsTableHead:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#587BA6',
        justifyContent: 'space-between',
        paddingTop: 7,
        paddingBottom: 7
    },
    detailsTableTr: {
        borderColor: '#c6c7c5',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flex: 1
    },
    detailsTableBody:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailsTableTd:{
        flex: 1,
        borderColor: '#c6c7c5',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }
    
})
export default ProjectsDetails