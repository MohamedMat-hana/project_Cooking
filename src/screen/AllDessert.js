// import React from 'react';
// import {
//     StyleSheet,
//     View,
//     Text,
//     Image,
//     StatusBar,
//     TouchableOpacity,
//     ImageBackground,
//     Dimensions,
//     TextInput,
//     ScrollView,
//  } from 'react-native';
// import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
// import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import Octicons from 'react-native-vector-icons/Octicons'
// // import { Animatable } from 'react-native-animatable';
// const { width, height } = Dimensions.get('window');
// import * as Animatable from 'react-native-animatable';
// // MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);
// // import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
// // const navigationRef = createNavigationContainerRef()


// export default class AllDessert extends React.Component {
//     // handleViewRef = ref => this.view = ref;

//     // bounce = () => this.view.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
// //    navigate(name, params) {
// //   if (navigationRef.isReady()) {
// //     navigationRef.navigate(name, params);
// //   }
// // }


//     constructor() {
//         super(); {
//             this.state = {
//                 Common: [
//                     {
//                         Image: require("../img/dessert3.jpg"),
//                         name: "ice cream",
//                         view: true
//                     },
//                     {
//                         Image: require("../img/dessert4.jpg"),
//                         name: "cemo",
//                         view: true
//                     },
//                     {
//                         Image: require("../img/dessert2.jpg"),
//                         name: "moh",
//                         view: true
//                     },
//                     {
//                         Image: require("../img/dessert.jpg"),
//                         name: "ايس كريم",
//                         view: true
//                     },
//                     {
//                         Image: require("../img/dessert5.jpg"),
//                         name: "ايس كريم",
//                         view: true
//                     },
//                     {
//                         Image: require("../img/dessert3.jpg"),
//                         name: "ايس كريم",
//                         view: true
//                     },
//                     {
//                         Image: require("../img/dessert3.jpg"),
//                         name: "ايس كريم",
//                         view: true
//                     },

//                 ],
//                 IconSearch: true,

//             }
//         }
//     }
//     makesearch(searchText) {
//         let list = this.state.Common
//         for (let i = 0; i < list.length; i++) {
//             if (((list[i].name).toUpperCase()).includes(searchText.toUpperCase())) {
//                 list[i].view = true
//             }
//             else {
//                 list[i].view = false
//             }
//         }
//         this.setState({ Common: list })
//     }

//     render() {
//         return (
//             <>
//                 <View style={styles.Header}>
//                     <View style={styles.nameStackView}>
//                         <Text style={styles.textnameStackView}>
//                             الحلويات
//                         </Text>
//                     </View>

//                     <ScrollView>
//                         <View style={styles.Dessercommon}>
//                             <View style={styles.DessercommonHeader}>
//                                 <View style={{ flexDirection: "row" }}>
//                                     <Text style={styles.TextCommon}>
//                                         الحلويات الشائعة
//                                     </Text>
//                                     <Image source={require("../img/dessert22.png")} style={styles.Image} />
//                                 </View>
//                                 <View style={styles.Dessercommon2}>
//                                     <Ionicons name='arrow-back-circle' size={ICONSSIZE.xlIcon} color={COLORS.orange} />
//                                 </View>
//                             </View>
//                             <View style={styles.DessertCommon}>
//                                 <ScrollView horizontal={true}>
//                                     {this.state.Common.map((item, index) => (
//                                         <View style={styles.ButtonTabs}>
//                                             <Image source={item.Image} style={styles.ImageTabs}
//                                                 resizeMode={"center"} />
//                                             <Text style={styles.TextTabs}>
//                                                 {item.name}
//                                             </Text>
//                                             <View style={styles.TabsofTabs}>
//                                                 <Text style={[styles.TextTabs, { color: COLORS.black }]}>
//                                                     الخطوات
//                                                 </Text>
//                                                 <View style={styles.ViewBoth}>
//                                                     <TouchableOpacity style={styles.the_Two_button}>
//                                                         <Text style={[styles.TextTabs, { marginRight: MARGIN.xxsMargin }]}>
//                                                             فيديو
//                                                         </Text>
//                                                         <Octicons name='video' size={ICONSSIZE.mIcon} color={COLORS.white} />


//                                                     </TouchableOpacity>
//                                                     <TouchableOpacity 
//                                                     onPress={() => this.props.navigation.navigate('Photo_page')}
//                                                     style={styles.the_Two_button}>
//                                                         <Text style={styles.TextTabs}>
//                                                             الطريقة
//                                                         </Text>


