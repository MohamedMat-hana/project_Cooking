import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../screen/into/intro';
import Splash from '../screen/splash';
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash">
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name="Intro" component={Intro} />
    </Stack.Navigator>
  );
}

export default AuthStack;
