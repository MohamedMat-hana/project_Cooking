import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS,FONTS } from '../constants';
import Dessert from '../screen/Dessert'
import Drink from '../screen/Drink'
 import SignUp from '../screen/SignUp'
import Common from '../screen/Common'
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
        // headerShown: false,
        headerStyle:styles.headerbar,
        headerTitleStyle:styles.textheader,
        // tabBarHideOnKeyboard:false,
        freezeOnBlur:false,
        // activeTintColor: "#000",
        // tabBarActiveBackgroundColor:"#000",
        // tabBarBackground:COLORS.ButtonWhite,
        // tabBarLabelPosition:false,
        // position:"beside-icon",
        // shadow:false,
        
        tabBarActiveTintColor: COLORS.orange,
        tabBarInactiveTintColor: COLORS.ButtonWhite,
        tabBarStyle: styles.tabbar,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === Index.Common) {
            iconName = focused ? "fast-food" : "fast-food-outline"
          } else if (route.name === Index.Drink) {
            iconName = focused ? "cafe" : "cafe-outline"
          } else if (route.name === Index.Dessert) {
            iconName = focused ? "ice-cream" : "ice-cream-outline"
          } else if (route.name === Index.Photo_page) {
            iconName = focused ? "ice-cream" : "ice-cream-outline"
          }

          return <Ionicons name={iconName} size={22} color={color} />
        }
      })}
    >
      <Tab.Screen
        name={Index.Common}
        component={Common}
      options={{
        // tabBarLabel: 'Food',
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
            <Tab.Screen
        name={Index.Photo_page}
        component={Photo_page}
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
    
    backgroundColor:"#31475e",
    borderTopWidth:0,
    borderRadius:15,
// height:50,
    buttom:15,
    right:10,
    left:10,
    fontFamily:"Vazirmatn-VariableFont_wght",
    
    marginBottom:15
  },
  headerbar:{
    // position: "absolute",
    
    backgroundColor:COLORS.black,
    // borderTopWidth:0,
    // borderRadius:15,
// height:50,
    // buttom:15,
    // right:10,
    // left:10,
    
    // marginBottom:15

  },
  textheader:{
    fontSize: FONTS.h3,
    color: COLORS.orange,

    fontFamily:"Vazirmatn-VariableFont_wght",

  }
})
