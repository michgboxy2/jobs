import Expo, {Notifications} from 'expo';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {createBottomTabNavigator,createStackNavigator, createAppContainer } from 'react-navigation';
import {Provider} from 'react-redux';



import registerForNotifications from './services/push_notification';

import store from './store';

import Main from './main';


class App extends Component{

  componentDidMount(){
    registerForNotifications(); //call the notification function

    
    //setup the notification alert
    Notifications.addListener((notification) => {
      const {data : {text}, origin} = notification;

      if(origin === 'received' && text){

      

      Alert.alert(
        'New Push Notification',
        text,
        [{text : 'OK.'}]
      );
      }
    });
  }


    render(){
      return (
        <Provider store={store}>
      
          <Main/>

        </Provider>
      )
    }
}




export default App;
 