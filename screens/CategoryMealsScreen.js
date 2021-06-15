import React from 'react';
import { View, Text,Button,FlatList, StyleSheet, Platform } from 'react-native';

import  { CATEGORIES, MEALS } from '../data/dummy-data'

import  MealList from '../components/MealList';
const CategoryMealsScreen = props => {



   const categoryId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
    
    );
    return <MealList listData={displayedMeals} navigation={props.navigation} />;
}

CategoryMealsScreen.navigationOptions = navigationData => {
    const categoryId = navigationData.navigation.getParam('categoryId');
 
    const selectedCategory = CATEGORIES.find(cat =>cat.id === categoryId);
   
  return {
    headerTitle: selectedCategory.title,
   
  };
};


export default CategoryMealsScreen;
