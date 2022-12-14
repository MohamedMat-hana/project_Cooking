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
import { COLORS } from '../../constants/Constants';
const { width, height } = Dimensions.get('window');

const slides = [
    {
        key: 1,
        text: 'اهلا ومرحبا بك',
        image: require('../../img/food.jpg'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        text: 'اصنع أكلاتك بنفسك',
        image: require('../../img/dessert3.jpg'),
        backgroundColor: '#febe29',
    },
    {
        key: 3,
        text: 'اخرج مواهبك في الطبخ',
        image: require('../../img/coffee.jpg'),
        backgroundColor: '#22bcb5',
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
    each_screen_container_style: {
        alignItems: 'center',
        justifyContent: "flex-start"
    },
    each_img_style: {
        height: '50%',
        width: '95%',
        marginBottom: RFValue(20),
    },
    text_under_each_img_style: {
        color: COLORS.black50,
        fontSize: RFValue(20),
    },
    slider_active_dot_style: {
        backgroundColor: COLORS.black50,
        width: RFValue(25),
    },
    botton_style: {
        padding: RFValue(1),
        backgroundColor: COLORS.gray,
        borderRadius: RFValue(15),
        width: RFValue(70),
        height: RFValue(40),
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_style: {
        color: COLORS.black50,
        fontSize: 22,
    },
    view_for_text_under_img_style: {
        justifyContent: 'center',
        marginTop: 8,
        backgroundColor: COLORS.gray,
        alignItems: 'center',
        alignSelf: "center",
        borderRadius: 20,
        padding: 15

    },
});
