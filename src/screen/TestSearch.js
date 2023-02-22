import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native";
const { width, height } = Dimensions.get('window');
import Photo_page from './Photo_page';
import Search from './Search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 const Stack = createNativeStackNavigator();
export default function TestSearch() {
    return (
        //   <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Search"
            screenOptions={({ route }) => ({
                headerShown: false
            })}
        >
            <Stack.Screen name="Photo_page" component={Photo_page} />
            <Stack.Screen name="Search" component={Search} />
            {/* <Stack.Screen name="CommonDessert" component={CommonDessert} /> */}

        </Stack.Navigator>
        //  </NavigationContainer>
    );
}