//                                                     </TouchableOpacity>
//                                                 </View>
//                                             </View>
//                                         </View>
//                                     ))}
//                                 </ScrollView>
//                             </View>
//                         </View>












//                         {/* search */}


//                          <View style={styles.SearchView}>
//                             <View style={{ flexDirection: "row" }}>
//                                 <Text style={styles.SearchTextheader}>
//                                     دور علي حلوياتك
//                                 </Text>
//                                 <Image source={require("../img/ice_cream.png")} style={styles.Image} />
//                             </View>
//                             {this.state.IconSearch ? (
//                                 <>
//                                     <Animatable.View  
//                                          animation='slideInLeft' >
//                                         <TouchableOpacity
//                                             onPress={() => {
//                                                 this.setState({ IconSearch: false })
//                                                 // this.fadeOut
//                                             }}>
//                                             <Ionicons name='ios-search-circle' size={60} color={COLORS.orange} />
//                                         </TouchableOpacity>

//                                     </Animatable.View>
//                                 </>
//                             ) : (
//                                 <Animatable.View style={styles.SearchTextView}
//                                     animation='flipInY' >
//                                     <TouchableOpacity onPress={() => {
//                                         this.setState({ IconSearch: true })
//                                         // this.fadeIn
//                                     }}>

//                                         <Ionicons name='ios-search-circle' size={ICONSSIZE.xlIcon} color={COLORS.orange} />
//                                     </TouchableOpacity>
//                                     <TextInput style={styles.SearchTextInput}
//                                         placeholder={'بحث'}
//                                         placeholderTextColor={COLORS.gray}
//                                         onChangeText={(value) => {
//                                             this.makesearch(value)
//                                             this.setState({ search: value })
//                                         }}
//                                         value={this.state.search} />
//                                     <TouchableOpacity onPress={() => {
//                                         this.setState({
//                                             search: "",
//                                         })
//                                         // this.Delete()
//                                         // this.fadeIn
//                                     }}>

//                                         <Ionicons name='close-circle-outline' size={ICONSSIZE.xlIcon} color={COLORS.orange} />
//                                     </TouchableOpacity>

//                                 </Animatable.View>
//                             )}
//                         </View>
//                          {/* end search */}
















//                         <View style={styles.Dessert}>
//                             <View style={styles.DessercommonHeader1}>
//                                 <View style={{ flexDirection: "row" }}>
//                                     <Text style={styles.TextCommon}>
//                                         التحلية
//                                     </Text>
//                                     <Image source={require("../img/dessert22.png")} style={styles.Image} />
//                                 </View>
//                                 <View style={styles.Dessercommon2}>
//                                     <Ionicons name='arrow-back-circle' size={ICONSSIZE.xlIcon} color={COLORS.orange} />
//                                 </View>
//                             </View>
//                             {this.state.Common.map((item, index) => (

//                                 item.view ? (
//                                     <View style={styles.DessertMain}>

//                                         <Image source={item.Image} style={styles.ImageTabs2}
//                                             resizeMode={"center"} />
//                                         <Text style={styles.TextTabs2}>
//                                             {item.name}
//                                         </Text>
//                                         <View style={styles.TabsofTabs2}>
//                                             <Text style={[styles.TextTabs2, { color: COLORS.black }]}>
//                                                 الخطوات
//                                             </Text>
//                                             <View style={styles.ViewBoth2}>
//                                                 <TouchableOpacity style={styles.the_Two_button2}>
//                                                     <Text style={[styles.TextTabs2, { marginRight: MARGIN.xxsMargin }]}>
//                                                         فيديو
//                                                     </Text>
//                                                     <Octicons name='video' size={ICONSSIZE.mIcon} color={COLORS.white} />


//                                                 </TouchableOpacity>
//                                                 <TouchableOpacity style={styles.the_Two_button2}>
//                                                     <Text style={styles.TextTabs2}>
//                                                         الطريقة
//                                                     </Text>


//                                                 </TouchableOpacity>
//                                             </View>
//                                         </View>
//                                     </View>
//                                 ) : (null)

