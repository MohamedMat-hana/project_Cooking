import React from 'react';
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
// import { useNavigation, NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('window');
import LottieView from 'lottie-react-native';

export default class All extends React.Component {
    constructor(props) {
        super(props); {
            ref = React.createRef(null)
            this.state = {
                Food: [],
                search: "",
                animationDisplay: false
            }
        }
    }


    componentDidMount() {
        let data = this.props.route.params.name
        // alert(JSON.stringify(data))
        this.setState({ Food: data })
    }

    makesearch(searchText) {
        let list = this.state.Food
        let count = 0
        let ani = this.state.animationDisplay
        for (let i = 0; i < list.length; i++) {
            if (((list[i].name).toUpperCase()).includes(searchText.toUpperCase())) {
                list[i].view = true
            }
            else {
                list[i].view = false
                count++
            }
        }
        if (count == list.length) {
            ani = true
        }

        // 
        if (count != list.length) {
            ani = false

        }
        this.setState({
            Food: list,
            animationDisplay: ani
        })
        count = 0
    }


    render() {
        return (
            <>
                <View style={{ backgroundColor: COLORS.pramary, flex: 1 }}>
                    <ScrollView>
                        <View style={styles.Header}>
                            <View style={styles.Headerstarred}>
                                <Text style={styles.textHeaderstarred}>
                                    الوصفات
                                </Text>
                                <TouchableOpacity
                                    style={{
                                        height: height / 10,
                                        justifyContent: "center",
                                        marginRight: MARGIN.xxsMargin
                                    }}
                                    onPress={() => {
                                        this.props.navigation.goBack()
                                    }}>
                                    <View style={{
                                        backgroundColor: COLORS.pramary50,
                                        borderRadius: RADIUS.lgRadius,
                                        justifyContent: "center"
                                    }} >

                                        <Ionicons name='arrow-back-outline' size={ICONSSIZE.xxxlIcon} color={COLORS.orange} />
                                    </View>
                                </TouchableOpacity>

                            </View>
                            <View>
                                <View></View>

                                <Animatable.View style={styles.SearchTextView}
                                    animation='flipInY' >
                                    <TextInput style={styles.SearchTextInput}
                                        placeholder={'البحث عن الأكلات...'}
                                        placeholderTextColor={COLORS.grayFont}
                                        onChangeText={(value) => {
                                            this.makesearch(value)
                                            this.setState({ search: value })
                                            // setsearch(value)
                                        }}
                                        value={this.state.search} />
                                    <TouchableOpacity >

                                        <Ionicons name='search' size={ICONSSIZE.xlIcon} color={COLORS.pramary} />
                                    </TouchableOpacity>

                                </Animatable.View>
                            </View>

                            <View style={styles.food_View}>
                                {this.state.animationDisplay ? (
                                    <>
                                        <View style={{ alignItems: "center", justifyContent: "center", alignSelf: "center", width: width, height: height / 1.8 }}>
                                            <LottieView
                                                ref={this.ref}
                                                source={require("../lottie/search_empty.json")}
                                                loop={true}
                                                autoPlay={true}
                                                speed={1.5}
                                            // style={{ alignSelf: "center" }}
                                            />
                                        </View>
                                    </>
                                ) : (
                                    <>
                                        {this.state.Food.map((item, index) =>
                                            item.view ? (
                                                <View style={styles.meal_View}>
                                                    <Image source={item.Image} style={styles.meal_image}
                                                        resizeMode={"cover"} />
                                                        <View style={{ width: width / 2.4, height: height / 12, alignItems: "center", justifyContent: "center" }}>
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
                                                                this.props.navigation.navigate("Photo_page", {
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
                                    </>
                                )}



                            </View>
                        </View>
                        <View style={{ height: 55 }}></View>
                    </ScrollView>
                </View>


            </>
        )

    }
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
        // height: height / 15,
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
        // height: height / 17,
        alignItems: "center",
        alignSelf: "center",
        // backgroundColor:COLORS.black,
        color: COLORS.black,
        justifyContent: "flex-end",
        fontFamily: "Generator Black",
        // borderRadius: RADIUS.lgRadius,
        // borderWidth: 2,
        // borderColor: COLORS.orange,
        paddingHorizontal: PADDING.smPadding,
        fontSize: FONTS.h4
        // marginVertical: MARGIN.xsMargin

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
        marginTop: MARGIN.mdMargin,
        // backgroundColor:"#000",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center"
    },
    textHeaderstarred: {
        fontSize: FONTS.h1,
        color: COLORS.ButtonWhite,
        // fontWeight: "bold",
        justifyContent: "flex-end",

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
