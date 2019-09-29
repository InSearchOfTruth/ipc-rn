import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Bottom = (props) =>{
    return(
        <View style={styles.bottom}>
            <Text > test2</Text>
        </View>
    )
}

export default Bottom;

const styles = StyleSheet.create({
    bottom: {
      height: 20,
      alignSelf: 'stretch',
      alignItems: 'center',
      backgroundColor: 'blue',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  });