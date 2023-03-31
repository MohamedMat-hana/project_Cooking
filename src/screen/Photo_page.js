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
    BackHandler,
    ScrollView,
    AsyncStorage
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
                // Mokawnat: [
                //     {
                //         num: 1,
                //         Step: "نص كيلو دقيق"
                //     },
                //     {
                //         num: 2,
                //         Step: "نص كيلو بصل"
                //     },
                //     {
                //         num: 3,
                //         Step: "توم"
                //     },
                //     {
                //         num: 4,
                //         Step: " ملح"
                //     },
                //     {
                //         num: 5,
                //         Step: "فلفل"
                //     },
                //     {
                //         num: 5,
                //         Step: "خيار"
                //     },


                // ],

                // Arr_Step: [
                //     {
                //         num: 1,
                //         Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و معلقه اضف الماء و معلقه ملحاضف الماء و معلقه ملحاضف الماء و معلقه ملح ملح"
                //     },
                //     {
                //         num: 2,
                //         Step: "اضف الماء و معلقه ملح"
                //     },
                //     {
                //         num: 3,
                //         Step: "اضف الماء و معلقه ملح"
                //     },
                //     {
                //         num: 4,
                //         Step: "اضف الماء و معلقه ملح"
                //     },
                //     {
                //         num: 5,
                //         Step: "اضف الماء و معلقه ملح"
                //     },
                //     {
                //         num: 5,
                //         Step: "اضف الماء و معلقه ملح"
                //     },


                // ],
                item: {},
            }
        }
    }
    
    componentDidMount() {
        let data = this.props.route.params.name
        // alert(JSON.stringify(data))
        this.setState({ item: data })
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );

    }
    backAction = () => {

        this.props.navigation.navigate('HomeStack')
        return true;
    };

    componentWillUnmount() {
        this.backHandler.remove();
    }

    render() {
        return (
            <>
                <View style={styles.Header}>
                    <ScrollView>
                        {/* <View > */}
                        <View style={styles.ViewImageHeader}>
                            <ImageBackground source={this.state.item.Image}
                                resizeMode={"cover"}
                                style={styles.ImageHeader}>
                                <TouchableOpacity
                                    style={{
                                        height: height / 10,
                                        justifyContent: "flex-end",
                                        marginRight: MARGIN.xxsMargin
                                    }}
                                    onPress={() => {
                                        this.props.navigation.goBack()
                                    }}>
                                    <View style={{ backgroundColor: COLORS.pramary50, borderRadius: RADIUS.lgRadius, justifyContent: "center" }} >

                                        <Ionicons name='arrow-back-outline' size={ICONSSIZE.xxxlIcon} color={COLORS.orange} />
                                    </View>
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
                                    <View
                                        style={{
                                            width: 50,
                                            height: 50,
                                            alignSelf: "flex-end",
                                            borderRadius: RADIUS.lgRadius,
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }} onPress={() => {
                                            this.IconFav()
                                        }}>
                                    </View>
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
                                            {this.state.item.Elta7der}
                                        </Text>
                                        <Text style={[styles.TextRow, { textDecorationLine: "none" }]} >
                                            {this.state.item.Eltahy}
                                        </Text>
                                        <Text style={[styles.TextRow, { textDecorationLine: "none" }]} >
                                            {this.state.item.Elsouba} %
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

                                        <View style={styles.onetwo}>
                                            {/* <Ionicons name='ellipse' size={10} color={COLORS.ButtonWhite} /> */}
                                            <Text style={[styles.TextRow, { marginHorizontal: MARGIN.xxsMargin, textDecorationLine: "none" }]} >
                                                {this.state.item.components}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.mocaonat}>
                                    <View style={styles.FontView}>
                                        <Text style={[styles.Textheader, { fontSize: FONTS.h1 }]}>
                                            الطريقة
                                        </Text>
                                    </View>
                                    <View style={styles.mocaonatD}>

                                        <View style={styles.onetwo}>

                                            <Text style={[styles.TextRow, {
                                                width: width / 1.49,
                                                marginHorizontal: MARGIN.xxsMargin,
                                                textDecorationLine: "none",
                                            }]} >
                                                {this.state.item.Step}
                                            </Text>
                                        </View>
                                    </View>


                                </View>
                            </View>
                        </View>
                        <View style={{
                            height: 70, backgroundColor: COLORS.pramary
                        }}>

                        </View>
                        {/* </View> */}
                    </ScrollView>


                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    Header: {
        // flex: 1,
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
        // height: height,
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
        // height: height,
        backgroundColor: COLORS.pramary,
        borderTopLeftRadius: RADIUS.xxlRadius,
        borderTopRightRadius: RADIUS.xxlRadius,
    },
    Icon: {
        width: width,
        // height: 44,
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
        // height: height / 25,
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
