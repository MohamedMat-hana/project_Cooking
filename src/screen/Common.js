import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodCommon from './FoodCommon';
import Photo_page from './Photo_page';
import Food from './Food';
// import Stackscreen from '../navigation/HomeStack'
import FoodStack from '../navigation/foodStack';
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'
const { width, height } = Dimensions.get('window');
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 


const Stack = createNativeStackNavigator();

function Stackscreen() {
    return (
        // <NavigationContainer>
            <Stack.Navigator initialRouteName="FoodCommon">
                <Stack.Screen name="Photo_page" component={Photo_page} />
                <Stack.Screen name="FoodCommon" component={FoodCommon} />
            </Stack.Navigator>
        // </NavigationContainer>
    );
}


function Common() {
    const [color, setcolor] = useState(true)


    return (
<> 
       <NavigationContainer style={{ backgroundColor: "#000" }} independent={true}>
            <View style={styles.headerbar}>
                <Text style={styles.textheader}>
                    الاكلات
                </Text>
            </View>
             <Tab.Navigator
                initialRouteName="Feed"
                screenOptions={{
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: COLORS.black50,
                    tabBarLabelStyle: {
                        backgroundColor: COLORS.orange,
                        borderRadius: 10,
                        paddingHorizontal: 25,
                        paddingVertical: 5,
                        fontSize: 20,
                        fontFamily: "Generator Black"
                    },
                    tabBarStyle: {
                        backgroundColor: COLORS.pramary,
                        alignSelf: "center",
                        width: "100%",
                    },
                }}
            >

                <Tab.Screen
                    name="الكل"
                    component={Stackscreen}
                // options={{
                //     // tabBarLabel: 'الكل',
                //     width: 25,

                // }}
                />
                <Tab.Screen
                    name="الشائع"
                    component={Food}
                // options={{ tabBarLabel: 'الشائع' }}
                />
            </Tab.Navigator>
         </NavigationContainer>
        </>
 
    );
}
const styles = StyleSheet.create({
    headerbar: {
        backgroundColor: COLORS.pramary,
        height: height / 10,
        justifyContent: "flex-end"
    },
    textheader: {
        fontSize: FONTS.h1,
        color: COLORS.ButtonWhite,
        alignSelf: "center",
        fontFamily: "Generator Black",
        // marginLeft: "50%",
    }

});

export default Common;
