import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Dessert from './src/screen/Dessert';
export class App extends React.Component {
  render() {
    return (
      <Dessert />
    );
  }
}
const styles = StyleSheet.create({});
 
export default App;
