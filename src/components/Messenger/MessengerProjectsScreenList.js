import React from 'react';
import { StyleSheet, Text, View,FlatList,Button, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import MessengerListItem from './messengerListItem'
import Header from '../uikit/header'
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
    }
  ];

class MessengerProjectsScreenList extends React.Component{
    cb = (item) => {
        const { navigation } = this.props;
        // this.props.navigation.push('ProjectsInfo');
        this.props.navigation.navigate('chatScreen');
        // console.log(this.props.navigation)
      }
        render() {
        //   console.log('projectsView:'+this.props.navigation.state.params)
        // console.log(this.props.store.loginState)
        const { navigate } = this.props.navigation;
          return(
            <View style={styles.container}>
              <Header navigate={navigate} style={styles.navigationPanel} navigationPanel={true}/>
              <View style={styles.list}>
                <FlatList
                data={DATA}
                renderItem={({item}) => 
                  <TouchableOpacity onPress={() => this.cb(item)}> 
                      <MessengerListItem key={Math.random().toString()} number={item.number} agent={item.agent} title={item.title}/>
                      {/* <Text key={Math.random().toString()}>{item.title}</Text>  */}
                  </TouchableOpacity>}
                keyExtractor={item => item.id}
              />
    
              </View>
            </View>
          )
          }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navigationPanel:{
      flex: 1,
      backgroundColor: '#3B5E88',
    },
   
    list:{
      flex: 5,
      paddingHorizontal: 10,
    }
})

export default connect(
  state =>({
      store: state
  }),
  dispatch => ({})
)(MessengerProjectsScreenList)
