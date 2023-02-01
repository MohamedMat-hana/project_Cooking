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
import Octicons from 'react-native-vector-icons/Octicons'
const { width, height } = Dimensions.get('window');
import * as Animatable from 'react-native-animatable';
import Common from '../screen/Common'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default class CommonDrink extends React.Component {
    constructor(props) {
        super(props); {
            this.state = {
                Common: [
                    {
                        Image: require("../img/pizza.png"),
                        name: "Pizza",
                        view: true
                    },
                    {
                        Image: require("../img/burger.png"),
                        name: "Burger",
                        view: true
                    },
                    {
                        Image: require("../img/food.jpg"),
                        name: "Cop",
                        view: true
                    },
                    {
                        Image: require("../img/food2.jpg"),
                        name: "ايس كريم",
                        view: true
                    },
                    {
                        Image: require("../img/food3.jpg"),
                        name: "ايس كريم",
                        view: true
                    },
                    {
                        Image: require("../img/food4.jpg"),
                        name: "ايس كريم",
                        view: true
                    },
                    {
                        Image: require("../img/steak_food.png"),
                        name: "ايس كريم",
                        view: true
                    },

                ],
                IconSearch: true,

            }
        }
    }
    makesearch(searchText) {
        let list = this.state.Common
        for (let i = 0; i < list.length; i++) {
            if (((list[i].name).toUpperCase()).includes(searchText.toUpperCase())) {
                list[i].view = true
            }
            else {
                list[i].view = false
            }
        }
        this.setState({ Common: list })
    }
    // Delete() {
    //     let list = this.state.Common
    //     list.view=!list.view
    //     if (list.view==false) {
    //         this.setState({ Common: list })
    //     }
    // }

    render() {
        return (
            <>
                <Text> 
                    DrinkCommon
                </Text>
            </>
        );
    }
}

const styles = StyleSheet.create({

});
