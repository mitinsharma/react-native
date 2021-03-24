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
    <Button 
      onPress={() => props.navigation.navigate('List')}
      title="Go to list demo"
    />
    <Button 
      onPress={() => props.navigation.navigate('Image')}
      title="Go to Image screen"
    />
    <Button 
      onPress={() => props.navigation.navigate('Counter')}
      title="Go to Counter"
    />
    <Button 
      onPress={() => props.navigation.navigate('Color')}
      title="Go to Color demo"
    />
    <Button 
      onPress={() => props.navigation.navigate('Square')}
      title="Go to Square demo"
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