//                             ))}
//                         </View>
//                     </ScrollView>
//                 </View>
//             </>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     Header: {
//         backgroundColor: COLORS.pramary,
//         // marginTop: MARGIN.xxsMargin,
//         alignItems: "center",
//         height: height
//     },
//     nameStackView: {
//         // backgroundColor: COLORS.white,
//         width: width / 1.05,
//         height: height / 15,
//         alignItems: "flex-start",
//         justifyContent: "flex-end",
//         marginVertical: MARGIN.xsMargin
//     },
//     textnameStackView: {
//         fontSize: FONTS.h3,
//         color: COLORS.orange,
//         fontWeight: "bold"
//     },
//     SearchView: {
//         // backgroundColor: COLORS.orange50,
//         width: width / 1.05,
//         height: height / 9,
//         alignItems: "center",
//         justifyContent: "space-between",
//         marginVertical: MARGIN.xsMargin
//     },
//     SearchTextheader: {
//         fontSize: FONTS.h3,
//         color: COLORS.orange,
//         alignSelf: "flex-start"
//     },
//     SearchTextView: {
//         backgroundColor: COLORS.white,
//         width: width / 1.1,
//         height: height / 17,
//         alignItems: "center",
//         justifyContent: "center",
//         borderRadius: RADIUS.lgRadius,
//         borderWidth: 2,
//         borderColor: COLORS.orange,
//         paddingHorizontal: PADDING.xsPadding,
//         fontSize: FONTS.h5,
//         flexDirection: "row"

//     },
//     SearchTextInput: {
//         // backgroundColor: COLORS.white,
//         width: width / 1.4,
//         height: height / 17,
//         alignItems: "flex-end",
//         justifyContent: "flex-end",
//         // borderRadius: RADIUS.lgRadius,
//         // borderWidth: 2,
//         // borderColor: COLORS.orange,
//         paddingHorizontal: PADDING.smPadding,
//         fontSize: FONTS.h5
//         // marginVertical: MARGIN.xsMargin

//     },
//     Dessercommon: {
//         height: height / 2.2,
//         width: width / 1.05,
//         // backgroundColor: COLORS.red
//     },
//     DessercommonHeader: {
//         flexDirection: "row",
//         justifyContent: "space-between"
//     },
//     TextCommon: {
//         fontSize: FONTS.h3,
//         color: COLORS.orange,
//         alignSelf: "flex-start"
//     },
//     Image: {
//         width: 30,
//         height: 30
//     },
//     Dessercommon2: {
//         width: width / 2,
//         // backgroundColor:COLORS.background,
//         alignItems: "flex-end"
//     },
//     DessertCommon: {
//         height: height / 2.5,
//         width: width / 1.05,
//         // backgroundColor: COLORS.red
//     },
//     ButtonTabs: {
//         width: width / 1.7,
//         height: height / 2.5,
//         backgroundColor: COLORS.orange50,
//         borderRadius: RADIUS.x5lRadius,
//         justifyContent: "space-between",
//         alignItems: "center",
//         marginHorizontal: MARGIN.xsMargin,
//     },
//     ImageTabs: {
//         width: width / 1.7,
//         height: height / 5,
//         borderTopRightRadius: RADIUS.x5lRadius,
//         borderTopLeftRadius: RADIUS.x5lRadius,
//     },
//     TextTabs: {
//         fontSize: FONTS.h3,
//         color: COLORS.white,
//     },
//     TabsofTabs: {
//         width: width / 1.7,
//         height: height / 7,
//         backgroundColor: COLORS.gray,
//         // flexDirection: "row",
//         justifyContent: "space-around",
//         alignItems: "center",
//         borderRadius: RADIUS.x5lRadius,
//     },
//     the_Two_button: {
//         backgroundColor: COLORS.orange,
//         borderRadius: RADIUS.xxlRadius,
//         flexDirection: "row",
//         width: 90,
//         height: 50,
//         alignItems: 'center',
//         justifyContent: "center",
//     },
//     ViewBoth: {
//         flexDirection: "row",
//         justifyContent: "space-around",
//         alignItems: "center",
//         width: width / 2,
//     },
//     Dessert: {
//         width: width / 1.05,
//         // height: height,
//         // backgroundColor: COLORS.gray,
//         alignItems: "center"
//     },
//     DessercommonHeader1: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         width: width / 1.05

