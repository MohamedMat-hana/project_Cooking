import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodCommon from './FoodCommon';
import Drink from './Drink';
import Food from './Food';
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'
const { width, height } = Dimensions.get('window');

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


function Common() {

    return (

        <NavigationContainer style={{ backgroundColor: "#0c0c0c" }} independent={true}>
             <Tab.Navigator
                initialRouteName="Feed"
                screenOptions={{
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: COLORS.black50,
                    tabBarLabelStyle: { backgroundColor: COLORS.orange, borderRadius: 10, paddingHorizontal: 25, paddingVertical: 5, fontSize: 20, fontFamily: "Generator Black" },
                    tabBarStyle: {
                        backgroundColor: COLORS.pramary,
                        alignSelf: "center",
                        width: "100%",
                    },
                }}
            >
                <Tab.Screen
                    name="FoodCommon"
                    component={FoodCommon}
                    options={{
                        tabBarLabel: 'الكل',
                        width: 25,

                    }}
                />
                <Tab.Screen
                    name="Food"
                    component={Food}
                    options={{ tabBarLabel: 'الشائع' }}
                />
             </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
      
});

export default Common;
