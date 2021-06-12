 import { Platform } from 'react-native'
 import { createStackNavigator } from 'react-navigation-stack' ;
 import { createAppContainer } from 'react-navigation';
 

 import CategoriesScreen from '../screens/CatergoriesScreen';
 import CategoryMealsScreen from '../screens/CategoryMealsScreen';
 import MealDetailScreen from '../screens/MealDetailScreen';

 
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


  export default createAppContainer(MealsNavigator) ;