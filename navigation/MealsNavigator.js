 import { createStackNavigator } from 'react-navigation-stack' ;
 import { createAppContainer } from 'react-navigation';
 

 import CategoriesScreen from '../screens/CatergoriesScreen';
 import CategoryMealsScreen from '../screens/CategoryMealsScreen';
 import MealDetailScreen from '../screens/MealDetailScreen';


 
 const MealsNavigator = createStackNavigator({
     Categories: CategoriesScreen,
     CategoryMeals: {
       screen:  CategoryMealsScreen
     },
     MealDetail: MealDetailScreen

 });


  export default createAppContainer(MealsNavigator) ;