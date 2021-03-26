import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const BoxScreen = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box Screen: </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: 'black',
        borderWidth: 3,
        padding: 10
    },
    textStyle: {
        borderColor: 'red',
        borderWidth: 1,
        margin: 20,
        marginVertical: 20,
        marginHorizontal: 20
    }
});

export default BoxScreen;