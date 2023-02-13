// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AllDrink from './AllDrink';
// import Drink from './Drink';
// import CommonDrink from './CommonDrink';
// import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'
// const { width, height } = Dimensions.get('window');

// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createMaterialTopTabNavigator();


// function Common() {

//     return (

//         <NavigationContainer style={{ backgroundColor: "#0c0c0c" }} independent={true}>
//             {/* <View style={styles.Header}>
//                 <View style={styles.nameStackView}>
//                     <Text style={styles.textnameStackView}>
//                         الأكلات
//                     </Text>
//                 </View>
//             </View> */}
//             <Tab.Navigator
//                 initialRouteName="Feed"
//                 screenOptions={{
//                     tabBarActiveTintColor: '#fff',
//                     tabBarInactiveTintColor: COLORS.black50,
//                     tabBarLabelStyle: { backgroundColor: COLORS.orange, borderRadius: 10, paddingHorizontal: 25, paddingVertical: 5, fontSize: 20, fontFamily: "Generator Black" },
//                     tabBarStyle: {
//                         backgroundColor: COLORS.pramary,
//                         alignSelf: "center",
//                         width: "100%",
//                     },
//                 }}
//             >
//                 <Tab.Screen
//                     name="AllDrink"
//                     component={AllDrink}
//                     options={{
//                         tabBarLabel: 'الكل',
//                         width: 25,
//                     }}
//                 />
//                 <Tab.Screen
//                     name="CommonDrink"
//                     component={CommonDrink}
//                     options={{ tabBarLabel: 'الشائع' }}
//                 />
//                 {/* <Tab.Screen
//         name="Drink"
//         component={Drink}
//         options={{ tabBarLabel: 'Drink' }}
//       /> */}
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }
// const styles = StyleSheet.create({

// });

// export default Common;
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native";
const { width, height } = Dimensions.get('window');
import Photo_page from './Photo_page';
import AllDrink from './AllDrink';
import CommonDrink from './CommonDrink';
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'
function Drink() {
    const [activeTab, setActiveTab] = useState("الكل")
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.pramary }}>
            <View style={styles.headerbar}>
                <Text style={styles.textheader}>
                المشروبات
                </Text>
            </View>
            <ScrollView>
                <View style={{
                    flexDirection: "row",
                    alignSelf: "flex-start",
                    marginLeft: MARGIN.smMargin,
                    marginVertical: MARGIN.xxsMargin
                }}>
                    <HeaderButton
                        text="الكل"
                        btnColor="#000"
                        textColor="#fff"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab} />
                    <HeaderButton 
                    text="الشائع"
                        btnColor="#fff"
                        textColor="#000"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab} />

                </View>
                {activeTab == "الكل" ? (
                    <Button />
                ) : (
                    <Buttonsc />
                )
                }
            </ScrollView>
        </View>
    );
}
const HeaderButton = (props) => (
    <>
        <TouchableOpacity style={{
            backgroundColor: props.activeTab == props.text ? COLORS.orange : COLORS.pramary,
            paddingVertical: 6,
            paddingHorizontal: 22,
            borderRadius: RADIUS.xxsRadius,
             marginHorizontal: 5
        }}
            onPress={() => { props.setActiveTab(props.text) }}>
            <Text
                style={{
                    color: props.activeTab == props.text ? COLORS.ButtonWhite : COLORS.gray,
                    fontSize: 15,
                    fontWeight: "900"
                }}>{props.text}</Text>

        </TouchableOpacity>
    </>

)
const Button = (props) => (
    <>
        <AllDrink />
    </>

)
const Buttonsc = (props) => (
    <>

        <CommonDrink />

    </>

)
const styles = StyleSheet.create({
    headerbar: {
        backgroundColor: COLORS.pramary,
        height: height / 10,
        justifyContent: "center"
    },
    textheader: {
        fontSize: FONTS.h1,
        color: COLORS.ButtonWhite,
        alignSelf: "center",
        fontFamily: "Generator Black",
        // marginLeft: "50%",
    }

});



import { createNativeStackNavigator } from '@react-navigation/native-stack';
 const Stack = createNativeStackNavigator();
export default function Stackscreen() {
    return (
        //   <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Dessert"
            screenOptions={({ route }) => ({
                headerShown: false
            })}
        >
            <Stack.Screen name="Photo_page" component={Photo_page} />
            <Stack.Screen name="Dessert" component={Drink} />
            <Stack.Screen name="CommonDrink" component={CommonDrink} />

        </Stack.Navigator>
        //  </NavigationContainer>
    );
}
