import React from "react";
import { View, Text } from "react-native";
import TabHeader from './TabHeader'
  function Home() {
    return (
        <View style={{flex:1}}>
            {/* <Text> Home</Text> */}
            <TabHeader />
        </View>
    );
}
export default Home;