import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native'
import NewsItem from './newsItem'

class LatestNews extends React.Component {
    render() {
    //   console.log(this.props.news)
      return (
        <View style={styles.container}>
            <View style={styles.header}><Text style={styles.headerText}>News</Text></View>
            <View style={styles.newsList}>
                <FlatList
                    data={this.props.news}
                    scrollEnabled={true}
                    renderItem={({ item }) =>
                        
                        <NewsItem
                            key={Math.random().toString()} 
                            descr = {item.Description}
                            img = {item.Image}
                            name = {item.Name}
                        />
                        
                        }
                    keyExtractor={item => Math.random().toString()}
                />
            </View>
        </View>
      );
    }
  }
  



const styles = StyleSheet.create({
    header:{
        height: 70,
        borderColor: '#3B5E88',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText:{
        fontSize: 32,
        fontStyle: 'bold',
        textAlign: 'center'
    }
  });
  
  
  export default LatestNews