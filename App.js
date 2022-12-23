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
import Drink from './src/screen/Drink';
export class App extends React.Component {
  render() {
    return (
      <Drink />
    );
  }
}
const styles = StyleSheet.create({});
 
export default App;