//     },
//     DessertMain: {
//         margin: MARGIN.smMargin,
//         width: width / 1.3,
//         height: height / 1.9,
//         backgroundColor: COLORS.grayFont,
//         justifyContent: "flex-start",
//         alignItems: "center",
//         borderRadius: RADIUS.lgRadius,
//     },
//     ImageTabs2: {
//         width: width / 1.3,
//         height: height / 2.8,
//         borderTopRightRadius: RADIUS.lgRadius,
//         borderTopLeftRadius: RADIUS.lgRadius,
//     },
//     TextTabs2: {
//         fontSize: FONTS.h3,
//         color: COLORS.white,
//     },
//     TabsofTabs2: {
//         width: width / 1.7,
//         height: height / 8,
//         backgroundColor: COLORS.gray,
//         // flexDirection: "row",
//         justifyContent: "space-around",
//         alignItems: "center",
//         borderRadius: RADIUS.x5lRadius,
//     },
//     the_Two_button2: {
//         backgroundColor: COLORS.orange,
//         borderRadius: RADIUS.xxlRadius,
//         flexDirection: "row",
//         width: 90,
//         height: 50,
//         alignItems: 'center',
//         justifyContent: "center",
//     },
//     ViewBoth2: {
//         flexDirection: "row",
//         justifyContent: "space-around",
//         alignItems: "center",
//         width: width / 2,
//     },

// });
import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    TextInput,
    ScrollView,
    Image
} from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('window');


export default function AllDessert() {
    const [Food, setFood] = useState(
        [

            {
                Image: require("../img/dessert3.jpg"),
                name: "ice cream",
                view: true,
                time: "30 min"
            },
            {
                Image: require("../img/dessert4.jpg"),
                name: "cemo",
                view: true,
                time: "30 min"
            },
            {
                Image: require("../img/dessert2.jpg"),
                name: "moh",
                view: true,
                time: "30 min"
            },
            {
                Image: require("../img/dessert.jpg"),
                name: "ايس كريم",
                view: true,
                time: "30 min"
            },
            {
                Image: require("../img/dessert5.jpg"),
                name: "ايس كريم",
                view: true,
                time: "30 min"
            },
            {
                Image: require("../img/dessert3.jpg"),
                name: "ايس كريم",
                view: true,
                time: "30 min"
            },
            {
                Image: require("../img/dessert3.jpg"),
                name: "ايس كريم",
                view: true,
                time: "30 min"
            },
            {
                Image: require("../img/dessert3.jpg"),
                name: "Cop",
                view: true,
                time: "30 min"
            },

        ])

    const [Category, SetCategory] = useState(
        [
            {
                name: "Burger",
                img: require("../img/burgerr.png"),
                choose: false,
                contant: "burgeeeerrrr",
                view: false,
            }
            ,
            {
                name: "Pizza",
                img: require("../img/pizzaa.png"),
                choose: false,
                contant: "pizzzzzaaaa",
                view: false,
            }
            ,
            {
                name: "Burger",
                img: require("../img/burgerr.png"),
                choose: false,
                contant: "burgeeeerrrr"
            }
            ,
            {
                name: "Pizza",
                img: require("../img/pizzaa.png"),
                choose: false,
                contant: "pizzzzzaaaa"
            }
            ,
            {
                name: "Burger",
                img: require("../img/burgerr.png"),
                choose: false,
                contant: "burgeeeerrrr"
            }
            ,
            {
                name: "Pizza",
                img: require("../img/pizzaa.png"),
                choose: false,
                contant: "pizzzzzaaaa"
            }
        ]
    )

    const [IconSearch, setIconSearch] = useState(true)
    const [search, setsearch] = useState("")

    // const [showView, SetshowView] = useState(true)
    // const [Index, SetIndex] = useState(null)


    const makesearch = (searchText) => {
        let list = Food
        for (let i = 0; i < list.length; i++) {
            if (((list[i].name).toUpperCase()).includes(searchText.toUpperCase())) {
                list[i].view = true
            }
            else {
                list[i].view = false
            }
        }
        setFood(list)
    }

    const return_category = (text) => {
        return (text)
    }

    const chooseCategory = (index) => {
        let cate = Category
        if (cate[index].choose == false) {
            cate[index].choose = true
            SetshowView(false)
            SetIndex(index)
            return_category(cate[index].contant)
        } else if (cate[index].choose == true) {

            cate[index].choose = false
            SetIndex(null)
            SetshowView(true)
            return_category(null)
        }

        SetCategory(cate)
    }

    // const show_Category_item = (index) => {
    //   let cate = Category

    // }
    const navigation = useNavigation();

    return (
        <>
            <View style={{ backgroundColor: COLORS.pramary, flex: 1 }}>
                <ScrollView>
                    <View style={styles.Header}>
                        <View>
                            <View></View>
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
                                        placeholder={'البحث عن الأكلات...'}
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

                        <View style={styles.category_View}>
                            <ScrollView horizontal>
                                {Category.map((Category, index) =>
                                    <TouchableOpacity style={styles.category_Box}
                                        onPress={() =>
                                            chooseCategory(index)

                                        }
                                    >
                                        <Image source={Category.img} style={{ width: width / 5, height: height / 12, resizeMode: "contain" }} />
                                    </TouchableOpacity>
                                )}
                            </ScrollView>
                        </View>
                        <View style={styles.food_View}>
                          
                            <View style={styles.Headerstarred}>
                                <Text style={styles.textHeaderstarred}>
                                    الوصفات
                                </Text>
                                <Text style={styles.textHeaderstarred2}>
                                    رؤية الكل
                                </Text>
                            </View>

                            {Food.map((item, index) =>
                                item.view ? (

                                <View style={styles.meal_View}>
                                    <Image source={item.Image} style={styles.meal_image}
                                        resizeMode={"center"} />
                                    <View style={{ width: width / 2.4, alignItems: "flex-start" }}>
                                        <Text style={styles.meal_name}>
                                            {item.name}
                                        </Text>
                                    </View>
                                    <View style={styles.view_time}>
                                        <Text style={styles.text_time}>
                                            {item.time}
                                        </Text>
                                        <Ionicons name='md-time' style={{ alignSelf: "center" }} size={ICONSSIZE.smIcon} color={COLORS.ButtonWhite} />
                                    </View>
                                    <View style={styles.option_view}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                navigation.navigate("Photo_page", {
                                                    name: item
                                                })
                                            }
                                            }
                                            style={styles.button_option}>
                                            <Text style={styles.button_text}>
                                                الطريقة
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.button_option}>
                                            <Text style={styles.button_text}>
                                                الفيديو
                                            </Text>
                                        </TouchableOpacity>

                                    </View>


                                </View>
                                ) : (null)


                            )}


                        </View>
                    </View>
                    <View style={{ height: 55 }}></View>
                </ScrollView>
            </View>


        </>
    )

}


