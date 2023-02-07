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
import Common from './src/screen/Common';
import Navigation from './src/navigation/Navigation';
import Splash from './src/screen/splash';


const App = () => {
  return (
    <>
      <NavigationContainer>
        <Navigation />
       </NavigationContainer>


      {/* <Splash /> */}

    </>
  );
}
const styles = StyleSheet.create({});

export default App;
