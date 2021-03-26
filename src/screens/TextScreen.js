import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    return (
        <View>
            <Text>Enter Name: </Text>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>Enter Password: </Text>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                value={pass}
                onChangeText={(newValue) => setPass(newValue)}
            />
            <Text>{ (pass.length < 6) ? "Password must be a longer than 5 characters" : null }</Text> 
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 5
    }
});

export default TextScreen;