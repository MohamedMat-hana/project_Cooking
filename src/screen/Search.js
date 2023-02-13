import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');


export default class Search extends React.Component {
    constructor(props) {
        super(props); {
            this.state = {
                All_meal: [
                    {
                        Image: require("../img/pizza.png"),
                        name: "باستا وايت صوص",
                        components: "مكرونه , دقيق ,حليب , ملح , فلفل اسود مكرونه , دقيق ,حليب , ملح , فلفل اسود",
                        view: true
                    },
                    {
                        Image: require("../img/pizza.png"),
                        name: "pizza ranch",
                        components: "مكرونه , دقيق ,حليب , ملح , فلفل اسود مكرونه , دقيق ,حليب , ملح , فلفل اسود",

                        view: true
                    },
                    {
                        Image: require("../img/food.jpg"),
                        name: "باستا ريد صوص",
                        components: "مكرونه , دقيق ,حليب , ملح , فلفل اسود مكرونه , دقيق ,حليب , ملح , فلفل اسود",
                        view: true
                    },
                    {
                        Image: require("../img/food2.jpg"),
                        name: "ايس كريم",
                        components: "مكرونه , دقيق ,حليب , ملح , فلفل اسود مكرونه , دقيق ,حليب , ملح , فلفل اسود",
                        view: true
                    },
                    {
                        Image: require("../img/food3.jpg"),
                        name: "ايس كريم",
                        components: "مكرونه , دقيق ,حليب , ملح , فلفل اسود مكرونه , دقيق ,حليب , ملح , فلفل اسود",
                        view: true
                    },
                    {
                        Image: require("../img/food2.jpg"),
                        name: "ايس كريم",
                        components: "مكرونه , دقيق ,حليب , ملح , فلفل اسود مكرونه , دقيق ,حليب , ملح , فلفل اسود",
                        view: true
                    },
                    {
                        Image: require("../img/food3.jpg"),
                        name: "ايس كريم",
                        components: "كريمه وشيكولاته",
                        view: true
                    },
                ],
                SearchKey: "",
                animation_display: false,

            }
        }
    }


    search(text) {
        let list = this.state.All_meal
        let count=0
        for (let i = 0; i < list.length; i++) {
            if (((list[i].components).toUpperCase()).includes(text.toUpperCase())) {
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

    
        if (count != list.length) {
            this.state.animation_display = false

        }



        this.setState({ All_meal: list })
        count=0
    }

    render() {
        return (
            <>
                <View style={styles.main}>

                    <View style={styles.SearchView}>
                        <TextInput
                            underlineStyle={{ width: 0 }}
                            style={styles.searchInput}
                            
                            placeholder={"البحث عن الاكلات بالمكونات...                                          "}
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


                    {this.state.animation_display?(
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
                            ):
                            (
                                <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.state.All_meal}
                                renderItem={({ item, index }) =>
                                    item.view ? (
                                        <TouchableOpacity style={styles.mealView}>
                                            <Image source={item.Image}
                                                style={styles.mealIMAGE}
                                            />
                                            <View>
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
        
                                        </TouchableOpacity>
                                    )
                                        :
                                        null
        
                                }
        
        
        
                            />
                            )
                            }
                 
                    <View style={{ height: 55 }}></View>

                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: COLORS.pramary,
        alignItems: "center",
        height: height
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
    mealView: {
        width: width / 1.1,
        height: height / 8,
        backgroundColor: COLORS.pramary50,
        marginVertical: MARGIN.xsMargin,
        padding: PADDING.smPadding,
        borderRadius: RADIUS.xxsRadius,
        elevation: 5,
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "space-between"
    },
    mealIMAGE: {
        width: width / 3.5,
        height: height / 10,
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
});
