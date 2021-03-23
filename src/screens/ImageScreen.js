import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from './components/ImageDetail';


const ImageScreen = () => {

    return (
        <View>
          <ImageDetail title="Forest" imageSource= {require('../../assets/1.jpg')} score="9"/>
          <ImageDetail title="Beach"  imageSource= {require('../../assets/2.jpg')} score="8" />
          <ImageDetail title="Mountain" imageSource= {require('../../assets/3.jpg')} score="7" />
        </View>
    );
}


const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });


export default ImageScreen;