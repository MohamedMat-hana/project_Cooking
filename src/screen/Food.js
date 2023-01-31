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
                        view: true
                    },
                    {
                        Image: require("../img/burger.png"),
                        name: "Burger",
                        view: true
                    },
                    {
                        Image: require("../img/food.jpg"),
                        name: "Cop",
                        view: true
                    },
                    {
                        Image: require("../img/food2.jpg"),
                        name: "ايس كريم",
                        view: true
                    },
                    {
                        Image: require("../img/food3.jpg"),
                        name: "ايس كريم",
                        view: true
                    },
                    {
                        Image: require("../img/food4.jpg"),
                        name: "ايس كريم",
                        view: true
                    },
                    {
                        Image: require("../img/steak_food.png"),
                        name: "ايس كريم",
                        view: true
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
                <View style={styles.Header}>
                    {/* <View style={styles.nameStackView}>
                        <Text style={styles.textnameStackView}>
                            أكلاتك
                        </Text>
                    </View> */}

                    <ScrollView>
                        <View style={styles.Dessercommon}>
                            <View style={styles.DessercommonHeader}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.TextCommon}>
                                        الأكلات الشائعة
                                    </Text>
                                    <Image source={require("../img/food33.png")} style={styles.Image} />
                                </View>
                                <View style={styles.Dessercommon2}>
                                    <Ionicons name='arrow-back-circle' size={ICONSSIZE.xlIcon} color={COLORS.orange} />
                                </View>
                            </View>
                            <View style={styles.DessertCommon}>
                                <ScrollView horizontal={true}>
                                    {this.state.Common.map((item, index) => (
                                        <View style={styles.ButtonTabs}>
                                            <Image source={item.Image} style={styles.ImageTabs}
                                                resizeMode={"cover"} />
                                            <Text style={styles.TextTabs}>
                                                {item.name}
                                            </Text>
                                            <View style={styles.TabsofTabs}>
                                                <Text style={[styles.TextTabs, { color: COLORS.black }]}>
                                                    الخطوات
                                                </Text>
                                                <View style={styles.ViewBoth}>
                                                    <TouchableOpacity style={styles.the_Two_button}>
                                                        <Text style={[styles.TextTabs, { marginRight: MARGIN.xxsMargin }]}>
                                                            فيديو
                                                        </Text>
                                                        <Octicons name='video' size={ICONSSIZE.mIcon} color={COLORS.white} />


                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                            onPress={() => this.props.navigation.navigate('DetelsStack', { screen: 'Photo_page' })}

                                                        // onPress={() => {
                                                        //     this.props.navigation.navigate('Photo_page');
                                                        // }}
                                                        style={styles.the_Two_button}>
                                                        <Text style={styles.TextTabs}>
                                                            الطريقة
                                                        </Text>


                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    ))}
                                </ScrollView>
                            </View>
                        </View>












                        {/* search */}


                        <View style={styles.SearchView}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.SearchTextheader}>
                                    دور علي أكلك
                                </Text>
                                <Image source={require("../img/food22.png")} style={styles.Image} />
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
                                    <TouchableOpacity onPress={() => {
                                        this.setState({ IconSearch: true })
                                        // this.fadeIn
                                    }}>

                                        <Ionicons name='ios-search-circle' size={ICONSSIZE.xlIcon} color={COLORS.orange} />
                                    </TouchableOpacity>
                                    <TextInput style={styles.SearchTextInput}
                                        placeholder={'بحث'}
                                        placeholderTextColor={COLORS.gray}
                                        onChangeText={(value) => {
                                            this.makesearch(value)
                                            this.setState({ search: value })
                                        }}
                                        value={this.state.search} />
                                    <TouchableOpacity onPress={() => {
                                        this.setState({
                                            search: "",
                                        })
                                        // this.Delete()
                                        // this.fadeIn
                                    }}>

                                        <Ionicons name='close-circle-outline' size={ICONSSIZE.xlIcon} color={COLORS.orange} />
                                    </TouchableOpacity>

                                </Animatable.View>
                            )}
                        </View>
                        {/* end search */}
















                        <View style={styles.Dessert}>
                            <View style={styles.DessercommonHeader1}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.TextCommon}>
                                        الوجبات
                                    </Text>
                                    <Image source={require("../img/spaghetti2.png")} style={styles.Image} />
                                </View>
                                <View style={styles.Dessercommon2}>
                                    <Ionicons name='arrow-back-circle' size={ICONSSIZE.xlIcon} color={COLORS.orange} />
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", flexWrap: "wrap", }}>

                                {this.state.Common.map((item, index) => (

                                    item.view ? (
                                        <View style={styles.DessertMain}>

                                            <Image source={item.Image} style={styles.ImageTabs2}
                                                resizeMode={"center"} />
                                            <Text style={styles.TextTabs2}>
                                                {item.name}
                                            </Text>
                                            <View style={styles.TabsofTabs2}>
                                                <Text style={[styles.TextTabs2, { color: COLORS.black }]}>
                                                    الخطوات
                                                </Text>
                                                <View style={styles.ViewBoth2}>
                                                    <TouchableOpacity style={styles.the_Two_button2}>
                                                        <Text style={[styles.TextTabs2, { marginRight: MARGIN.xxsMargin }]}>
                                                            فيديو
                                                        </Text>
                                                        <Octicons name='video' size={ICONSSIZE.smIcon} color={COLORS.white} />


                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.the_Two_button2}>
                                                        <Text style={styles.TextTabs2}>
                                                            الطريقة
                                                        </Text>


                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    ) : (null)

                                ))}
                            </View>

                        </View>
                        <View style={{ height: 40 }}></View>
                    </ScrollView>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    Header: {
        backgroundColor: COLORS.black,
        // marginTop: MARGIN.xxsMargin,
        alignItems: "center",
        height: height
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
        fontFamily:"Vazirmatn-VariableFont_wght"
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
        height: height / 17,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: RADIUS.lgRadius,
        borderWidth: 2,
        borderColor: COLORS.orange,
        paddingHorizontal: PADDING.xsPadding,
        fontSize: FONTS.h5,
        flexDirection: "row"

    },
    SearchTextInput: {
        // backgroundColor: COLORS.white,
        width: width / 1.4,
        height: height / 17,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        // borderRadius: RADIUS.lgRadius,
        // borderWidth: 2,
        // borderColor: COLORS.orange,
        paddingHorizontal: PADDING.smPadding,
        fontSize: FONTS.h5
        // marginVertical: MARGIN.xsMargin

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
        height: height / 4.5,
        borderTopRightRadius: RADIUS.lgRadius,
        borderTopLeftRadius: RADIUS.lgRadius,
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
