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
import { NavigationContainer } from '@react-navigation/native';
import Photo_page from './src/screen/Photo_page';
import Navigation from './src/navigation/Navigation';
import All from './src/screen/All';


const App = () => {
  return (
    <>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      {/* <All /> */}
    </>
  );
}
const styles = StyleSheet.create({});

export default App;