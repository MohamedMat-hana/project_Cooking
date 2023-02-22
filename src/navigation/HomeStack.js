import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS, FONTS } from '../constants';
import Dessert from '../screen/Dessert'
import Drink from '../screen/Drink'
import StackFav from '../screen/StackFav'
import Search from '../screen/Search'
import Index from '../screen/index'
import Photo_page from '../screen/Photo_page'
import TabHeader from '../screen/TabHeader'
import TestSearch from '../screen/TestSearch'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
function FoodStack({ navigation }) {
  return (
    <>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Photo_page">
          <Stack.Screen name="Photo_page" component={Photo_page} />
          {/* <Stack.Screen name="FoodCommon" component={FoodCommon} /> */}
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );

}

const Tab = createBottomTabNavigator();

export default HomeStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={Index.Search}
      screenOptions={({ route }) => ({
        headerShown: false,
        headerStyle: styles.headerbar,
        headerTitleStyle: styles.textheader,
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

          return <Ionicons name={iconName} size={25} color={color} />
        }
      })}
    >

      <Tab.Screen
        name={Index.Common}
        component={TabHeader}
        options={{}}
      />
      <Tab.Screen
        name={Index.Dessert}
        component={Dessert}
      />
      <Tab.Screen
        name={Index.Search}
        component={TestSearch}
      />
      <Tab.Screen
        name={Index.Drink}
        component={Drink}
      />
      <Tab.Screen
        name={Index.Favourite}
        component={StackFav}
      />




    </Tab.Navigator>
  );


};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    backgroundColor: "#31475e",
    borderTopWidth: 0,
    borderRadius: 15,
    buttom: 15,
    right: 10,
    left: 10,
    fontFamily: "Generator Black",
    marginBottom: 15
  },
  headerbar: {
    backgroundColor: COLORS.pramary,
  },
  textheader: {
    fontSize: FONTS.h1,
    color: COLORS.ButtonWhite,
    alignSelf: "center",
    fontFamily: "Generator Black",
    marginLeft: "50%",
  }
})
