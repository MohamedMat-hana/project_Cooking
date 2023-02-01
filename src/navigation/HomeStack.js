import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS,FONTS } from '../constants';
import Dessert from '../screen/Dessert'
import Drink from '../screen/Drink'
import Common from '../screen/Common'
import Favourite from '../screen/Favourite'
import Search from '../screen/Search'
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
          } else if (route.name === Index.Favourite) {
            iconName = focused ? "heart" : "heart-outline"
          } else if (route.name === Index.Search) {
            iconName = focused ? "search-outline" : "search-outline"
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
        name={Index.Search}
        component={Search}
      // options={{
      //   tabBarLabel: 'Profile',
      //   tabBarIcon: ({ color }) => (
      //     <MaterialCommunityIcons name="account" color={color} size={26} />
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
        name={Index.Favourite}
        component={Favourite}
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
    // alignItems:"center",
    // justifyContent:"center",
    // alignSelf:"center",
    // alignContent:"center",
    backgroundColor:COLORS.pramary,
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
    // alignItems:"center",
    // justifyContent:"center",
    alignSelf:"center",
    // alignContent:"center",
// textAlign:"center",
// backgroundColor:COLORS.ButtonWhite,
    fontFamily:"Vazirmatn-VariableFont_wght",
    // width:"100%"
    
marginLeft:"50%"
  }
})
