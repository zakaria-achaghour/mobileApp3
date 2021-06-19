
import React from 'react';
import { View, Text, Button,FlatList,TouchableOpacity, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CATEGORIES } from '../data/dummy-data';

import CategoryGridTile from '../components/CategoryGridTile';

import CustomHeaderButton from '../components/headerButton'



const CategoriesScreen = props => {
   
   const renderGridItem = (itemData) => {
       return ( 
           <CategoryGridTile
                    title={itemData.item.title}
                    color={itemData.item.color}
                     onSelect={() => {
                    props.navigation.navigate(
                        'CategoryMeals',
                        {categoryId:itemData.item.id}
                        
                        )

                     }} 
                     
                     />
              );
   }
    return (
       
           <FlatList 
                keyExtractor={(item, index) =>item.id } 
                data={CATEGORIES} 
                renderItem={renderGridItem} 
                numColumns={2}/>

    );
}

CategoriesScreen.navigationOptions = (navdata) => {
    return {
   title: 'Meals Categories',
   headerLeft: <HeaderButtons HeaderButtonComponent = {CustomHeaderButton} > 
                   <Item title= "Menu" iconName='ios-menu' onPress={() => {
                       navdata.navigation.toggleDrawer(); 
                   }} />
                </HeaderButtons>
   
};
};
const styles = StyleSheet.create({
           screen: {
               flex:1,
               justifyContent: 'center',
               alignItems: 'center', 
           },
         
});



export default CategoriesScreen;