const styles = StyleSheet.create({
    Header: {
        backgroundColor: COLORS.pramary,
        alignItems: "center",
        flex: 1,

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
    category_View: {
        height: height / 10,
        width: width / 1.07,
        flexDirection: "row",
    },
    category_Box: {
        width: width / 4.5,
        height: height / 11,
        padding: PADDING.xsPadding,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.pramary50,
        marginLeft: 5,
        borderRadius: RADIUS.xsRadius
    }
    ,
    food_View: {
        width: width,
        backgroundColor: COLORS.pramary,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: PADDING.xsPadding,
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: MARGIN.xxsMargin
    }
    ,
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
    meal_View: {
        width: width / 2.1,
        alignItems: "center",
        marginVertical: MARGIN.xxsMargin,
        padding: PADDING.lgPadding,
        borderRadius: RADIUS.xxsRadius,
        backgroundColor: COLORS.pramary50
    },
    meal_image: {
        width: width / 2.4,
        height: height / 5,
        borderRadius: RADIUS.xxsRadius,
    },
    meal_name: {
        fontSize: FONTS.h4,
        color: COLORS.white,
        fontFamily: "Generator Black",
        textAlign: "left"
    }
    ,
    view_time: {
        width: width / 2.4,
        alignItems: "center",
        flexDirection: "row",
    },
    text_time: {
        fontSize: FONTS.h4,
        color: COLORS.white,
        fontFamily: "Generator Black",
        alignSelf: "center",
        marginHorizontal: 2
    }
    ,
    option_view: {
        width: width / 2.4,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",

    },
    button_option: {
        width: width / 6,
        backgroundColor: COLORS.orange,
        borderRadius: RADIUS.smRadius,
        alignItems: "center",
        justifyContent: "center",
    },
    button_text: {
        fontSize: FONTS.h5,
        color: COLORS.white,
        fontFamily: "Generator Black",
        alignSelf: "center",
        marginHorizontal: 2
    }
});
