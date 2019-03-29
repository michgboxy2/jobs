import {AsyncStorage} from 'react-native';
import {Facebook} from 'expo';

import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from './types';

//AsyncStorage.setItem('fb_token', token);
export const facebookLogin = () => async (dispatch) => {

   let token = await AsyncStorage.getItem('fb_token');
   
   if(token){
        //Dispatch an action saying FB login is done
        dispatch({type : FACEBOOK_LOGIN_SUCCESS, payload : token});
   } else {
       //start up FB Login process
       doFacebookLogin(dispatch);
   }

};


doFacebookLogin = async (dispatch) => {
    let {type, token} = await Facebook.logInWithReadPermissionsAsync('2180188015627591', {
        permissions: ['public_profile']
    });

    //if sign in failed..
        if(type === 'cancel') {
            return dispatch({type : FACEBOOK_LOGIN_FAIL})
        }

       await AsyncStorage.setItem('fb_token', token);
       dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token});


}