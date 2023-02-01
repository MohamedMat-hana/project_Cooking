import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
} from 'react-native';
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'
const { width, height } = Dimensions.get('window');


export default class Favorite extends React.Component {
    constructor(props) {
        super(props); {
            this.state = {

            }
        }
    }

    render() {
        return (
            <>
                <Text>Favorite</Text>
            </>
        );
    }
}

const styles = StyleSheet.create({


});
