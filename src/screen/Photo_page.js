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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const { width, height } = Dimensions.get('window');
import * as Animatable from 'react-native-animatable';
import { ThemeProvider } from 'react-native-paper';


export default class Photo_page extends React.Component {
    constructor(props) {
        super(props); {
            this.state = {
                IconFavorite: true,
                Mokawnat: [
                    {
                        num: 1,
                        Step: "نص كيلو دقيق"
                    },
                    {
                        num: 2,
                        Step: "نص كيلو بصل"
                    },
                    {
                        num: 3,
                        Step: "توم"
                    },
                    {
                        num: 4,
                        Step: " ملح"
                    },
                    {
                        num: 5,
                        Step: "فلفل"
                    },
                    {
                        num: 5,
                        Step: "خيار"
                    },


                ],

                Arr_Step: [
                    {
                        num: 1,
                        Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و معلقه اضف الماء و معلقه ملحاضف الماء و معلقه ملحاضف الماء و معلقه ملح ملح"
                    },
                    {
                        num: 2,
                        Step: "اضف الماء و معلقه ملح"
                    },
                    {
                        num: 3,
                        Step: "اضف الماء و معلقه ملح"
                    },
                    {
                        num: 4,
                        Step: "اضف الماء و معلقه ملح"
                    },
                    {
                        num: 5,
                        Step: "اضف الماء و معلقه ملح"
                    },
                    {
                        num: 5,
                        Step: "اضف الماء و معلقه ملح"
                    },


                ],
                item: {},
            }
        }
    }
     IconFav() {
        let last = this.state.IconFavorite
        last = !last
        if (last == true) {
            console.log("true")
        } else {
            console.log("false")
            // this.props.navigation.navigate("Favourite", {
            //     name: this.state.item

            // })

        }
        this.setState({ IconFavorite: last })
    }
    componentDidMount() {
        let data = this.props.route.params.name
        // alert(JSON.stringify(data))
        this.setState({ item: data })
    }

