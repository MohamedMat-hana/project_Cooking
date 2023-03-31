import React from 'react';
import WebView from 'react-native-webview'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
    TouchableOpacity,
    View,
    BackHandler,
    Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'

export default class WbeView extends React.Component {

    constructor(props) {
        super(props); {
            this.state = {
                item: {},
            }
        }
    }
    backAction = () => {

        this.props.navigation.navigate('HomeStack', { screen: "Option" })
        return true;
    };

    componentWillUnmount() {
        this.backHandler.remove();
    }




    componentDidMount() {
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
        let data = this.props.route.params.name
        // alert(JSON.stringify(data))
        this.setState({ item: data })
    }



    render() {
        return (
            <>
                <View
            style={{
                // height: height / 10,
                // justifyContent: "flex-end",
                // marginRight: MARGIN.xxsMargin
                backgroundColor:COLORS.ButtonWhite
            }}>
                <TouchableOpacity
                    style={{
                        height: height /12,
                        width: width / 8,
                        alignSelf:"flex-end",
                        justifyContent: "center",
                        marginRight: MARGIN.xxsMargin
                    }}
                    onPress={() => {
                        this.props.navigation.goBack()
                    }}>
                    <View style={{ backgroundColor: COLORS.pramary50, borderRadius: RADIUS.lgRadius, justifyContent: "center" }} >

                        <Ionicons name='arrow-back-outline' size={ICONSSIZE.xxxlIcon} color={COLORS.orange} />
                    </View>
                </TouchableOpacity>
                </View>

                <WebView source={{ uri: this.state.item.video }} />
            </>
        )

    }

}