import React from 'react';
import { TextPropTypes, StyleSheet  } from 'react-native';
 


const Defaulttext = props => {
    return <Text style = {StyleSheet.text}> { props.children } </Text>
};

const  styles = StyleSheet.create({
    text :{
        fontFamily:'open-sans'
    }
});

export default Defaulttext;