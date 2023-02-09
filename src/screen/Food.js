import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    TextInput,
    ScrollView,
} from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
const { width, height } = Dimensions.get('window');
import * as Animatable from 'react-native-animatable';
import Common from '../screen/Common'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default class Food extends React.Component {
    constructor(props) {
        super(props); {
            this.state = {
                Common: [
                    {
                        Image: require("../img/pizza.png"),
                        name: "Pizza",
                        view: true,
                        time: "30 min"
                    },
                    {
                        Image: require("../img/burger.png"),
                        name: "Burger",
                        view: true,
                        time: "30 min"
                    },
                    {
                        Image: require("../img/food.jpg"),
                        name: "Cop",
                        view: true,
                        time: "30 min"
                    },
                    {
                        Image: require("../img/food2.jpg"),
                        name: "ايس كريم",
                        view: true,
                        time: "30 min"
                    },
                    {
                        Image: require("../img/food3.jpg"),
                        name: "ايس كريم",
                        view: true,
                        time: "30 min"
                    },
                    {
                        Image: require("../img/food4.jpg"),
                        name: "ايس كريم",
                        view: true,
                        time: "30 min"
                    },
                    {
                        Image: require("../img/steak_food.png"),
                        name: "ايس كريم",
                        view: true,
                        time: "30 min"
                    },
                    {
                        Image: require("../img/food.jpg"),
                        name: "Cop",
                        view: true,
                        time: "30 min"
                    },

                ],
                IconSearch: true,

            }
        }
    }
    makesearch(searchText) {
        let list = this.state.Common
        for (let i = 0; i < list.length; i++) {
            if (((list[i].name).toUpperCase()).includes(searchText.toUpperCase())) {
                list[i].view = true
            }
            else {
                list[i].view = false
            }
        }
        this.setState({ Common: list })
    }
    // Delete() {
    //     let list = this.state.Common
    //     list.view=!list.view
    //     if (list.view==false) {
    //         this.setState({ Common: list })
    //     }
    // }

    render() {
        return (
            <>
                <View style={{ backgroundColor: COLORS.pramary, flex: 1 }}>
                    <ScrollView>
                        <View style={styles.Header}>
                            <View>
                                <View style={{}}>
                                 </View>

                                {this.state.IconSearch ? (
                                    <>
                                        <Animatable.View
                                            animation='slideInLeft' >
                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.setState({ IconSearch: false })
                                                    // this.fadeOut
                                                }}>
                                                <Ionicons name='ios-search-circle' size={60} color={COLORS.orange} />
                                            </TouchableOpacity>

                                        </Animatable.View>
                                    </>
                                ) : (
                                    <Animatable.View style={styles.SearchTextView}
                                        animation='flipInY' >
                                        <TextInput style={styles.SearchTextInput}
                                            placeholder={'البحث عن الأكلات...'}
                                            placeholderTextColor={COLORS.grayFont}
                                            onChangeText={(value) => {
                                                this.makesearch(value)
                                                this.setState({ search: value })
                                            }}
                                            value={this.state.search} />
                                        <TouchableOpacity onPress={() => {
                                            this.setState({ IconSearch: true })
                                         }}>

                                            <Ionicons name='search' size={ICONSSIZE.xlIcon} color={COLORS.pramary} />
                                        </TouchableOpacity>

                                    </Animatable.View>
                                )}
                            </View>
 
                            <View style={styles.BoxView}>

                                {this.state.Common.map((item, index) => (
                                    item.view ? (
                                        // <View style={styles.BoxView}>

                                        <View style={styles.Box}>
                                            <Image source={item.Image} style={styles.ImageTabs2}
                                                resizeMode={"center"} />
                                            <View style={styles.TextViewBox}>
                                                <Text style={styles.TextBox}>
                                                    {item.name}
                                                </Text>
                                            </View>
                                            <View style={styles.TextTimeBox}>
                                                <Text style={styles.TimeBox}>
                                                    {item.time}
                                                </Text>
                                                <Ionicons name='md-time' style={{ alignSelf: "center" }} size={ICONSSIZE.smIcon} color={COLORS.ButtonWhite} />
                                            </View>
                                            <View style={styles.OptionBox}>
                                                <TouchableOpacity 
                                                onPress={() => 
                                                    // this.props.navigation.navigate('DetelsStack',{screen:"Photo_page"})
                                                    this.props.navigation.navigate('DetelsStack',{ screen: 'Photo_page' })

                                                }
                                                style={styles.OptionButtonBox}>
                                                    <Text style={styles.OptionTimeBox}>
                                                        الطريقة
                                                    </Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.OptionButtonBox}>
                                                    <Text style={styles.OptionTimeBox}>
                                                        الفيديو
                                                    </Text>
                                                </TouchableOpacity>

                                            </View>


                                        </View>
                                        // </View>
                                    ) : (null)

                                ))}
                            </View>
                            <View style={styles.starred}>
                                <View style={styles.Headerstarred}>
                                    <Text style={styles.textHeaderstarred}>
                                        المميزة
                                    </Text>
                                    <Text style={styles.textHeaderstarred2}>
                                        رؤية الكل
                                    </Text>
                                </View>
                                {this.state.Common.map((item, index) => (
                                    <View style={styles.Boxstarred}>
                                        <View style={styles.ViewImage}>
                                            <Image source={item.Image} resizeMode={"contain"} style={styles.Imagestarred} />
                                        </View>
                                        <View style={styles.BoxTextStarred}>
                                            <Text style={[styles.textHeaderstarred, { fontSize: FONTS.h2 }]}>
                                                {item.name}
                                            </Text>
                                            <View style={[styles.TextTimeBox, { justifyContent: "center" }]}>
                                                <Text style={styles.TimeBox}>
                                                    {item.time}
                                                </Text>
                                                <Ionicons name='md-time' style={{ alignSelf: "center" }} size={ICONSSIZE.smIcon} color={COLORS.ButtonWhite} />
                                            </View>
                                            <View style={styles.OptionBox}>
                                                <TouchableOpacity style={styles.OptionButtonBox}>
                                                    <Text style={styles.OptionTimeBox}>
                                                        الطريقة
                                                    </Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.OptionButtonBox}>
                                                    <Text style={styles.OptionTimeBox}>
                                                        الفيديو
                                                    </Text>
                                                </TouchableOpacity>

                                            </View>

                                        </View>
                                    </View>
                                ))}

                            </View>
                        </View>
                        <View style={{ height: 55 }}></View>

                    </ScrollView>
                </View>
             </>
        );
    }
}

