import React from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';

const MealDetailScreen = props => {
    return (
        <View style = {styles.screen}>
               <Text>The Meal Details Screen !</Text>
               <Button title />
        </View>
    );
}


const styles = StyleSheet.create({
           screen: {
               flex:1,
               justifyContent: 'center',
               alignItems: 'center', 

           }
});

export default MealDetailScreen;
