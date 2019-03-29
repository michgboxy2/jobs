import React, {Component } from 'react';
import {View, Text, Platform, ScrollView, Linking} from 'react-native';
import { Button, Card , Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {MapView} from 'expo';


class ReviewScreen extends Component {
   

    static navigationOptions = ({ navigation }) => {    //class level property. has no access to props
        return {

          headerTitle: 'Review Jobs',

          title : 'Review Jobs',
          tabBarIcon : ({tintColor}) => <Icon name="favorite" size={30} color={tintColor}/>,
        
          headerRight: (
            <Button title="Settings" onPress={() => navigation.navigate('settings')} 
            backgroundColor="rgba(0,0,0,0)"
            color="rgba(0,122,255,1)"
            />
          ),
          style: {
            marginTop : Platform.OS === 'android' ? 24 : 0
          }
        };
      };

      
    renderLikedJobs(){
      return this.props.likedJobs.map(job => {
        const {company,formattedRelativeTime,jobkey,url, longitude, latitude, jobtitle} = job;
        const initialRegion = {
          longitude,
          latitude,
          latitudeDelta : 0.045,
          longitudeDelta: 0.02
        }
        return (
            <Card key={jobkey} title={jobtitle}>
              <View style={{height : 200}}>
                <MapView
                  style={{flex : 1}}
                  cacheEnabled={Platform.OS === 'android'}
                  scrollEnabled={false}
                  initialRegion={initialRegion}
                >

                </MapView>
                  <View style={styles.detailWrapper}> 
                    <Text style={styles.italics}>{company}</Text>
                    <Text style={styles.italics}>{formattedRelativeTime}</Text>
                  </View>
                  <Button
                    title="Apply Now!!"
                    backgroundColor="#03A9F4"
                    onPress={() => Linking.openURL(url)}
                  />
              </View>
            </Card>
        );
      });
    }
    
    
    render(){
        return (
           <ScrollView>
             {this.renderLikedJobs()}
           </ScrollView>
        )
    }

}

function mapStateToProps(state){
  
  return {likedJobs : state.likedJobs}
}

const styles = {
  detailWrapper : {
    marginTop : 10,
    marginBottom : 10,
    flexDirection  : 'row',
    justifyContent : 'space-around'
  },

  italics : {
    fontStyle : 'italic'
  }
}



export default connect(mapStateToProps)(ReviewScreen);