import React from 'react'

import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack' ;
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

 import CategoriesScreen from '../screens/CatergoriesScreen';
 import CategoryMealsScreen from '../screens/CategoryMealsScreen';
 import MealDetailScreen from '../screens/MealDetailScreen';
 import FavoritesScreen from '../screens/FavoritesScreen';

 
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
   defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: Platform.os === 'android' ? 'white': '#ff6f00'
          },
          headerTintColor: Platform.os === 'android' ? '#ff6f00': '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
   }
 }); 

 const tabScreenConfig = {
  Meals: {screen: MealsNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
        return (<Ionicons name='ios-restaurant-outline' size={25} color={tabInfo.tintColor}  />);
    },
    tabBarColor: 'orange',
  }},
  Favorites: {screen: FavoritesScreen,navigationOptions:{
    tabBarLabel:'Favorites !',
    tabBarIcon: (tabInfo) => {
      return (<Ionicons name='ios-star' size={25} color={tabInfo.tintColor}  />);
  }
  }},
 }
 const MealsFavTabNavigator =
         Platform.os!=='android' ?
          createMaterialBottomTabNavigator(tabScreenConfig, {
            activeColor:'#eb8934',
            shifting:true
          }) : 
          createBottomTabNavigator( tabScreenConfig,
            {
                tabBarOptions:{
                  activeTintColor: '#eb8934',
               }
      });


  export default createAppContainer(MealsFavTabNavigator) ;