import React, { useReducer } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const reducer = (state, action) => {
    return {...state, counter: state.counter + action.val};
};

const CounterScreenReducer = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    const { counter } = state;
    console.log(state);
    return (
        <View>
            <Button title='Increase' onPress={() => dispatch({ counter: 0, val: 1})}/>
            <Button title='Decrease' onPress={() => dispatch({ counter: 0, val: -1})}/>
            <Text style={styles.counterStyle}>Current Counter: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    counterStyle: {
        fontSize:24,
        textAlign:'center'
    }

});

export default CounterScreenReducer;