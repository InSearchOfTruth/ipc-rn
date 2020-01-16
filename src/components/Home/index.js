import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Header from '../uikit/header'
import WelcomeBlock from '../uikit/welcome'
import LatestNews from '../LatestNews/index'
import Loading from '../uikit/loading'
import { ScrollView } from 'react-native-gesture-handler';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true};
      }
    _loadNews(){
        
        const myHeaders = new Headers();
        let localThis = this
        let props = this.props
        myHeaders.append('Content-Type', 'application/json;charset=utf-8');
        myHeaders.append('Authorization', 'Bearer ' + this.props.store.loginState.token);
        fetch("https://api.ipcoster.internera.com/api/values/news", {
        method: 'POST',
        headers: myHeaders
        })
        .then((response) => {

            response.json().then(function (data) {
                props.loadNews(data)
            
            })

        })
        .then((error) => {
            setTimeout(() => {
                localThis.setState({loading: false})
            }, 1000)
            
        })
    }
    componentWillMount() {
        this._loadNews()
    }
    render() {
      
      if(this.state.loading){
          return(<Loading/>)
      }else{
        return (
            <View style={styles.container}>
                <Header style={styles.header} styleImg={styles.headerImg} />
                <View style={styles.scrollableContent}>
                    <ScrollView>
                        <WelcomeBlock style={styles.welcome} styleText={styles.welcomeText}/>
                        <View style={styles.mainContent}>
                            <LatestNews news={this.props.store.news} />
                        </View>
                    </ScrollView>
                </View>
            </View>
          );
      }
    }
  }
  



const styles = StyleSheet.create({
    container:{
        flex: 1
      },
      scrollableContent:{
        flex: 6
      }, 
      header:{
        flex: 1,
        backgroundColor: '#3B5E88',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 10
      },
      headerImg:{
        width: 200,
        resizeMode: 'contain',
        height: 50
      },
      welcome:{
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
      },
      welcomeText:{
        fontSize: 24,
        color: '#3767A1',
        fontWeight: 'bold'
      },
      mainContent: {
        flex: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
  });
  
  
  export default connect(
    state => ({
      store: state,
      
  
    }),
    dispatch => ({
        loadNews:(news) =>{
            dispatch({ type: 'ADD_LATEST_NEWS', payload: news })
          }
    })
  )(HomeScreen)