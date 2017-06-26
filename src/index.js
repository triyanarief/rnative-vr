/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Main from './views/main';
import FirstApp from './apps/app1';
//
// export default class rn_vr extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native VR!
//         </Text>
//         <Text style={styles.instructions}>
//           (We are testing it!)
//         </Text>
//         <Button
//           onPress={() => {}}
//           title="Go To App 1"
//           color="#841584"
//         />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
// });
//
// AppRegistry.registerComponent('rn_vr', () => rn_vr);



const App = StackNavigator({
  Home: {screen: Main},
  FirstApp: {screen: FirstApp},
}, {
  initialRouteName: 'Home',
  headerMode: 'screen',
  navigationOptions: {
    header: null,
  },
});

AppRegistry.registerComponent('rn_vr', () => App);
