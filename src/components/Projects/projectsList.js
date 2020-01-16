import React from 'react'
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import ProjectsListItem from './projectsListItem'
import Header from '../uikit/header'
import Loading from '../uikit/loading'
import ProjectSearch from './projectSearch'


class ProjectsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true, countOfProjects: 20};
  }
  cb = (item) => {
    const { navigation } = this.props;
    this.props.navigation.navigate('ProjectsInfo', item);
  }
  _loadProjects() {
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
          // console.log(data)
          props.loadProjectsToStore(data)
        })

      })
      // .then(()=>{
      //   props.loadProjectsToRender({count: 20})
      //   // console.log(props.store.projects.projectsList)
      // })
      .then((error) => {
         setTimeout(() => {
            localThis.setState({loading: false})
         }, 1000)
        
      })
  }
  componentWillMount() {
    this._loadProjects()
  }
  endReached = () =>{
    let countOfProjects = this.state.countOfProjects + 10
    this.setState({countOfProjects: countOfProjects})
    
  }
  render() {

    const { navigate } = this.props.navigation;
    if(this.state.loading){
      return(
        <Loading/>
      )
    }else{
      let projects = this.props.projects
      let renderProjects = projects.slice(0,this.state.countOfProjects)
      // console.log(this.props.projects)
      return (
        <View style={styles.container}>
          <Header navigate={navigate} style={styles.navigationPanel} navigationPanel={true} />
          <ProjectSearch style={styles.searchPanel}/>
          <View style={styles.list}>
          <FlatList
              data={renderProjects}
              onEndReached={this.endReached}
              onEndReachedThreshold={.7}
              initialNumToRender={7}
              
              scrollEnabled={true}
              renderItem={({ item }) =>
                <TouchableOpacity onPress={() => this.cb(item)}>
                  <ProjectsListItem 
                    key={Math.random().toString()} 
                    ProjectID={item.ProjectID} 
                    TextNumber={item.TextNumber} 
                    Type={item.Type} 
                    Agent={item.Agent} 
                    Refs={item.Ref}
                    Country={item.Country}
                    Client={item.Client}
                    Status={item.Status}
                    Date={item.Date}
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
  searchPanel:{
    height: 20
  },
  list: {
    flex: 5,
    paddingHorizontal: 10,
  }
})
export default connect(
  state => ({
    store: state,
    projects: state.projects.filter(project => project.TextNumber.includes(state.projectSearch))

  }),
  dispatch => ({
    loading: (state) => {
      dispatch({ type: 'LOADING', payload: { state: state } })
    },
    loadProjectsToStore: (projects) => {
      dispatch({ type: 'LOAD_PROJECTS_LIST', payload: { projectsList: projects } })
    },
    loadProjectsToRender:(count) =>{
      dispatch({ type: 'ADD_PROJECTS_TO_RENDER', payload: count })
    }
  })
)(ProjectsList)


