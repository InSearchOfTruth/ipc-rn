import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'

class NewsItem extends React.Component {
    render() {
      imgSrc = "https://www.ip-coster.com/SentFiles/" + this.props.img
      return (
        <View style={styles.container}>
            <View style={styles.name}><Text style={styles.nameText}>{this.props.name}</Text></View>
            <View style={styles.imgContainer}>
                <Image style={styles.searchIcon} source={{uri : imgSrc}}/>
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>{this.props.descr}</Text></View>
        </View>
      );
    }
  }
  



const styles = StyleSheet.create({
    container:{
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#3B5E88'
    },
    imgContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchIcon:{
        
        height: 230,
        width: 320
    },
    name:{
        paddingBottom: 5
    },
    nameText:{
          textAlign: 'center',
          fontSize: 18,
          color: '#3B5E89',
          fontStyle: 'bold'
    },
    description:{
        marginBottom: 10,
        marginTop: 10
    },
    descriptionText:{
        textAlign:'center',
        fontSize: 16,
    }

  });
  
  
  export default NewsItem