import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../constants';
import Dessert from '../screen/Dessert'
import Drink from '../screen/Drink'
import Food from '../screen/Food'
import Photo_page from '../screen/Photo_page'
import Index from '../screen/index'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

export default HomeStack = () => {
  return (
    <Tab.Navigator
      // initialRouteName="Feed"
      // activeColor="#e91e63"
      // barStyle={{ backgroundColor: 'tomato' }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.orange,
        tabBarInactiveTintColor: COLORS.black,
        tabBarStyle: styles.tabbar,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === Index.Food) {
            iconName = focused ? "fast-food" : "fast-food-outline"
          } else if (route.name === Index.Drink) {
            iconName = focused ? "cafe" : "cafe-outline"
          } else if (route.name === Index.Dessert) {
            iconName = focused ? "ice-cream" : "ice-cream-outline"
          }
          return <Ionicons name={iconName} size={22} color={color} />
        }
      })}
    >
      <Tab.Screen
        name={Index.Food}
        component={Food}
      options={{
        tabBarLabel: 'Food',
        // options={{
          // tabBarButton:props=><
        // }}
        // tabBarIcon: ({ color }) => (
        //   <MaterialCommunityIcons name="home" color={color} size={26} />
        // ),
      }}
      />
      <Tab.Screen
        name={Index.Dessert}
        component={Dessert}
      // options={{
      //   tabBarLabel: 'Updates',
      //   tabBarIcon: ({ color }) => (
      //     <MaterialCommunityIcons name="bell" color={color} size={26} />
      //   ),
      // }}
      />
      <Tab.Screen
        name={Index.Drink}
        component={Drink}
      // options={{
      //   tabBarLabel: 'Profile',
      //   tabBarIcon: ({ color }) => (
      //     <MaterialCommunityIcons name="account" color={color} size={26} />
      //   ),
      // }}
      />
    </Tab.Navigator>
  );


};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    backgroundColor:COLORS.ButtonWhite,
    borderTopWidth:0,
    buttom:15,
    right:10,
    left:10
  }
})
