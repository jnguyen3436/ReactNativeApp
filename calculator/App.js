import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
render(){
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// import React, { Component } from 'react';
// import { Text, StyleSheet,View } from 'react-native';





// export default class App extends Component {

//   constructor(){
//     super()
//     this.state={}
//   }

//   render() {

//     return (
//       <View style={StyleSheet.container}>
//         <View style={style.result}> </View>
//         <View style={style.calculation}></View>
//         <View style={style.buttons}>

//         <View style={style.numbers}></View>
//         <View style={style.operations}></View>

//         </View>

        

//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container:{flex:1},
//   result:{flex:1,backgroundColor:'red'},
//   calculation:{flex: 1, backgroundColor:'green'},
//   buttons:{flexGrow:1,flexDirection:'row'},
//   numbers:{flex:3,backgroundColor:'yellow'},
//   operations:{flex:1,backgroundColor:'black'}
// })
