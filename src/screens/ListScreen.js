import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1'},
        {name: 'Friend #2'},
        {name: 'Friend #3'},
        {name: 'Friend #4'},
        {name: 'Friend #5'},
        {name: 'Friend #6'}
    ];

    return (
        <View>
            <Text>List Screen</Text>
            <FlatList 
                horizontal
                data={friends} 
                keyExtractor={friend => friend.name}
                renderItem={({item}) => {
                    return <Text style={styles.textStyle}>{item.name}</Text>
                }}>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginRight: 15,
        marginLeft: 5
    }
});

export default ListScreen;