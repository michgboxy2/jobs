import React, {Component } from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {MapView} from 'expo';
import {connect} from 'react-redux';
import { Button, Icon } from 'react-native-elements';


import * as actions from '../actions';

class MapScreen extends Component {
    static navigationOptions = {
        title : 'Map',
        tabBarIcon : ({tintColor}) => <Icon name="my-location" size={30} color={tintColor}/>
    }
    state = {
        mapLoaded : false,
        region : {
            longitude : -122,
            latitude: 37,
            longitudeDelta: 0.04,  //used to control zoom level
            latitudeDelta: 0.09
        }
    }

    componentDidMount(){
        this.setState({mapLoaded : true});
    }


    onRegionChangeComplete = (region) => {
        
        this.setState({region});
    }

    onButtonPress = () => {
        // console.log(this.state.region);
        // this.props.navigation.navigate('deck');
        this.props.fetchJobs(this.state.region, () => {
            this.props.navigation.navigate('deck');
        });
    }





    render(){
        if(!this.state.mapLoaded){
            return(
                <View style={{flex : 1, justifyContent: 'center'}}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
        return (
            <View style={{flex : 1}}>
                <MapView 
                region={this.state.region}
                style={{flex : 1}} 
                onRegionChangeComplete={this.onRegionChangeComplete}
               />

               <View style={styles.buttonContainer}>
                   <Button
                    large
                    title="search this Area"
                    backgroundColor="#009688"
                    icon={{name : 'search'}}
                    onPress={this.onButtonPress}
                   />
               </View>
               
            </View>
        )
    }

}

const styles = {
    buttonContainer : {
        // position : 'absolute',
        button : 20,
        left : 0,
        right : 0,
        justifyContent: 'flex-end',
    }
}



export default connect(null, actions)(MapScreen);