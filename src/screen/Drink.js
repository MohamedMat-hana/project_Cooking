import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllDrink from './AllDrink';
import Drink from './Drink';
import CommonDrink from './CommonDrink';
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'
const { width, height } = Dimensions.get('window');

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


function Common() {

    return (

        <NavigationContainer style={{ backgroundColor: "#0c0c0c" }} independent={true}>
            {/* <View style={styles.Header}>
                <View style={styles.nameStackView}>
                    <Text style={styles.textnameStackView}>
                        الأكلات
                    </Text>
                </View>
            </View> */}
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
                    name="AllDrink"
                    component={AllDrink}
                    options={{
                        tabBarLabel: 'الكل',
                        width: 25,
                    }}
                />
                <Tab.Screen
                    name="CommonDrink"
                    component={CommonDrink}
                    options={{ tabBarLabel: 'الشائع' }}
                />
                {/* <Tab.Screen
        name="Drink"
        component={Drink}
        options={{ tabBarLabel: 'Drink' }}
      /> */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({

});

export default Common;
