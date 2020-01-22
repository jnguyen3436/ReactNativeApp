import React, { Component } from 'react';
import { Text, StyleSheet,View } from 'react-native';





export default class HelloWorldApp extends Component {

  constructor(){
    super()
    this.state={}
  }

  render() {

    return (
      <View style={StyleSheet.container}>
        <View style={style.result}> </View>
        <View style={style.calculation}></View>
        <View style={style.buttons}>

        <View style={style.numbers}></View>
        <View style={style.operations}></View>

        </View>

        

      </View>
    );
  }
}
