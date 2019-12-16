import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import ProjectsListItem from './projectsListItem'
import Header from '../uikit/header'
import Loading from '../uikit/loading'
let DATA = [
  {id: 1, number: 12324, agent: 'test', title: 'tetete'},
  {id: 1, number: 12324, agent: 'test', title: 'tetete'},
  {id: 1, number: 12324, agent: 'test', title: 'tetete'},
  {id: 1, number: 12324, agent: 'test', title: 'tetete'},
  {id: 1, number: 12324, agent: 'test', title: 'tetete'},
];

class ProjectsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }
  cb = (item) => {
    const { navigation } = this.props;
    // this.props.navigation.push('ProjectsInfo');
    this.props.navigation.navigate('ProjectsInfo', item);
  }
  _loadProjects() {
    // this.props.loading('loading')
    const myHeaders = new Headers();
    let localThis = this
    let props = this.props
    myHeaders.append('Content-Type', 'application/json;charset=utf-8');
    myHeaders.append('Authorization', 'Bearer ' + this.props.store.loginState.token);
    fetch("https://api.ipcoster.internera.com/api/project/myProject/", {
      method: 'POST',
      headers: myHeaders
    })
      .then((response) => {

        response.json().then(function (data) {
          props.loadProjects(data)
          localThis.setState({loading: false})
          
        })

      })
      .then((error) => {

      })
  }
  componentWillMount() {
    this._loadProjects()
  }
  render() {
    // console.log(this.props.store.loginState)
    //   console.log('projectsView:'+this.props.navigation.state.params)
    // console.log(this.props.store.loginState)
    const { navigate } = this.props.navigation;
    if(this.state.loading){
      return(
        <Loading/>
      )
    }else{
      return (
        <View style={styles.container}>
          <Header navigate={navigate} style={styles.navigationPanel} navigationPanel={true} />
          <View style={styles.list}>
          <FlatList
              data={this.props.store.projects.projectsList}
              scrollEnabled={false}
              renderItem={({ item }) =>
                <TouchableOpacity onPress={() => this.cb(item)}>
                  <ProjectsListItem 
                  key={Math.random().toString()} 
                  projectId={item.ProjectID} 
                  textNumber={item.TextNumber} 
                  type={item.Type} 
                  agent={item.Agent} 
                  refss={item.Ref}
                  country={item.Country}
                  client={item.Client}
                  status={item.Status}
                  data={item.Date}
                  />
                  
                </TouchableOpacity>}
              keyExtractor={item => item.ProjectID.toString()}
            />
  
          </View>
        </View>
      )
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigationPanel: {
    flex: 1,
    backgroundColor: '#3B5E88',
  },

  list: {
    flex: 5,
    paddingHorizontal: 10,
  }
})
export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    loading: (state) => {
      dispatch({ type: 'LOADING', payload: { state: state } })
    },
    loadProjects: (projects) => {
      dispatch({ type: 'LOAD_PROJECTS_LIST', payload: { projectsList: projects } })
    },

  })
)(ProjectsList)


