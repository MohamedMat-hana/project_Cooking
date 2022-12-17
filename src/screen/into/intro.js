import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    Dimensions
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../../constants/Constants';
const { width, height } = Dimensions.get('window');

const slides = [
    {
        key: 1,
        text: 'اهلا ومرحبا بك',
        image: require('../../img/food.jpg'),
    },
    {
        key: 2,
        text: 'اصنع أكلاتك بنفسك',
        image: require('../../img/dessert3.jpg'),
    },
    {
        key: 3,
        text: 'اخرج مواهبك في الطبخ',
        image: require('../../img/coffee.jpg'),
    }
];

export default class Intro extends React.Component {
    constructor() {
        super(); {
            this.state = {
                showRealApp: false
            }
        }
    }
    renderIntro = ({ item }) => {
        return (
            <ImageBackground source={item.image}
                style={{ flex: 1 }}
                resizeMode="cover">
                <View style={styles.view_for_text_under_img_style}>
                    <Text style={styles.text_under_each_img_style}>{item.text}</Text>
                </View>
            </ImageBackground>
        );
    }
    rendernextbuttom = () => {
        return (
            <View style={styles.botton_style}>
                <Text style={styles.text_style}>التالي</Text>
            </View>
        );
    };
    renderdone = () => {
        return (
            <TouchableOpacity
                style={styles.botton_style}
            >
                <Text style={styles.text_style}>تم</Text>
            </TouchableOpacity>
        );
    };
    render() {
        return (
            <AppIntroSlider
                renderItem={this.renderIntro}
                data={slides}
                activeDotStyle={styles.slider_active_dot_style}
                renderNextButton={this.rendernextbuttom}
                renderDoneButton={this.renderdone}
            />
        );
    }
}

const styles = StyleSheet.create({
    text_under_each_img_style: {
        color: COLORS.white,
        fontSize: FONTS.h4,
    },
    slider_active_dot_style: {
        backgroundColor: COLORS.orange,
        width: width / 15,
    },
    botton_style: {
        padding: 1,
        backgroundColor: COLORS.orange,
        borderRadius: RADIUS.smRadius,
        width: width / 5,
        height: height / 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_style: {
        color: COLORS.white,
        fontSize: FONTS.h4,
    },
    view_for_text_under_img_style: {
        justifyContent: 'center',
        marginTop: MARGIN.xsMargin,
        backgroundColor: COLORS.orange50,
        alignItems: 'center',
        alignSelf: "center",
        borderRadius: RADIUS.mdRadius,
        padding: PADDING.mdPadding

    },
});
