import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const FlexBoxScreen = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle1}>Child 1</Text>
            <Text style={styles.textStyle2}>Child 2 </Text>
            <Text style={styles.textStyle3}>Child 3 </Text>
            <Text style={styles.textStyle4}>Child 4 </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: 'black',
        borderWidth: 3,
        alignItems: 'stretch',
        //flexDirection: 'row',
        height: 200,
        //justifyContent: 'space-between',
        //justifyContent: 'center',
        //justifyContent: 'space-around',
        //justifyContent: 'flex-start',
    },
    textStyle1: {
        borderColor: 'red',
        borderWidth: 1,
        padding: 5,
        flex:1,
        alignSelf: 'flex-start'
    },
    textStyle2: {
        borderColor: 'red',
        borderWidth: 1,
        padding: 5,
        ...StyleSheet.absoluteFillObject
    },
    textStyle3: {
        borderColor: 'red',
        borderWidth: 1,
        padding: 5,
        flex:1
    },
    textStyle4: {
        borderColor: 'red',
        borderWidth: 1,
        padding: 5,
        flex:1
    }
});

export default FlexBoxScreen;