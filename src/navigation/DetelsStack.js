import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../constants';
import Dessert from '../screen/Dessert'
import Drink from '../screen/Drink'
import Photo_page from '../screen/Photo_page'
 import Index from '../screen/index'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { StackRouter } from '@react-navigation/native';
import StackRouter from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default DetelsStack = () => {
  return (
    
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Photo_page">
      <Stack.Screen name="Photo_page" component={Photo_page} />
    </Stack.Navigator>
  );


};

const styles = StyleSheet.create({
//   tabbar: {
//     position: "absolute",
//     backgroundColor:COLORS.ButtonWhite,
//     borderTopWidth:0,
//     buttom:15,
//     right:10,
//     left:10
//   }
})
