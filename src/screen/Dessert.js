import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native";
const { width, height } = Dimensions.get('window');
import Photo_page from './Photo_page';
import AllDessert from './AllDessert';
import All from './All';
import CommonDessert from './CommonDessert';
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'
function Dessert() {
    const [activeTab, setActiveTab] = useState("الكل")
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.pramary }}>
            <View style={styles.headerbar}>
                <Text style={styles.textheader}>
                الحلويات
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
        <AllDessert />
    </>

)
const Buttonsc = (props) => (
    <>

        <CommonDessert />

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
import WbeView from "./WbeView";
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
            <Stack.Screen name="Dessert" component={Dessert} />
            <Stack.Screen name="CommonDessert" component={CommonDessert} />
            <Stack.Screen name="All" component={All} />
            <Stack.Screen name="WbeView" component={WbeView}/>

        </Stack.Navigator>
        //  </NavigationContainer>
    );
}