    render() {
        return (
            <>
                <View style={styles.Header}>
                    <ScrollView>
                        <View style={styles.ViewImageHeader}>
                            <ImageBackground source={this.state.item.Image}
                                resizeMode={"stretch"}
                                style={styles.ImageHeader}>
                                <TouchableOpacity
                                    style={{
                                        height: height / 10,
                                        justifyContent: "flex-end"
                                    }}
                                    onPress={() => {
                                        this.props.navigation.goBack()
                                    }}>
                                    <Ionicons name='arrow-back-outline' size={ICONSSIZE.xxxlIcon} color={COLORS.pramary} />
                                </TouchableOpacity>

                            </ImageBackground>
                        </View>
                        <View style={styles.ScView}>
                            <View style={styles.FontView}>
                                <Text style={styles.Textheader}>
                                    {this.state.item.name}
                                </Text>
                            </View>
                            <View style={styles.ViewDetils}>
                                <View style={{
                                    width: width / 1.3,
                                    marginTop: -MARGIN.smMargin,
                                    alignSelf: "center",
                                }}>
                                    <TouchableOpacity
                                        style={{
                                            width: 50,
                                            height: 50,
                                            alignSelf: "flex-end",
                                            borderRadius: RADIUS.lgRadius,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: COLORS.pramary
                                        }} onPress={() => {
                                            this.IconFav()
                                            // this.props.navigation.navigate('Common')
                                        }}>
                                        <Ionicons name={this.state.IconFavorite ? 'heart-outline' : "heart"}
                                            size={40} color={COLORS.orange} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.FirstDetels}>
                                    <View style={styles.Detels} >
                                        <Text style={styles.TextRow} >
                                            وقت التحضير
                                        </Text>
                                        <Text style={styles.TextRow} >
                                            وقت الطهي
                                        </Text>
                                        <Text style={styles.TextRow} >
                                            مدي الصعوبة
                                        </Text>

                                    </View>
                                    <View style={styles.Detels} >
                                        <Text style={[styles.TextRow, { textDecorationLine: "none" }]} >
                                            15 min
                                        </Text>
                                        <Text style={[styles.TextRow, { textDecorationLine: "none" }]} >
                                            15 min
                                        </Text>
                                        <Text style={[styles.TextRow, { textDecorationLine: "none" }]} >
                                            25 %
                                        </Text>

                                    </View>

                                </View>
                                <View style={styles.mocaonat}>
                                    <View style={styles.FontView}>
                                        <Text style={[styles.Textheader, { fontSize: FONTS.h1 }]}>
                                            المكونات
                                        </Text>
                                    </View>
                                    <View style={styles.mocaonatD}>
                                        {/* {this.state.item.map((item, index) => ( */}

                                        <View style={styles.onetwo}>
                                            <Ionicons name='ellipse' size={10} color={COLORS.ButtonWhite} />
                                            <Text style={[styles.TextRow, { marginHorizontal: MARGIN.xxsMargin, textDecorationLine: "none" }]} >
                                                {this.state.item.components}
                                            </Text>
                                        </View>
                                        {/* ))} */}
                                    </View>
                                </View>
                                <View style={styles.mocaonat}>
                                    <View style={styles.FontView}>
                                        <Text style={[styles.Textheader, { fontSize: FONTS.h1 }]}>
                                            الطريقة
                                        </Text>
                                    </View>
                                    <View style={styles.mocaonatD}>
                                        {/* {this.state.item.map((item, index) => ( */}

                                        <View style={styles.onetwo}>
                                            <Text style={styles.Num} >55</Text>
                                            <Ionicons name='ellipse' size={10} color={COLORS.orange} />

                                            <Text style={[styles.TextRow, {
                                                width: width / 1.35,
                                                marginHorizontal: MARGIN.xxsMargin,
                                                textDecorationLine: "none",
                                            }]} >
                                                {this.state.item.Step}
                                            </Text>
                                        </View>
                                        {/* ))}  */}
                                    </View>


                                </View>
                            </View>
                        </View>

                    </ScrollView>
    

                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    Header: {
        flex: 1,
        backgroundColor: COLORS.pramary
    },
    ViewImageHeader: {
        width: width,
        height: height / 3,
        backgroundColor: "#000",
        // borderRadius:RADIUS.lgRadius

    },
    ImageHeader: {
        width: width,
        height: height / 2,
        alignItems: "flex-end",
        // justifyContent:"flex-end"

    },
    ScView: {
        height: height,
        width: width,
        backgroundColor: "#6e6e6e9e",
        borderTopLeftRadius: RADIUS.xxlRadius,
        borderTopRightRadius: RADIUS.xxlRadius,
        marginTop: -80,

    },
    FontView: {
        width: width / 1.05,
        // backgroundColor:COLORS.background,
        alignSelf: "center"
    },
    Textheader: {
        fontFamily: "Generator Black",
        fontSize: FONTS.h0,
        color: COLORS.ButtonWhite
    },
    ViewDetils: {
        width: width,
        height: height,
        backgroundColor: COLORS.pramary,
        borderTopLeftRadius: RADIUS.xxlRadius,
        borderTopRightRadius: RADIUS.xxlRadius,
    },
    Icon: {
        width: width,
        height: 44,
        backgroundColor: COLORS.ButtonWhite
    },
    FirstDetels: {
        width: width / 1.10,
        // backgroundColor:COLORS.ButtonWhite,
        alignSelf: "center",
        alignItems: "center",
        borderBottomEndRadius: 5,
        borderColor: COLORS.pramary50,
        borderBottomWidth: 1

    },
    Detels: {
        width: width,
        height: height / 25,
        // backgroundColor: COLORS.ButtonWhite,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    TextRow: {
        fontSize: FONTS.h4,
        color: COLORS.black,
        textDecorationLine: "underline",
        alignSelf: "center",
        justifyContent: "center",
        fontFamily: "Generator Black",
        color: COLORS.ButtonWhite

    },
    ViewDetels: {
        width: width / 1.01,
        // height: height / 5,
        backgroundColor: COLORS.black,
        alignSelf: "center",
        padding: PADDING.smPadding
    },
    TextDetels: {
        fontSize: FONTS.h4,
        color: COLORS.white,
        fontFamily: "Generator Black",

    },
    ViewDetelsText: {
        width: width / 1.2,
        // height:height/8,
        padding: PADDING.smPadding,
        borderRadius: RADIUS.smRadius,
        borderColor: COLORS.orange,
        borderWidth: 4,
        // backgroundColor:COLORS.ButtonWhite,
        alignSelf: "center"
    },
    mocaonat: {
        width: width / 1.05,
        // height: height / 4,
        alignSelf: "center",
        // backgroundColor: COLORS.black
    },
    mocaonatD: {
        paddingVertical: PADDING.mdPadding,
        width: width / 1.15,
        // height: height / 8,
        alignSelf: "center",
        borderRadius: RADIUS.xxsRadius,
        backgroundColor: COLORS.pramary50
    },
    onetwo: {
        width: width / 1.20,
        // height: height / 12,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "flex-start",
        // backgroundColor: COLORS.black,
        flexDirection: "row"
    },
    Num: {
        fontSize: FONTS.h0,
        color: COLORS.orange,
        fontFamily: 'Vazirmatn-Black'

    }
 });