const styles = StyleSheet.create({
    Header: {
        backgroundColor: COLORS.pramary,
        // marginTop: MARGIN.xxsMargin,
        alignItems: "center",
        flex: 1,
    },
    nameStackView: {
        // backgroundColor: COLORS.white,
        width: width / 1.05,
        height: height / 12,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        marginVertical: MARGIN.xsMargin
    },
    textnameStackView: {
        fontSize: FONTS.h3,
        color: COLORS.orange,
        // fontWeight: "bold",
        fontFamily: "Vazirmatn-VariableFont_wght"
    },
    SearchView: {
        // backgroundColor: COLORS.orange50,
        width: width / 1.05,
        height: height / 9,
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: MARGIN.xsMargin
    },
    SearchTextheader: {
        fontSize: FONTS.h3,
        color: COLORS.orange,
        alignSelf: "flex-start"
    },
    SearchTextView: {
        backgroundColor: COLORS.white,
        width: width / 1.1,
        height: height / 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: RADIUS.smRadius,
        marginVertical: MARGIN.xxsMargin,

        // borderWidth: 1,
        // borderColor: COLORS.orange,
        // paddingHorizontal: PADDING.xsPadding,
        // fontSize: FONTS.h,
        flexDirection: "row"

    },
    SearchTextInput: {
        // backgroundColor: COLORS.white,
        width: width / 1.4,
        height: height / 17,
        alignItems: "center",
        alignSelf:"center",
        // backgroundColor:COLORS.background,
        color:COLORS.black,
        justifyContent: "flex-end",
        fontFamily: "Generator Black",
        // borderRadius: RADIUS.lgRadius,
        // borderWidth: 2,
        // borderColor: COLORS.orange,
        paddingHorizontal: PADDING.smPadding,
        fontSize: FONTS.h4
        // marginVertical: MARGIN.xsMargin

    },
    BoxView: {
        width: width,
        // height:height/12,
        backgroundColor: COLORS.pramary,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: PADDING.xsPadding,
        alignItems: "center",
        justifyContent: "space-around"
    },
    Box: {
        width: width / 2.1,
        alignItems: "center",
        // height: height / 15,
        marginVertical: MARGIN.xxsMargin,
        padding: PADDING.lgPadding,
        borderRadius: RADIUS.xxsRadius,
        backgroundColor: COLORS.pramary50
    },
    starred: {
        width: width,
        // backgroundColor: COLORS.black
    },
    Headerstarred: {
        width: width / 1.05,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center"
    },
    textHeaderstarred: {
        fontSize: FONTS.h1,
        color: COLORS.ButtonWhite,
        // fontWeight: "bold",
        fontFamily: "Generator Black"
    },
    textHeaderstarred2: {
        fontSize: FONTS.h5,
        color: COLORS.gray,
        // fontWeight: "bold",
        fontFamily: "Generator Black"
    },
    Boxstarred: {
        width: width / 1.05,
        // height: height / 5,
        alignSelf: "center",
        borderRadius: RADIUS.smRadius,
        backgroundColor: COLORS.pramary50,
        flexDirection: "row",
        marginVertical: MARGIN.xsMargin
    },
    ViewImage: {
        width: width / 2.5,
        height: height / 5,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#000",
        borderRadius: RADIUS.xxsRadius
    },
    Imagestarred: {
        width: width / 3,
        height: height / 6,
        borderRadius: RADIUS.xxsRadius

    },
    BoxTextStarred: {
        width: width / 1.9,
        height: height / 6,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: RADIUS.smRadius,
        // backgroundColor: COLORS.black,
        // paddingVertical:54

    },
    textDetelsstarred: {
        fontSize: FONTS.h5,
        color: COLORS.grayICon,
        // fontWeight: "bold",
        fontFamily: "Generator Black"
    },
    Dessercommon: {
        height: height / 2.2,
        width: width / 1.05,
        // backgroundColor: COLORS.red
    },
    DessercommonHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor:"#000"
    },
    TextCommon: {
        fontSize: FONTS.h3,
        color: COLORS.orange,
        alignSelf: "flex-start"
    },
    Image: {
        width: 35,
        height: 35
    },
    Dessercommon2: {
        width: width / 2,
        // backgroundColor:COLORS.background,
        alignItems: "flex-end"
    },
    DessertCommon: {
        height: height / 2.4,
        width: width,
        // backgroundColor: COLORS.red,
        justifyContent: "center"
    },
    ButtonTabs: {
        width: width / 2,
        height: height / 2.5,
        backgroundColor: COLORS.orange50,
        borderColor: COLORS.ButtonWhite,
        borderEndWidth: 5,
        borderRadius: RADIUS.xlRadius,
        // justifyContent: "space-evenly",
        alignItems: "center",
        marginHorizontal: MARGIN.xsMargin,
    },
    ImageTabs: {
        width: width / 2.1,
        height: height / 5,
        borderTopRightRadius: RADIUS.xlRadius,
        borderTopLeftRadius: RADIUS.xlRadius,
    },
    TextTabs: {
        fontSize: FONTS.h4,
        color: COLORS.white,
    },
    TabsofTabs: {
        width: width / 2,
        height: height / 6,
        // backgroundColor: COLORS.gray,
        // flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: RADIUS.x5lRadius,
        // marginTop:5,backgroundColor:"#000",

    },
    the_Two_button: {
        backgroundColor: COLORS.orange,
        borderRadius: RADIUS.xsRadius,
        flexDirection: "row",
        // width: width/5,
        padding: PADDING.xsPadding,
        // height: height/16,
        alignItems: 'center',
        justifyContent: "center",
    },
    ViewBoth: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: width / 2,
    },
    Dessert: {
        width: width / 1.05,
        // height: height,
        // backgroundColor: COLORS.gray,
        alignItems: "center",
    },
    DessercommonHeader1: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: width / 1.05

    },
    DessertMain: {
        margin: MARGIN.xsMargin,
        width: width / 2.4,
        height: height / 2.5,
        backgroundColor: COLORS.grayFont,
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: RADIUS.lgRadius,
    },
    ImageTabs2: {
        width: width / 2.4,
        height: height / 5,
        borderRadius: RADIUS.xxsRadius,
    },
    TextViewBox: {
        // backgroundColor: "#000",
        width: width / 2.4,
        alignItems: "flex-start"
    },
    TextBox: {
        fontSize: FONTS.h4,
        color: COLORS.white,
        fontFamily: "Generator Black",
        textAlign: "left"
    },
    TextTimeBox: {
        width: width / 2.4,
        alignItems: "center",
        flexDirection: "row",
        // alignItems:"center",
    },
    TimeBox: {
        fontSize: FONTS.h4,
        color: COLORS.white,
        fontFamily: "Generator Black",
        alignSelf: "center",
        marginHorizontal: 2
    },
    OptionBox: {
        width: width / 2.4,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",

    },
    OptionButtonBox: {
        width: width / 6,
        backgroundColor: COLORS.orange,
        borderRadius: RADIUS.smRadius,
        alignItems: "center",
        justifyContent: "center",
    },
    OptionTimeBox: {
        fontSize: FONTS.h5,
        color: COLORS.white,
        fontFamily: "Generator Black",
        alignSelf: "center",
        marginHorizontal: 2
    },
    TextTabs2: {
        fontSize: FONTS.h6,
        color: COLORS.white,
    },
    TabsofTabs2: {
        width: width / 2.6,
        height: height / 7.5,
        backgroundColor: COLORS.gray,
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RADIUS.xlRadius,
    },
    the_Two_button2: {
        backgroundColor: COLORS.orange,
        borderRadius: RADIUS.xlRadius,
        flexDirection: "row",
        width: width / 6,
        height: height / 18,
        alignItems: 'center',
        justifyContent: "center",
    },
    ViewBoth2: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: width / 2.6,
    },

});
