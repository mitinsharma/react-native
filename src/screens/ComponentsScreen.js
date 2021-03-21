import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'My name is Mitin';
    const greetingElement = <Text style={styles.greetStyle}>{greeting}</Text>
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native!</Text>
            <Text>{greetingElement}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    greetStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;