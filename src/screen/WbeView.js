import React from 'react';
import WebView from 'react-native-webview'


export default class WbeView extends React.Component {

    constructor(props) {
        super(props); {
            this.state = {
                item: {},
            }
        }
    }
    componentDidMount() {
        let data = this.props.route.params.name
        // alert(JSON.stringify(data))
        this.setState({ item: data })
    }



    render() {
        return (
            <>
                <WebView source={{ uri: this.state.item.video }} />
            </>
        )

    }

}