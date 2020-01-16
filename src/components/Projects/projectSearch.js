import React from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Image, Text} from 'react-native';
import { connect } from 'react-redux'

class ProjectSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
         searchValue: ''
        };
      }
    searchProject(){
        this.props.projectSearch(this.state.searchValue)
    }
    changeTextOnInput = (text)=>{
        

        this.setState({searchValue: text})
        if(text.length < 1){
            this.props.projectSearch('')
        }
    }
    render(){
        return(
            <View style={styles.searchPanel}>
                <View style={styles.searchInputWrapper}>
                    <TextInput maxLength={10} placeholder="Enter Project Number" onChangeText={(text) => this.changeTextOnInput(text)}/>
                </View>
                <TouchableOpacity onPress={this.searchProject.bind(this)}>
                    <View style={styles.searchBtn}>
                        {/* <Text>Search</Text> */}
                       <Image style={styles.searchIcon} source={require('../../../assets/image/search-icon.png')}/>
                    </View>
                </TouchableOpacity>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    searchPanel:{
        flexDirection: 'row',
        height: 40,
        paddingLeft: 5,
        borderColor: '#3B5E88',
        borderBottomWidth: 1,
        justifyContent: 'space-between'
      },
      searchInputWrapper:{
         alignItems: 'stretch',
         justifyContent: 'center'
      },
      searchBtn:{
          height: 40,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#3B5E88',
          borderLeftWidth: 1,
          borderRightWidth: 1,
          paddingLeft: 5,
          paddingRight: 5
      },
      searchIcon:{
        resizeMode: 'contain',
        height: 30,
        width: 30
      }
})
export default connect(
    state => ({
        store: state
        
    
      }),
      dispatch => ({
        
        projectSearch:(number) =>{
          dispatch({ type: 'PROJECT_SEARCH', payload: number })
        }
      })
  )(ProjectSearch)