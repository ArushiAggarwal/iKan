
// Imports All the Components which required

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LogoScreen from './screens/LogoScreen'
import AuthScreen from './screens/AuthScreen'
import SignupChild from './screens/SignupChild';
import SignupParent from './screens/SignupParent';
import LoginScreen from './screens/LoginScreen';
import SelectProductCategory from './screens/SelectProdectCategory';
import RecommendedProducts from './screens/RecommendedProducts';
import SuggestProduct from './screens/SuggestProduct';
import SuggestProductCategory from './screens/SuggestProductCategory';
import MenuScreen from './screens/MenuScreen';
import AboutUs from './screens/AboutUs';
import OtherScreen from './screens/OtherScreen';

// create a Stack which holds all screens and help us to navigate between the screens

const StackNavigator = createStackNavigator({
    LogoScreen:LogoScreen,
    AuthScreen:AuthScreen,
    SignupChild:SignupChild,
    SignupParent:SignupParent,
    LoginScreen:LoginScreen,
    SelectProductCategory:SelectProductCategory,
    RecommendedProducts:RecommendedProducts,
    SuggestProduct:SuggestProduct,
    SuggestProductCategory:SuggestProductCategory,
    MenuScreen:MenuScreen,
    AboutUs:AboutUs,
    OtherScreen:OtherScreen,
  },{
    initialRouteName:'LogoScreen', // Initial Screen is Logo Screen 
    headerMode:'none',
    navigationOptions:{
      HeaderVisible:false,
    }
  })

 // Wrap up the Stack Navigator in App container so it can run 
  
const AppContainer = createAppContainer(StackNavigator);


class App extends React.Component{
  
  render(){
    return (
      <AppContainer /> // Return App Container
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  }
});

export default App;
