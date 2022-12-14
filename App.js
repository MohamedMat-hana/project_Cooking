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
import Intro from './src/screen/into/intro';
export class App extends React.Component {
  render() {
    return (
      <Intro />
    );
  }
}
const styles = StyleSheet.create({});
 
export default App;
