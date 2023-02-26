import React, { useState } from 'react';
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
import Photo_page from '../screen/Photo_page'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function CommonDessert() {
    const [Common, setCommon] = useState(
        [
            {
                Image: require("../img/coffee.jpg"),
                name: "Coffee",
                Elta7der: '15 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components: "مكرونه \n, دقيق\n ,حليب , ملح \n1- فلفل اسود مكرونه\n - دقيق \n-حليب , \nPizza , \nفلفل اسود",
                view: true,
                Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و معل\nقه اضف الماء و معلقه ملحاضف الماء و معلقه ملحاضف الماء و معلقه\n ملح ملح",
                time: "30 min"
            },
            {
                Image: require("../img/coffee.jpg"),
                name: "Coffee",
                Elta7der: '15 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components: "مكرونه \n, دقيق\n ,حليب , ملح \n1- فلفل اسود مكرونه\n - دقيق \n-حليب , \nPizza , \nفلفل اسود",
                view: true,
                Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و معل\nقه اضف الماء و معلقه ملحاضف الماء و معلقه ملحاضف الماء و معلقه\n ملح ملح",
                time: "30 min"
            },
            {
                Image: require("../img/coffee.jpg"),
                name: "moh",
                Elta7der: '15 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components: "مكرونه \n, دقيق\n ,حليب , ملح \n1- فلفل اسود مكرونه\n - دقيق \n-حليب , \nPizza , \nفلفل اسود",
                view: true,
                Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و معل\nقه اضف الماء و معلقه ملحاضف الماء و معلقه ملحاضف الماء و معلقه\n ملح ملح",
                time: "30 min"
            },
            {
                Image: require("../img/dessert.jpg"),
                name: "ايس كريم",
                Elta7der: '15 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components: "مكرونه \n, دقيق\n ,حليب , ملح \n1- فلفل اسود مكرونه\n - دقيق \n-حليب , \nPizza , \nفلفل اسود",
                view: true,
                Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و معل\nقه اضف الماء و معلقه ملحاضف الماء و معلقه ملحاضف الماء و معلقه\n ملح ملح",
                time: "30 min"
            },
            {
                Image: require("../img/dessert5.jpg"),
                name: "ايس كريم",
                Elta7der: '15 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components: "مكرونه \n, دقيق\n ,حليب , ملح \n1- فلفل اسود مكرونه\n - دقيق \n-حليب , \nPizza , \nفلفل اسود",
                view: true,
                Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و معل\nقه اضف الماء و معلقه ملحاضف الماء و معلقه ملحاضف الماء و معلقه\n ملح ملح",
                time: "30 min"
            },
            {
                Image: require("../img/dessert3.jpg"),
                name: "ايس كريم",
                Elta7der: '15 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components: "مكرونه \n, دقيق\n ,حليب , ملح \n1- فلفل اسود مكرونه\n - دقيق \n-حليب , \nPizza , \nفلفل اسود",
                view: true,
                Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و معل\nقه اضف الماء و معلقه ملحاضف الماء و معلقه ملحاضف الماء و معلقه\n ملح ملح",
                time: "30 min"
            },
            {
                Image: require("../img/dessert3.jpg"),
                name: "ايس كريم",
                Elta7der: '15 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components: "مكرونه \n, دقيق\n ,حليب , ملح \n1- فلفل اسود مكرونه\n - دقيق \n-حليب , \nPizza , \nفلفل اسود",
                view: true,
                Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و معل\nقه اضف الماء و معلقه ملحاضف الماء و معلقه ملحاضف الماء و معلقه\n ملح ملح",
                time: "30 min"
            },

        ]
    )
    const [IconSearch, setIconSearch] = useState(true)
    const [search, setsearch] = useState("")


    const makesearch = (searchText) => {
        let list = Common
        for (let i = 0; i < list.length; i++) {
            if (((list[i].name).toUpperCase()).includes(searchText.toUpperCase())) {
                list[i].view = true
            }
            else {
                list[i].view = false
            }
        }
        setCommon(list)
    }
    const navigation = useNavigation();


    return (
        <>
            <View style={{ backgroundColor: COLORS.pramary, flex: 1 }}>
                <ScrollView>
                    <View style={styles.Header}>
                        <View>
                            <View style={{}}>
                            </View>

                            {IconSearch ? (
                                <>
                                    <Animatable.View
                                        animation='slideInLeft' >
                                        <TouchableOpacity
                                            onPress={() => {
                                                setIconSearch(false);
                                            }}>
                                            <Ionicons name='ios-search-circle' size={60} color={COLORS.orange} />
                                        </TouchableOpacity>

                                    </Animatable.View>
                                </>
                            ) : (
                                <Animatable.View style={styles.SearchTextView}
                                    animation='flipInY' >
                                    <TextInput style={styles.SearchTextInput}
                                        placeholder={'البحث عن الحلويات...'}
                                        placeholderTextColor={COLORS.grayFont}
                                        onChangeText={(value) => {
                                            makesearch(value)

                                            setsearch(value)
                                        }}
                                        value={search} />
                                    <TouchableOpacity onPress={() => {
                                        setIconSearch(true);
                                    }}>

                                        <Ionicons name='search' size={ICONSSIZE.xlIcon} color={COLORS.pramary} />
                                    </TouchableOpacity>

                                </Animatable.View>
                            )}
                        </View>

                        <View style={styles.BoxView}>
                            <View style={styles.Headerstarred}>
                                <Text style={styles.textHeaderstarred}>
                                    الوصفات
                                </Text>
                                <Text style={styles.textHeaderstarred2}>
                                    رؤية الكل
                                </Text>
                            </View>
                            <View style={{ flexDirection: "row",width:width, }}>
                                <ScrollView horizontal={true}>

                                    {Common.map((item, index) => (
                                        item.view ? (

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
                                                        onPress={() => {
                                                            navigation.navigate("Photo_page", {
                                                                name: item
                                                            })
                                                        }
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
                                        ) : (null)

                                    ))}
                                </ScrollView>
                            </View>
                        </View>
                        <View style={styles.starred}>
                            <View style={styles.Headerstarred}>
                                <Text style={styles.textHeaderstarred}>
                                    المميزة
                                </Text>
                                {/* <Text style={styles.textHeaderstarred2}>
                                    رؤية الكل
                                </Text> */}
                            </View>
                            {Common.map((item, index) => (
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
                                            <TouchableOpacity
                                                onPress={() => {
                                                    navigation.navigate("Photo_page", {
                                                        name: item
                                                    })
                                                }
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

const styles = StyleSheet.create({
    Header: {
        backgroundColor: COLORS.pramary,
        alignItems: "center",
        flex: 1,
    },
    nameStackView: {
        width: width / 1.05,
        height: height / 12,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        marginVertical: MARGIN.xsMargin
    },
    textnameStackView: {
        fontSize: FONTS.h3,
        color: COLORS.orange,
        fontFamily: "Vazirmatn-VariableFont_wght"
    },
    SearchView: {
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
        flexDirection: "row"

    },
    SearchTextInput: {
        width: width / 1.4,
        height: height / 17,
        alignItems: "center",
        alignSelf: "center",
        color: COLORS.black,
        justifyContent: "flex-end",
        fontFamily: "Generator Black",
        paddingHorizontal: PADDING.smPadding,
        fontSize: FONTS.h4

    },
    BoxView: {
        width: width,
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
        margin: MARGIN.xsMargin,
        padding: PADDING.lgPadding,
        borderRadius: RADIUS.xxsRadius,
        backgroundColor: COLORS.pramary50
    },
    starred: {
        width: width,

    },
    Headerstarred: {
        width: width / 1.05,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
    },
    textHeaderstarred: {
        fontSize: FONTS.h1,
        color: COLORS.ButtonWhite,
        fontFamily: "Generator Black"
    },
    textHeaderstarred2: {
        fontSize: FONTS.h5,
        color: COLORS.gray,
        fontFamily: "Generator Black"
    },
    Boxstarred: {
        width: width / 1.05,
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

    },
    textDetelsstarred: {
        fontSize: FONTS.h5,
        color: COLORS.grayICon,
        fontFamily: "Generator Black"
    },
    Dessercommon: {
        height: height / 2.2,
        width: width / 1.05,
    },
    DessercommonHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
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
        alignItems: "flex-end"
    },
    DessertCommon: {
        height: height / 2.4,
        width: width,
        justifyContent: "center"
    },
    ButtonTabs: {
        width: width / 2,
        height: height / 2.5,
        backgroundColor: COLORS.orange50,
        borderColor: COLORS.ButtonWhite,
        borderEndWidth: 5,
        borderRadius: RADIUS.xlRadius,
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
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: RADIUS.x5lRadius,

    },
    the_Two_button: {
        backgroundColor: COLORS.orange,
        borderRadius: RADIUS.xsRadius,
        flexDirection: "row",
        padding: PADDING.xsPadding,
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
