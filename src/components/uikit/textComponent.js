import React from 'react'
import {StyleSheet, Text, View} from 'react-native';

const TextComponent = (props) =>{
    return(
        <View style={props.stylesView}>
            <Text style={props.stylesText}>{props.string}</Text>
        </View>
    )
}
export default TextComponent