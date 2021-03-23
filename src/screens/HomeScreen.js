import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Touchable } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = (props) => {

  return (
  <View>
    <Text style={styles.text}>Hi Mitin!</Text>
    <Button 
      onPress={() => props.navigation.navigate('Components')}
      title="Go to components demo"
    />
    <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>
  </View>
  )};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

