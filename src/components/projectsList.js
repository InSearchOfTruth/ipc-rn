import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View,FlatList,Button, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import ProjectsListItem from './projectsListItem'
const DATA = [
  {
    id: '1',
    title: 'First Item',
    agent: 'MSP Europe, UAB',
    number: '03405235',
    type: 'Trademark'
  },
  {
    id: '2',
    title: 'Second Item',
    agent: 'MSP msppatent',
    number: '05202355',
    type: 'Invention (National Phase of PCT/US1111/111111)'
  },
  {
    id: '3',
    title: 'Third Item',
    agent: 'Group (Beijing) IP Agency Ltd.',
    number: '12505023',
    type: 'Trademark'
  },
  {
    id: '4',
    title: 'Third Item',
    agent: 'MSP Europe, UAB',
    number: '45505655',
    type: 'Invention (National Phase of PCT/US1111/111111)'
  },
  {
    id: '5',
    title: 'Third Item',
    agent: 'Group (Beijing) IP Agency Ltd.',
    number: '56507775',
    type: 'Invention (National Phase of PCT/US1111/111111)'
  },
  {
    id: '6',
    title: 'Third Item',
    agent: 'MSP msppatent',
    number: '67806456',
    type: 'Invention (National Phase of PCT/US1111/111111)'
  },
  {
    id: '7',
    title: 'Third Item',
    agent: 'MSP Europe, UAB',
    number: '12304046',
    type: 'Invention (National Phase of PCT/US1111/111111)'
  },
  {
    id: '8',
    title: 'Third Item',
    agent: 'Group (Beijing) IP Agency Ltd.',
    number: '04305211',
    type: 'Invention (National Phase of PCT/US1111/111111)'
  },
  {
    id: '9',
    title: 'Third Item',
    agent: 'Mikhailyuk, Sorokolat and Partners',
    number: '05505055',
    type: 'Invention (National Phase of PCT/US1111/111111)'
  },
  {
    id: '10',
    title: 'Third Item',
    agent: 'Mikhailyuk, Sorokolat and Partners',
    number: '34216455',
    type: 'Invention (National Phase of PCT/US1111/111111)'
  },
  {
    id: '11',
    title: 'Third Item',
    agent: 'MSP msppatent',
    number: '12344242',
    type: 'Invention (National Phase of PCT/US1111/111111)'
  },
];

class ProjectsList extends React.Component {
  cb = (item) => {
    const { navigation } = this.props;
    // this.props.navigation.push('ProjectsInfo');
    this.props.navigation.navigate('ProjectsInfo', item);
  }
    render() {
    //   console.log('projectsView:'+this.props.navigation.state.params)
      
      return(
        <View style={styles.container}>
        
          <FlatList
          data={DATA}
          renderItem={({item}) => 
             <TouchableOpacity onPress={() => this.cb(item)}> 
                <ProjectsListItem key={Math.random().toString()} number={item.number} agent={item.agent} title={item.title}/>
                 {/* <Text key={Math.random().toString()}>{item.title}</Text>  */}
             </TouchableOpacity>}
          keyExtractor={item => item.id}
        />
        </View>
      )
      }
    }
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    }
})
    export default connect(
        state =>({
            store: state
        }),
        dispatch => ({})
    )(ProjectsList)


    