import React, { Component } from 'react';
import { Text, View,Button,Alert } from 'react-native';


function AlertMe(){
  return(
    Alert.alert("what's up")
  )
  
  
}


export default class HelloWorldApp extends Component {
  render() {

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
        <Button 
        title="Push me"
        onPress={AlertMe}>

        </Button>
      </View>
    );
  }
}
