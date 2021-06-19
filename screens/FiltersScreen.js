import React from 'react';
import { View, Text, StyleSheet,Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/headerButton'
const FiltersScreen = props => {
    return (
        <View style = {styles.screen}>
               <Text style = {styles.title}>Availiable Filters / Restrictions</Text>
               <View style = {styles.filterConatiner}>
                   <Text>Gluten-free</Text>
                   <Switch />
               </View>
        </View>
    );
}

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: <HeaderButtons HeaderButtonComponent = {CustomHeaderButton} > 
                        <Item title= "Menu" iconName='ios-menu' onPress={() => {
                            navData.navigation.toggleDrawer(); 
                        }} />
                    </HeaderButtons>
    }

};
const styles = StyleSheet.create({
           screen: {
               flex:1,
              
               alignItems: 'center', 

           },
           title:{
               fontWeight:'bold',
               fontSize:22,
               margin:20,
               textAlign:'center',
        },
        filterConatiner:{
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center'
        }


});

export default FiltersScreen;
