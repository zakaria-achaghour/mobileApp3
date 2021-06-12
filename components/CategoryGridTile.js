import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform,TouchableNativeFeedback } from 'react-native'

const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;
    if(Platform.os !== 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View  style={styles.gridItem}>
        <TouchableCmp 
                style={{felx:1}}
                onPress={props.onSelect}>
         <View style={{...styles.container,...{backgroundColor: props.color}}} >
             <Text style={styles.title}>{props.title}</Text>
         </View>
         
    </TouchableCmp>
    </View>
    );
} ;


const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 50,
        height: 100,
        borderRadius:10,
        overflow: 'hidden',
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:20,
        shadowColor: 'black',
        shadowOpacity:0.26,
        shadowOffset: {width:0 , height:5 },
        shadowRadius:10,
        elevation:3
    },
    title: {
       // fontFamily:'open-sans-bold',
        color:'white',
        fontSize:12,
        fontWeight:'bold',

    }
});

export default CategoryGridTile;