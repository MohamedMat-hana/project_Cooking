// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Food from '../screen/Food';
// import FoodCommon from '../screen/FoodCommon';
// import Photo_page from '../screen/Photo_page';
// import HomeStack from './HomeStack';
// import AllDessert from '../screen/AllDessert';
// import AllDrink from '../screen/AllDrink';
// import Common from '../screen/Common';
// import CommonDessert from '../screen/CommonDessert';
// import CommonDrink from '../screen/CommonDrink';
// import Dessert from '../screen/Dessert';
// import Drink from '../screen/Drink';
// import Favourite from '../screen/Favourite';
// import Search from '../screen/Search';

// const Stack = createNativeStackNavigator();

// function FoodStack() {
//   return (
//     // <NavigationContainer>
//     <Stack.Navigator
//       screenOptions={{ headerShown: false }}
//       initialRouteName="Common">
//       <Stack.Screen name="Food" component={Food} />
//       {/* <Stack.Screen name="HomeStack" component={HomeStack} /> */}
//       <Stack.Screen name="Common" component={Common} />

//       <Stack.Screen name="Photo_page" component={Photo_page} />
//       <Stack.Screen name="FoodCommon" component={FoodCommon} />
//       <Stack.Screen name="AllDessert" component={AllDessert} />
//       <Stack.Screen name="AllDrink" component={AllDrink} />
//       <Stack.Screen name="CommonDessert" component={CommonDessert} />
//       <Stack.Screen name="CommonDrink" component={CommonDrink} />
//       <Stack.Screen name="Dessert" component={Dessert} />
//       <Stack.Screen name="Drink" component={Drink} />
//       <Stack.Screen name="Favourite" component={Favourite} />
//       <Stack.Screen name="Search" component={Search} />
//     </Stack.Navigator>
//     // </NavigationContainer>
//   );
// }

// export default FoodStack;
import * as React from 'react';
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
import FoodCommon from '../screen/FoodCommon'
import Photo_page from '../screen/Photo_page';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const navigationRef = createNavigationContainerRef()

// function navigate(name, params) {
//   if (navigationRef.isReady()) {
//     navigationRef.navigate(name, params);
//   }
// }

function makesearch(searchText) {
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
const Stack = createNativeStackNavigator();

function FoodStack({ navigation }) {
    // constructor(props) {
    //     super(props); {
    //         this.state = {
    //             Common: [
    //                 {
    //                     Image: require("../img/pizza.png"),
    //                     name: "Pizza",
    //                     view: true
    //                 },
    //                 {
    //                     Image: require("../img/burger.png"),
    //                     name: "Burger",
    //                     view: true
    //                 },
    //                 {
    //                     Image: require("../img/food.jpg"),
    //                     name: "Cop",
    //                     view: true
    //                 },
    //                 {
    //                     Image: require("../img/food2.jpg"),
    //                     name: "ايس كريم",
    //                     view: true
    //                 },
    //                 {
    //                     Image: require("../img/food3.jpg"),
    //                     name: "ايس كريم",
    //                     view: true
    //                 },
    //                 {
    //                     Image: require("../img/food4.jpg"),
    //                     name: "ايس كريم",
    //                     view: true
    //                 },
    //                 {
    //                     Image: require("../img/steak_food.png"),
    //                     name: "ايس كريم",
    //                     view: true
    //                 },

    //             ],
    //             IconSearch: true,

    //         }
    //     }
    // }
    // Delete() {
    //     let list = this.state.Common
    //     list.view=!list.view
    //     if (list.view==false) {
    //         this.setState({ Common: list })
    //     }
    // }

    // render() {
    return (
        <>
            <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="FoodCommon">
        <Stack.Screen name="Photo_page" component={Photo_page} />
        <Stack.Screen name="FoodCommon" component={FoodCommon} />
      </Stack.Navigator>
    </NavigationContainer>
{/* 
            <TouchableOpacity style={{
                backgroundColor: COLORS.pramary,
                flex: 1
            }}
                onPress={() =>
                    navigation.push('Photo_page')}
            >

            </TouchableOpacity> */}
        </>
    );
    // }
}

const styles = StyleSheet.create({

});
export default FoodCommon;