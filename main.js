import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator,createStackNavigator, createAppContainer } from 'react-navigation';
import {Icon} from 'react-native-elements';
import {Provider} from 'react-redux';

import store from './store';


import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen    from './screens/MapScreen';
import DeckScreen   from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';


const Root = createBottomTabNavigator({

  welcome: { 

      screen: WelcomeScreen,
      navigationOptions: {
        tabBarVisible: false
      }
  },

  auth: { 

      screen: AuthScreen,
  },

  main : {
      //nested tab bars
    screen : createBottomTabNavigator({
          map : {screen : MapScreen},
          deck : {screen : DeckScreen},
          review : {
            screen : createStackNavigator({
              review : {
                screen : ReviewScreen,
             },
              settings : {screen : SettingsScreen}

            }),
            navigationOptions : {
              title : 'Review Jobs',
              tabBarIcon : ({tintColor}) => <Icon name="favorite" size={30} color={tintColor}/>
          }
          }


      }, {
        navigationOptions: {
          tabBarVisible: false
        }
      }, {
        // swipeEnabled : false,
        tabBarOptions : {
          labelStyle: {fontSize : 12}
        }
      })
  }

}, { //configuration option for the tab
    lazy : true //lazy loading // dont load another screen until we move there
});



const Main = createAppContainer(Root);
export default Main; 
