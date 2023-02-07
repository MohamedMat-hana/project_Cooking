import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    Dimensions

} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../../constants/Constants';
import Navigation from '../../navigation/Navigation';
const { width, height } = Dimensions.get('window');

const data = [
    {
        key: 1,
        title: 'اهلا ومرحبا بك',
        image: require('../../img/food.jpg'),
        // bg: '#59b2ab',

    },
    {
        key: 2,
        title: 'اصنع أكلاتك بنفسك',
        image: require('../../img/ice_intro.jpg'),
        // bg: '#59b2ab',

    },
    {
        key: 3,
        title: 'اخرج مواهبك في الطبخ',
        image: require('../../img/coffee.jpg'),
        // bg: '#59b2ab',

    }
];

// type Item = typeof data[0];


export default class Intro extends React.Component {
        constructor() {
        super(); {
            this.state = {
                showRealApp: false
            }
        }
    }

    _renderItem = ({ item }) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.pramary,
                }}>
                <SafeAreaView style={styles.slide}>
                    <Image source={item.image} style={styles.image} />

                    <Text style={styles.title}>{item.title}</Text>
                </SafeAreaView>
            </View>
        );
    };
    rendernextbuttom = () => {
        return (
            <View style={styles.botton_style}>
                <Text style={styles.text_style}>التالي</Text>
            </View>
        );
    };

    renderskipbuttom = () => {
        return (
            <View style={styles.botton_styleskip}>
                <Text style={styles.text_styleskip}>تخطي</Text>
            </View>
        );
    };
    renderDoneButton = () => {
        return (
            <TouchableOpacity style={styles.botton_style}
                        onPress={()=>{
                this.props.navigation.navigate('HomeStack');
            }}
>
                <Text style={styles.text_style}>تم</Text>
            </TouchableOpacity>
        );

    }
    renderPrevButton = () => {
        return (
            <View style={styles.botton_styleback}>
                <Text style={styles.text_styleback}>رجوع</Text>
            </View>
        );

    }
 
    
    _keyExtractor = (item) => item.title;

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent backgroundColor="transparent" />
                <AppIntroSlider
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    bottomButton
                    renderSkipButton={this.renderskipbuttom}
                    showSkipButton
                    renderNextButton={this.rendernextbuttom}
                    showNextButton
                    renderDoneButton={this.renderDoneButton}
                    showDoneButton
                    renderPrevButton={this.renderPrevButton}
                    showPrevButton
                    activeDotStyle={styles.slider_active_dot_style}
                    dotStyle={styles.slider_dot_style}
                    data={data}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start",
        paddingBottom: 96, // Add padding to offset large buttons and pagination in bottom of page
        // color: COLORS.orange
    },
    image: {
        width: "100%",
        height: "80%",
        resizeMode: "cover",
        borderRadius: 30,
        // justifyContent:"flex-start",
        marginBottom:20
    },
    title: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
        // fontWeight:"bold",
        fontFamily: "Generator Black",

    },
    botton_style: {
        // padding: 1,
        margin: 5,
        backgroundColor: COLORS.orange,
        borderRadius: RADIUS.smRadius,
        width: width / 1.1,
        height: height / 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botton_styleskip: {
        // padding: 1,
        margin: 5,
        // backgroundColor: COLORS.orange,
        borderRadius: RADIUS.smRadius,
        width: width / 1.1,
        height: height / 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_styleskip: {
        color: COLORS.orange,
        fontSize: FONTS.h4,
        fontFamily: "Generator Black",


    },
    botton_styleback: {
        // padding: 1,
        margin: 5,
        // backgroundColor: COLORS.orange,
        borderRadius: RADIUS.smRadius,
        width: width / 1.1,
        height: height / 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_styleback: {
        color: COLORS.orange,
        fontSize: FONTS.h4,
        fontFamily: "Generator Black",

    },
    text_style: {
        color: COLORS.white,
        fontSize: FONTS.h4,
        fontFamily: "Generator Black",

    },
    slider_active_dot_style: {
        backgroundColor: COLORS.orange,
        width: width / 15,
    },
    slider_dot_style: {
        backgroundColor: COLORS.ButtonWhite
    }
});