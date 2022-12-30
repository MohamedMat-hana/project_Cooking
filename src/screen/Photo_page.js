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
    constructor() {
        super(); {
            this.state = {
                IconFavorite: true,
                Arr_Step: [
                    {
                        num: 1,
                        Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و معلقه ملح"
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


                ]
            }
        }
    }
    IconFav() {
        let last = this.state.IconFavorite
        last = !last
        this.setState({ IconFavorite: last })
    }
    render() {
        return (
            <>
                <View style={styles.Header}>
                    <ScrollView>
                        <View style={styles.ViewImageHeader} >
                            <ImageBackground source={require("../img/food.jpg")}
                                style={styles.ImageHeader}
                                resizeMode={"cover"} >
                                <View style={styles.ViewIconImage}>
                                    <TouchableOpacity onPress={() => {
                                        this.IconFav()
                                    }}>
                                        <Ionicons name={this.state.IconFavorite ? 'heart-circle-outline' : "heart-dislike-circle-outline"}
                                            size={40} color={this.state.IconFavorite ? COLORS.red : COLORS.grayICon} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Ionicons name='ios-arrow-back-circle' size={40} color={COLORS.orange} />
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={styles.ScView}>
                            <View style={{
                                backgroundColor: COLORS.ButtonWhite,
                                // borderTopLeftRadius: RADIUS.x3lRadius,
                                // borderTopRightRadius: RADIUS.x3lRadius,
                                marginTop: MARGIN.xlMargin
                            }}>
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
                        </View>

                        <View style={styles.ViewDetels}>
                            <Text style={styles.TextDetels}>
                                المكونات
                            </Text>
                            <View style={styles.ViewDetelsText}>
                                <Text style={styles.TextDetels}>
                                    خضار - رز - بصل - ملح - فلفل - خيار - خضار- رز - بصل - ملح - فلفل - خيار - خضار - رز - بصل - ملح - فلفل - خيار - خضار
                                </Text>

                            </View>
                        </View>
                        {this.state.Arr_Step.map((item, index) => (
                            <View style={styles.ViewSteps} >
                                <View style={{
                                    width: 50,
                                    height: 50,
                                    borderWidth: 3,
                                    borderRadius: 100,
                                    // padding: PADDING.mdPadding,
                                    borderColor: COLORS.ButtonWhite,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: MARGIN.xsMargin
                                }}>
                                    <Text style={styles.TextNum} >
                                        {index+1}
                                    </Text>
                                </View>
                                <Ionicons name='arrow-down-sharp' size={40} color={COLORS.ButtonWhite} style={{ marginTop: -10 }} />
                                <View style={styles.ViewDetelsText}>
                                    <Text style={styles.TextDetels}>
                                        {item.Step}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>

                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    Header: {
        flex: 1,
    },
    ViewImageHeader: {
        width: width,
        height: height / 3,
        backgroundColor: "#000",
        // borderRadius:RADIUS.lgRadius

    },
    ImageHeader: {
        width: width,
        height: height / 3,
        alignItems: "center"

    },
    ViewIconImage: {
        height: height / 13,
        width: width / 1.02,
        // backgroundColor:COLORS.ButtonWhite,
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexDirection: "row"
    },
    ScView: {
        width: width,
        height: height / 6.6,
        backgroundColor: COLORS.gray,
        borderTopLeftRadius: RADIUS.x3lRadius,
        borderTopRightRadius: RADIUS.x3lRadius,
        marginTop: -50,
        justifyContent: "flex-end"
        // marginTop: 20,     


    },
    Detels: {
        width: width,
        height: height / 25,
        // backgroundColor: COLORS.ButtonWhite,
        flexDirection: "row",

        justifyContent: "space-evenly"
    },
    TextRow: {
        fontSize: FONTS.h6,
        color: COLORS.black,
        textDecorationLine: "underline",
        alignSelf: "center",
        justifyContent: "center"
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
        color: COLORS.white
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
    ViewSteps: {
        width: width / 1.01,
        // height: height,
        backgroundColor: COLORS.black50,
        alignSelf: "center",
        alignItems: "center",


    },
    TextNum: {
        fontSize: 25,
        color: COLORS.ButtonWhite,
        fontWeight: "bold"
    }
});
