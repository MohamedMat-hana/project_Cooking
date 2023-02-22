import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from 'react-native';
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');


export default class Favorite extends React.Component {
    constructor(props) {
        super(props); {
            this.ref = React.createRef(null)

            this.state = {
                favorite_meal: [
                    {
                        Image: require("../img/pizza.png"),
                        name: "باستا وايت صوص",
                        components: "مكرونه , دقيق ,حليب , ملح , فلفل اسود مكرونه , دقيق ,حليب , ملح , فلفل اسود",
                        view: true,
                        like: true
                    },
                    {
                        Image: require("../img/pizza.png"),
                        name: "pizza ranch",
                        components: "مكرونه , دقيق ,حليب , ملح , فلفل اسود مكرونه , دقيق ,حليب , ملح , فلفل اسود",

                        view: true,
                        like: true

                    },
                    {
                        Image: require("../img/food.jpg"),
                        name: "باستا ريد صوص",
                        components: "مكرونه , دقيق ,حليب , ملح , فلفل اسود مكرونه , دقيق ,حليب , ملح , فلفل اسود",
                        view: true,
                        like: true

                    },
                    {
                        Image: require("../img/food2.jpg"),
                        name: "ايس كريم",
                        components: "مكرونه , دقيق ,حليب , ملح , فلفل اسود مكرونه , دقيق ,حليب , ملح , فلفل اسود",
                        view: true,
                        like: true

                    },
                    {
                        Image: require("../img/food3.jpg"),
                        name: "ايس كريم",
                        components: "مكرونه , دقيق ,حليب , ملح , فلفل اسود مكرونه , دقيق ,حليب , ملح , فلفل اسود",
                        view: true,
                        like: true

                    },
                    {
                        Image: require("../img/food2.jpg"),
                        name: "ايس كريم",
                        components: "مكرونه , دقيق ,حليب , ملح , فلفل اسود مكرونه , دقيق ,حليب , ملح , فلفل اسود",
                        view: true,
                        like: true

                    },
                    {
                        Image: require("../img/food3.jpg"),
                        name: "ايس كريم",
                        components: "مكرونه , دقيق ,حليب , ملح , فلفل اسود مكرونه , دقيق ,حليب , ملح , فلفل اسود",
                        view: true,
                        like: true

                    },
                ],
                animation_display: false,
                SearchKey: "",
            }
        }
    }


    search(text) {
        let list = this.state.favorite_meal
        let count = 0
        for (let i = 0; i < list.length; i++) {
            if (((list[i].name).toUpperCase()).includes(text.toUpperCase())) {
                list[i].view = true

            }
            else {
                list[i].view = false
                count++
            }
        }
        if (count == list.length) {
            this.state.animation_display = true
        }

        // 
        if (count != list.length) {
            this.state.animation_display = false

        }
        this.setState({
            favorite_meal: list,

        })
        count = 0
    }

    UnLike(index) {
        let list = this.state.favorite_meal

        list[index].like = false
        list.splice(index, 1)
        this.setState({
            favorite_meal: list
        })
    }

    render() {
        return (
            <>

                <View style={styles.main}>
                    <View style={styles.headerbar}>
                        <Text style={styles.textheader}>
                            المفضلات
                        </Text>
                    </View>

                    <View style={styles.SearchView}>
                        <TextInput
                            underlineStyle={{ width: 0 }}
                            style={styles.searchInput}
                            placeholder={"البحث في المفضلات...                                          "}
                            placeholderTextColor={COLORS.grayFont}
                            value={this.state.SearchKey}
                            onChangeText={(value) => {
                                this.search(value)
                                this.setState({
                                    SearchKey: value
                                })
                            }}


                        />
                        <Ionicons name='search' size={ICONSSIZE.lIcon} color={COLORS.pramary} />



                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {this.state.animation_display ?
                            (
                                <>
                                    <View style={{ alignItems: "center", justifyContent: "center", alignSelf: "center", width: width, height: height / 1.5 }}>
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
                            )
                            :
                            (
                                <>
                                    {this.state.favorite_meal.map((item, index) =>

                                        item.view ? (
                                            <TouchableOpacity 
                                            onPress={() => {
                                                this.props.navigation.navigate("Photo_page", {
                                                    name: item
                                                })
                                            }}
                                            style={styles.meal_view}>
                                                <Image
                                                    source={item.Image}
                                                    style={styles.meal_IMAGE}
                                                />
                                                <View style={{ width: width / 1.8 }}>
                                                    <View style={{ width: width / 2 }}>
                                                        <Text

                                                            numberOfLines={1}
                                                            style={[styles.mealNAME, { color: COLORS.white, }]}>
                                                            {item.name}
                                                        </Text>
                                                        <Text style={[styles.mealNAME, { fontSize: 15 }]}>
                                                            المكونات
                                                        </Text>

                                                        <Text
                                                            numberOfLines={1}
                                                            style={[styles.mealNAME, { fontSize: 15 }]}>
                                                            {item.components}
                                                        </Text>
                                                    </View>
                                                    <TouchableOpacity style={{ margin: MARGIN.xxsMargin }}
                                                        onPress={() =>
                                                            this.UnLike(index)
                                                        }
                                                    >
                                                        <Ionicons name={'heart-dislike'} size={25} color={COLORS.orange} />

                                                    </TouchableOpacity>
                                                </View>

                                            </TouchableOpacity>
                                        )
                                            :
                                            null


                                    )}
                                </>



                            )
                        }

                        <View style={{ height: 60 }}></View>

                    </ScrollView>

                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: COLORS.pramary,
        alignItems: "center",
        // height: height *1,
        flex: 1

    }
    ,
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

    ,
    SearchView: {
        width: width / 1.1,
        backgroundColor: COLORS.white,
        height: height / 15,
        margin: MARGIN.xxsMargin,
        borderRadius: RADIUS.xxsRadius,
        // borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: MARGIN.xsMargin,
        padding: PADDING.xsPadding

    }
    ,
    searchInput: {
        width: width / 1.3,
        height: height / 16,
        alignItems: "flex-end",
        justifyContent: "flex-start",
        fontFamily: "Generator Black",
        textAlign: "right",
        backgroundColor: COLORS.white,
        paddingHorizontal: PADDING.smPadding,
        fontSize: FONTS.h4,


    }
    ,
    searchIcon: {
        width: width * 0.05,
        height: height * 0.03,
        marginHorizontal: MARGIN.xsMargin
    }
    ,
    meal_view: {
        width: width / 1.1,
        height: height / 6,
        backgroundColor: COLORS.pramary50,
        marginVertical: MARGIN.xsMargin,
        padding: PADDING.smPadding,
        borderRadius: RADIUS.xxsRadius,
        elevation: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
    ,
    meal_IMAGE: {
        width: width / 3.7,
        height: height / 7.5,
        borderRadius: RADIUS.xxsRadius,

    }
    ,
    mealNAME: {
        fontSize: FONTS.h2,
        color: COLORS.gray,
        fontFamily: "Generator Black",
        maxWidth: width / 2,
        textAlign: "left"
    }
    ,

});
