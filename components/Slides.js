import React, {Component} from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import { Button } from 'react-native-elements';

//Dimensions is used to get the full width of the device
const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    renderLastSlide(index){
        if(index === this.props.data.length - 1){
            return (
                <Button
                    title="Onwards!"
                    buttonStyle={styles.buttonStyle}
                    onPress={this.props.onComplete}
                />
            )
        }
    }



    renderSlides(){
        return this.props.data.map((slide, i) => {
          return(  
          <View key={slide.text} 
                style={[styles.slideStyle, {backgroundColor : slide.color}]}
                >
                <Text style={styles.slideText}>{slide.text}</Text>
                {this.renderLastSlide(i)}
            </View>
          )
        })
    }




    render() {
        return (
            <ScrollView
            horizontal
            pagingEnabled
            style={{flex : 1}}  //fill up the screen
            >
            {this.renderSlides()}
            </ScrollView>
        );
    }
}
const styles = {
    slideStyle : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        width : SCREEN_WIDTH
    },
    slideText : {
        fontSize : 30,
        color: 'white',
        paddingLeft : 15
    },

    buttonStyle : {
        backgroundColor : '#0288D1',
        marginTop: 10
    }
}

export default Slides;