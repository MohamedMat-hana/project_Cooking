import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native";
const { width, height } = Dimensions.get('window');
import Photo_page from './Photo_page';

import Food from './Food';
import FoodCommon from './FoodCommon';
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'
function TabHeader() {
    const [activeTab, setActiveTab] = useState("الكل")
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.pramary }}>
            <View style={styles.headerbar}>
                <Text style={styles.textheader}>
                    الاكلات
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
            // height:34,
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
        <FoodCommon />
    </>

)
const Buttonsc = (props) => (
    <>

        <Food />

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
        <Stack.Navigator initialRouteName="TabHeader"
            screenOptions={({ route }) => ({
                headerShown: false
            })}
        >
            <Stack.Screen name="Photo_page" component={Photo_page} />
            <Stack.Screen name="TabHeader" component={TabHeader} />
            <Stack.Screen name="FoodCommon" component={FoodCommon} />

        </Stack.Navigator>
        //  </NavigationContainer>
    );
}
