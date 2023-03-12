import React from 'react';
import WebView from 'react-native-webview'


export default class WbeView extends React.Component {

    constructor(props) {
        super(props); {
            this.state = {

            }
        }
    }



    render() {
        return (
            <>
                <WebView source={{ uri: 'https://lottiefiles.com/101799-cook-in-a-wok' }} />
            </>
        )

    }

}