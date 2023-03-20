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
import LottieView from 'lottie-react-native';


export default function CommonDessert() {
    const [Common, setCommon] = useState(
        [
            {
                Image: require("../img/vvthd.jpeg"),
                name: "ايس كوفي",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components: "قهوة\nحليب\nثلج\nسكر حسب الرغبة",
                view: true,
                Step: "نسوي القهوة ونحطو في الثلاجة\nنحط الحليب ونحطو في الثلاجة\nنطحن الثلج",
                time: "20 min",
                video: "https://www.youtube.com/watch?v=mPD16YKE3Q4"
            },
            {
                Image: require("../img/ramadan.jpeg"),
                name: "تمر هندي",
                Elta7der: '20 min',
                Eltahy: "1 day",
                Elsouba: "60",
                components: "½ باكيت تمر هندي\n3 اكواب سكر\nملون طعام\nماء ورد",
                view: true,
                Step: "بفرط التمر بماي وبخليه يغلي على النار\nبخلية ليلة كاملة بلبراد.الي مستعجلة تخليه ساعتين\nبحضر الماء مع السكر..بعد مايذوب السكر بحط ملون الطعام\nبحط ماء ورد وبصفي التمر في مصفاه\nبصفيه واضيفه على الماء والسكر الي حضرتن",
                time: "24 h 20 min",
                video: "https://www.youtube.com/watch?v=OrLjSOBGtto"
            },
            {
                Image: require("../img/camar.jpeg"),
                name: "قمر الدين",
                Elta7der: '5 min',
                Eltahy: "10",
                Elsouba: "20",
                components: "كيس واحد من القمر الدين\n4 ملاعق سكر",
                view: true,
                Step: "ننقع القمرالدين في زبدية كبيرة بماء ساخن مع اضافة السكر.\nبعد ساعتين بذراع الخلاط نخلط المحتوى\nبعد ماصار الخليط مخلوط بالكامل\nنضعه في جك خاص بالعصير ونضعه بالثلاجة حتى يبرد ويصبح جاهز للشرب",
                time: "15 min",
                video: "https://www.youtube.com/watch?v=fcyTQmjSMWE"
            },
            {
                Image: require("../img/5ha.jpeg"),
                name: "الخروب",
                Elta7der: '5 min',
                Eltahy: "10",
                Elsouba: "20",
                components: "2 كوب خروب مجروش\n1 كوب سكر\nلتر ونصف ماء\n نقطة من ماء الورد",
                view: true,
                Step: "يوضع الخروب والسكر على النار مع التقليب حتى يتكرمل ويصبح لونه ذهبي\nيوضع الماء على الخروب ويترك على النار لمده ربع ساعة حتى ينضح وبعدها يترد ليبرد\nويصفى في دورق (قارورة) ويوضع عليه نقطة ماء الود ويبرد في الثلاجه",
                time: "15 min",
                video: "https://www.youtube.com/watch?v=RMTw5TsrKP8"
            },
            {
                Image: require("../img/5f0865f6dccdc.jpg"),
                name: "الكابتشينو",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components: "¼ كوب (37.5 جم) قهوة سريعة الذوبان\n. ¼ كوب (50 جم) سكر\n. 3 ملاعق كبيرة (45 مل) ماء.\n كوب (250 مل) حليب خالي الدسم\n. كاكاو وقرفة للزينة",
                view: true,
                Step: "ضعي السكر والقهوة والماء في وعاء كبير، واخفقيها بالمضرب اليدوي لمدة ثلاث إلى خمس دقائق، حتى يتكون لديكِ خليط ناعم كالكريمة\n. ضعي الحليب على نار متوسطة، واخفقيه باستمرار حتى يغلي، وتتكون لديكِ رغوة كثيفة. وزعي الكابتشينو على كوبين، ثم وزعي الحليب بالرغوة الخاصة به، وقلبيه برفق حتى تمتزج المكونات، ثم قدميه. زيني الكابتشينو ببودرة الكاكاو والقرفة",
                time: "20 min",
                video: "https://www.youtube.com/watch?v=hiUSTyAeTSI"
            },
            {
                Image: require("../img/aasth.jpeg"),
                name: "قهوة اسبريسو",
                Elta7der: '5 min',
                Eltahy: "10 min",
                Elsouba: "25",
                components: "4 ملاعق كبيرة (40 جم) قهوة مطحونة\n 2 كوب (500 مل) ماء مغلي\n وعاء به مكبس للقهوة (وعاء كبس القهوة)",
                view: true,
                Step: "ضعي القهوة في الوعاء، ثم صبي الماء المغلي، واتركيه جانبًا لمدة أربع دقائق.\n اضغطي على المكبس لأسفل حتى يمنع القهوة من التحرك، ويثبتها في الأسفل. صبي الإسبريسو في أكواب التقديم، وقدميها ساخنة",
                time: "20 min",
                video: "https://www.youtube.com/watch?v=TpZ2uVtMoVU"
            },
            {
                Image: require("../img/coklemone.jpg"),
                name: "عصير ليمون",
                view: true,
                time: "15 min",
                Elta7der: '5 min',
                Eltahy: "10 min",
                Elsouba: "10",
                components: "2 ليمون كبير\nماء\n2 معلقه سكر\nحفنه نعناع\nثلج\nماء بارد",
                Step: "نقوم بعصر كمية من نعصر الليمون ثم نصب عصيره ف الخلاط\nنضع مقدار النعناع والسكر والماء البارد ونخلط ف الخلاط ثم نصب ف الكاس مع الثلج",
                video: "https://www.youtube.com/watch?v=g0KnsicH7kU"

            },
            {
                Image: require("../img/sahlab.jpeg"),
                name: "سحلب",
                Elta7der: '5 min',
                Eltahy: "10 min",
                Elsouba: "70",
                components: "1/2 لتر حليب\n5 ملاعق بودرة سحلب\nملعقة سكر",
                view: true,
                Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و بريق يوضع فيه الحليب وهو بارد ثم يضاف السحلب ويحرك ثم يوضع السكر\nنولع عليه النار هادئة مع التحريك لمدة 10 دقائق حتى يثقل قليلاً\nيوضع في كاس ويزين بالقرفه والفستق وبالعافيه",
                time: "15 min",
                categortType: 1,
                video: "https://www.youtube.com/watch?v=fBSsdfLotpE"


            },
            {
                Image: require("../img/88.jpeg"),
                name: "Hot chocolate مشروب الشوكولاتة",
                Elta7der: '5 min',
                Eltahy: "20 min",
                Elsouba: "50",
                components: "3/4 كوب شوكولاتة بودرة\n4 اكواب حليب سائل\n1 كوب سكر\nملعقة صغيرة نشاء ذرة",
                view: true,
                Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و توضع جميع المكونات في قدر على نار هادئة مع التقليب المستمر لكي لاتحترق الى ان تبدأ بالغليان",
                time: "25 min",
                categortType: 1,
                video: "https://www.youtube.com/watch?v=38xZdDygW04"


            }, {
                Image: require("../img/555.jpeg"),
                name: "سموزي الفرااوله",
                Elta7der: '5 min',
                Eltahy: "20 min",
                Elsouba: "30",
                components: "كيس فراوله مجمدة\n ظرف كريم شانتيه\n سكر حسب الرغبة\n فانيليا\nحليب",
                view: true,
                Step: "نخلطهم في الخلاط ونستمتع بأحلى فراوله واذا حابنو يكون تقيل نضيف مكعبات ثلج ونخلطه",
                time: "15 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=r3Ycl293l_U"
            }, {
                Image: require("../img/dddh.jpeg"),
                name: "موهيتو السڤن اب",
                Elta7der: '5 min',
                Eltahy: "5 min",
                Elsouba: "10",
                components: "ملعقة صغيرة زنجبيل علبة سڤن اب\nتوت مشكل حسب الرغبة\n2 نعناع طازج\nمكعبات ثلج\nنكهة حسب الرغبة\nفراولة مقطعة",
                view: true,
                Step: "بالكاس ثلج و نكهة\nنضيف النعناع و التوت\nنضع السڤن اب و نقدمه بااارد",
                time: "10 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=2t1IXAe4li4"
            },
            {
                Image: require("../img/6545th.jpeg"),
                name: "مشروب الكركديه",
                Elta7der: '5 min',
                Eltahy: "10 min",
                Elsouba: "60",
                components: "كوب ونصف من زهورات الكركديه\nكوب سكر\nملعقه ماء الورد\nليتر ماء ساخن للنقع\nعند التقديم\nمكعبات ثلج وبعض الزهورات المغسوله\nمكعبات ثلج",
                view: true,
                Step: "تغسل زهورات الكركديه لازالة الاتربه ونحضر باقي المكونات ونضع زهورات الكركديه المغسوله بوعاء ونضع عليها السكر وماء الورد\nنصب عليها لتر ماء مغلي وننقعها ساعتين ونضعها بالثلاج احط منه مكعبات ابرزها في الفريزر عشان تكون مكعبات ثلج استخدمها اثناء التقديم واطلع الكركديه من الثلاجه واصفيه واضع مكعبات الثلج في كاس التقديم واسكب عليها مشروب الكركديه",
                time: "15 min",
                categortType: 1,
                video: "https://www.youtube.com/watch?v=GnzaI9oXVLQ"
            },
            {
                Image: require("../img/dsdth.jpeg"),
                name: "عصير موز بالفرولة",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "20",
                components: "6 حبات فراولة\n2 حبة موز\nكوب حليب\nثلج مجروش\n2 م ك ايسكريم ڤانيلا\nعسل او سكر حسب الرغبة",
                view: true,
                Step: "اخلط جميع المكونات في الخلاط واقدمه باكواب وبالعافية",
                time: "20 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=xOkfvKtvPdY"
            },
            {
                Image: require("../img/5f086508b8d56.jpg"),
                name: "القهوة التركي بالشوكولاتة",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "40",
                components: "⅔ كوب (166.6 مل) ماء\n. ½ 1 ملعقة كبيرة (15 جم) قهوة تركي\n. ملعقة صغيرة (5 جم) كاكاو\n. ملعقة صغيرة (5 جم) شوكولاتة مبشورة\n. سكر حسب الرغبة",
                view: true,
                Step: "ضعي الماء والقهوة والكاكاو والسكر والشوكولاتة في كنكة (ركوة)، وقلبي المكونات حتى تذوب\n. ضعي القهوة على نار هادئة، حتى تقترب من الغليان\n. ارفعي القهوة عن النار حتى تهدأ قليلًا، ثم أعيديها مرة أخرى حتى تظهر فقاعات على أطراف الكنكة، ويصبح لها وجه\n. ارفعي القهوة عن النار، وصبيها في الفناجين، وقدميها ساخنة",
                time: "20 min",
                categortType: 1,
                video: "https://www.youtube.com/watch?v=zftgNcNZpgA"
            },
            {
                Image: require("../img/tdvh.jpeg"),
                name: "عصير المانجا والفراولة",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components: "كوبين فراولة مجمدة مقطعة\nكوب مانجا مجمدة\n1/3 كوب عصير البرتقال",
                view: true,
                Step: "تُخلط جميع المكونات في الخلاط ثم تُقدم في كأس وبالعافية مقدما ",
                time: "20 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=9ePJjmJdVNg"
            },
            {
                Image: require("../img/bdcxvth.jpeg"),
                name: "عصير مانجا وجوافه",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components: "3 مانجو زاكيه\n3 جوافه\n١ افوكادو مستويه\n2 كاس حليب\n1 كاس ماء\n1 ظريف كريم شانتيه(دريم ويب)\nسكر حسب الرغبه",
                view: true,
                Step: "نخلط جميع المكونات بالخلاط ونتحكم بسمك العصير اذا تحبوا اخف زيدوا ماء ونصفيه جيدا من بذور الجوافه\nيوضع بالثلاجه لوقت التقديم. وبالعااافيه",
                time: "20 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=KiRJHtwGez8"
            },
        ]
    )
    const [IconSearch, setIconSearch] = useState(true)
    const [search, setsearch] = useState("")

    const ref = React.useRef(null)
    const [animationDisplay, setanimationDisplay] = useState(false)

    const makesearch = (searchText) => {
        let list = Common
        let count = 0

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
            setanimationDisplay(true)
        }

        // 
        if (count != list.length) {
            setanimationDisplay(false)

        }
        setCommon(list)
        count = 0
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
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate("All", {
                                            name: Common
                                        })
                                    }
                                    }>
                                    <Text style={styles.textHeaderstarred2}>
                                        رؤية الكل
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", width: width, }}>
                                <ScrollView horizontal={true}>
                                    {animationDisplay ? (
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
                                            {Common.map((item, index) => (
                                                item.view ? (

                                                    <View style={styles.Box}>
                                                        <Image source={item.Image} style={styles.ImageTabs2}
                                                            resizeMode={"cover"} />
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
                                                            <TouchableOpacity onPress={() => {
                                                                navigation.navigate("WbeView", {
                                                                    name: item
                                                                })
                                                            }
                                                            } style={styles.OptionButtonBox}>
                                                                <Text style={styles.OptionTimeBox}>
                                                                    الفيديو
                                                                </Text>
                                                            </TouchableOpacity>

                                                        </View>


                                                    </View>
                                                ) : (null)

                                            ))}
                                        </>
                                    )}

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
                                        <Image source={item.Image} resizeMode={"cover"} style={styles.Imagestarred} />
                                    </View>
                                    <View style={styles.BoxTextStarred}>
                                        <View style={{ width: width / 2, alignItems: "center" }}>
                                            <Text style={[styles.textHeaderstarred, { fontSize: FONTS.h2 }]}>
                                                {item.name}
                                            </Text>
                                        </View>
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
                                            <TouchableOpacity onPress={() => {
                                                navigation.navigate("WbeView", {
                                                    name: item
                                                })
                                            }
                                            } style={styles.OptionButtonBox}>
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
        justifyContent: "space-around",
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
        // height: height / 6,
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
