import React from 'react'
import TextComponent from '../uikit/textComponent'
import { StyleSheet, Text, View, FlatList} from 'react-native';

class ProjectsDetailsTableBody extends React.Component{
    render(){
        let stages = this.props.stages.Stages.split('<br/>')
        let totalPrice = this.props.stages.Total.split('&nbsp;')
        return(
            <View style={styles.detailsTableBody}> 
                <View style={styles.detailsTableTd}><Text>{this.props.stages.Country}</Text></View>
                <View style={styles.detailsTableTd}>
                    <FlatList
                    data={stages}
                    renderItem={({ item }) =>
                    
                    <TextComponent 
                        key={Math.random().toString()} 
                        stylesView={styles.detailsStages}
                        string={item}
                    />
                    
                    }
                    keyExtractor={item => Math.random().toString()}
                    />
                </View>
                <View style={styles.detailsTableTd}><Text>{totalPrice}</Text></View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    detailsTableBody:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 7,
        paddingBottom: 7
    },
    detailsTableTd:{
        flex: 1,
        borderColor: '#c6c7c5',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    detailsStages:{
        justifyContent: 'center',
        alignItems: 'center'
    }

    
})
export default ProjectsDetailsTableBody;