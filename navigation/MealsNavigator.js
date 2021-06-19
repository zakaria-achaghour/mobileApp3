import React from 'react'

import { Platform, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack' ;
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import {  createDrawerNavigator } from 'react-navigation-drawer';

 import CategoriesScreen from '../screens/CatergoriesScreen';
 import CategoryMealsScreen from '../screens/CategoryMealsScreen';
 import MealDetailScreen from '../screens/MealDetailScreen';
 import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
 
 const defaultStackNavOptions = 
  { 
    headerStyle: {
      backgroundColor: Platform.os === 'android' ? 'white': '#ff6f00'
    },
    headerTitleStyle: {
      fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
      fontFamily: 'open-sans' 

    },
    headerTintColor: Platform.os === 'android' ? '#ff6f00': '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
}
 
 const MealsNavigator = createStackNavigator({
     Categories: {
       screen:CategoriesScreen,
      },
     CategoryMeals: {
       screen:  CategoryMealsScreen
     },
     MealDetail: MealDetailScreen

 },
 {
   // initialase categories
   defaultNavigationOptions: defaultStackNavOptions
 }); 


const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen,

},{
  // initialase categories
  defaultNavigationOptions: defaultStackNavOptions
}); 

 const tabScreenConfig = {
  Meals: {screen: MealsNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
        return (<Ionicons name='ios-restaurant-outline' size={25} color={tabInfo.tintColor}  />);
    },
    tabBarColor: 'orange',
    tabBarLabel:Platform.os === 'android' ? <Text style={ {fontFamily: 'open-sans-bold'} }>Meals</Text> :'Meals'
  }},
  Favorites: {screen: FavNavigator,navigationOptions:{
    tabBarLabel:'Favorites !',
    tabBarIcon: (tabInfo) => {
      return (<Ionicons name='ios-star' size={25} color={tabInfo.tintColor}  />);
  },
  tabBarColor: 'blue',
  }},
 }


 const MealsFavTabNavigator =
         Platform.os==='android' ?
          createMaterialBottomTabNavigator(tabScreenConfig, {
            activeColor:'white',
            // controlle in chnage color in tab bar
            shifting:true,
            barStyle:{
              backgroundColor: 'blue',
            },


          }) : 
          createBottomTabNavigator( tabScreenConfig,
            {
                tabBarOptions:{
                  labelStyle: {
                     fontFamily: 'open-sans',
                  },
                  activeTintColor: '#eb8934',
               }
      });

const FiltersNavigator = createStackNavigator({
  Filters:FiltersScreen,
 
}, {
  // navigationOptions:{
  //   drawerLabel: 'Filters §',
  // },
  
  defaultNavigationOptions: defaultStackNavOptions
});



 const MainNavigator = createDrawerNavigator({
       MealsFavs: { screen: MealsFavTabNavigator, navigationOptions:{
         drawerLabel: 'Meals Favorites',
         
       } },
       Filters:FiltersNavigator
     }, {
       contentOptions: {
        
         activeTintColor: 'orange'
       }
     });

  export default createAppContainer(MainNavigator) ;