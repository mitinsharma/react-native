import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {

    console.log(props);
    return (
        <View style={styles.cardStyle}>
            <Image source={props.imageSource} style={styles.imgStyle}/>
            <Text>{props.title}</Text>
            <Text>Image Score - {props.score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imgStyle: {
        height:200,
        width:200
    },
    cardStyle: {
        marginBottom:10
    }
});

export default ImageDetail;