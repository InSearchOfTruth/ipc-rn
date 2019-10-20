import React from 'react'
import {StyleSheet, Text, View, Image, TextInput,Button} from 'react-native';

const Loading = () =>{
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../assets/image/ip-coster-logo.png')}/>
        </View>
    )
}
export default Loading