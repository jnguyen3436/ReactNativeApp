import React, { Component } from 'react';
import { StyleSheet,Text, View,Button } from 'react-native';

export default class App extends Component {

  constructor(){
    super()
    this.state={}
  }

render(){
  return (
        <View style={styles.container}>
        <View style={styles.result}>
            <Text style={styles.resultText}>11*11</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
              <Button title="0"/>
              <Button title="0"/>
              <Button title="0"/>
          </View>
          <View style={styles.row}>
              <Button title="0"/>
              <Button title="0"/>
              <Button title="0"/>
          </View>
          <View style={styles.row}>
              <Button title="0"/>
              <Button title="0"/>
              <Button title="0"/>
          </View>
          <View style={styles.row}>
              <Button title="0"/>
              <Button title="0"/>
              <Button title="0"/>
          </View>
        </View>
        <View style={styles.operations}>
        
              <Button title="+"/>
              <Button title="-"/>
              <Button title="x"/>
              <Button title="÷"/>
        </View>
        </View>
      </View>
  );
}
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  row:{
    flexDirection:'row',
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  calculationText:{
    fontSize:14,
    color: 'white'
  },
  resultText:{
    fontSize:20,
    color: 'white'
  },
  result:{
    flex:2,
    backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  calculation:{
    flex: 1,
    backgroundColor:'green',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttons:{
    flexGrow:7,
    flexDirection:'row'
  },
  numbers:{
    flex:3,
    backgroundColor:'yellow'
  },
  operations:{
    flex:1,
    backgroundColor:'black',
    justifyContent: 'space-around',

  }
})


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
