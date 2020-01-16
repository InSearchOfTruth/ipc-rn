import React from 'react'
import { StyleSheet, Text, View,FlatList,ScrollView, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import ProjectHeader from '../uikit/headerProjects'
import Loading from '../uikit/loading'
import ProjectDetails from './projectDetails'

class ProjectsInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, projectInfo: [], projectDetails:[]};
      }
    _loadProjectInfo(){
        const myHeaders = new Headers();
        let localThis = this
        let data = {projectId: this.props.navigation.state.params.ProjectID};
        myHeaders.append('Content-Type', 'application/json;charset=utf-8');
        myHeaders.append('Authorization', 'Bearer ' + this.props.store.loginState.token);
        
        fetch("https://api.ipcoster.internera.com/api/project/projectDetails", {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data)
        })
        .then((response) => {

            response.json().then(function (data) {
           
                let uniqueStages = []
                let countryProjects = []
                for(let obj of data.projectDetailsValues){
                    if(!uniqueStages.includes(obj.Stages)){
                        uniqueStages.push(obj.Stages)
                    }
                }
                for(let stages of uniqueStages){
                    
                    let stagesArr = []
                    for(let obj of data.projectDetailsValues){
                        
                        if(stages === obj.Stages){
                            
                            stagesArr.push(obj)
                        }
                    }
                    countryProjects.push(stagesArr)
                }
                
                
               localThis.setState({projectInfo: data.projectInfo, projectDetails: countryProjects})

                
            }).then((error) => {
                localThis.setState({loading: false})
             })

        })
    }
    componentWillMount() {
        this._loadProjectInfo()
      }
    counterForProjectDetails = ()=>{
        console.log("ssss")
    }
    render() {
        
        const { goBack } = this.props.navigation;
     if(this.state.loading){
         return(
            <Loading/>
         )
     }else{
        //  console.log(this.state.projectDetails.length)
        let projectType =  this.state.projectDetails.length > 1 ? 'subproject' : 'mainproject'
        let count = 1;
        return(
            <View style={styles.container}>
                <ProjectHeader style={styles.header} goBack={goBack} projectNumber={this.props.navigation.state.params.TextNumber}/>
                <View style={styles.projectContent}>
                    <ScrollView>
                    <View style={styles.projectHeader}>
                        <View style={styles.projectHeaderRow}>
                            <Text style={styles.projectHeaderText}>Project No.   <Text style={styles.projectHeaderInfo}>{this.state.projectInfo.TextNumber}</Text></Text>
                        </View>
                        <View style={styles.projectHeaderRow}>
                            <Text style={styles.projectHeaderText}>Agent:   <Text style={styles.projectHeaderInfo}>{this.state.projectInfo.Agent}</Text></Text>
                        </View>
                        <View style={styles.projectHeaderRow}>
                            <Text style={styles.projectHeaderText}>Client:   <Text style={styles.projectHeaderInfo}>{this.state.projectInfo.Client}</Text></Text>
                        </View>
                        <View style={styles.projectHeaderRow}>
                            <Text style={styles.projectHeaderText}>Type:   <Text style={styles.projectHeaderInfo}>{this.state.projectInfo.Type}</Text></Text>
                        </View>
                        <View style={styles.projectHeaderRow}>
                            <Text style={styles.projectHeaderText}>Ref.:   <Text style={styles.projectHeaderInfo}>{this.state.projectInfo.Ref}</Text></Text>
                        </View>
                    </View>
                    <View style={styles.projectDetails}>
                        <FlatList
                        key={Math.random().toString()} 
                        data={this.state.projectDetails}
                        
                        scrollEnabled={false}
                        renderItem={({ item }) =>
                            <ProjectDetails 
                                count={count++} 
                                projectType={projectType}
                                stages={item}
                        />}
                        keyExtractor={item => Math.random().toString()}
                        />

                    </View>
                    </ScrollView>
                </View>
            </View>
          )
     }
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
        
    },
    projectHeader:{
        flex: 1,
        justifyContent: 'flex-start',
        padding: 10,
    },
    projectHeaderRow:{
        marginVertical: 5
    },
    projectHeaderText: {
        color: '#605f5f',
        fontSize: 16,
    },
    projectHeaderInfo: {
        color: '#797a7b',
        fontSize: 18,
        paddingLeft: 10
    },
    projectDetails:{
        flex: 1
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
  )(ProjectsInfo)