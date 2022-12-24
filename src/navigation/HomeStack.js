import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../constants';
import Dessert from '../screen/Dessert'
import Drink from '../screen/Drink'
import Food from '../screen/Food'
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 const Tab = createMaterialBottomTabNavigator();

export default HomeStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Feed"
        component={Food}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Dessert}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Drink}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );

  // return (
  //   <Tab.Navigator
  //     inactiveColor={COLORS.blackModal}
  //     activeColor={COLORS.white}
  //     barStyle={{ backgroundColor: COLORS.background }}
  //     >
  //     <Tab.Screen
  //       name="Food"
  //       component={Food}
  //       options={{
  //         // tabBarColor: COLORS.background,
  //         tabBarIcon: ({ color }) => {
  //           return (
  //             <View>
  //               <FontAwesome5 name="ussunnah" color={color} size={24} />
  //             </View>
  //           );
  //         },
  //       }}
  //     />
  //     <Tab.Screen
  //       name="Dessert"
  //       component={Dessert}
  //       options={{
  //         tabBarIcon: ({ color }) => {
  //           return (
  //             <View>
  //               <FontAwesome5 name="hands" size={20} color={color} />
  //             </View>
  //           );
  //         },
  //       }}
  //     />
  //     <Tab.Screen
  //       name="Drink"
  //       component={Drink}
  //       options={{
  //         // tabBarColor: COLORS.Yellow,
  //         tabBarIcon: ({ color }) => {
  //           return (
  //             <View>
  //               <Ionicons name="moon" color={color} size={20} />
  //             </View>
  //           );
  //         },
  //       }}
  //     />
 
  //   </Tab.Navigator>
  // );
};
