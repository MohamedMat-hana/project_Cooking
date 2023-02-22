import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('window');


export default function FoodCommon() {
  const [Food, setFood] = useState(
    [
      {
        Image: require("../img/pizza.png"),
        name: "Pizza",
        view: true,
        time: "30 min"
      },
      {
        Image: require("../img/burger.png"),
        name: "Burger",
        view: true,
        time: "30 min"
      },
      {
        Image: require("../img/food.jpg"),
        name: "Cop",
        view: true,
        time: "30 min"
      },
      {
        Image: require("../img/food2.jpg"),
        name: "ايس كريم",
        view: true,
        time: "30 min"
      },
      {
        Image: require("../img/food3.jpg"),
        name: "ايس كريم",
        view: true,
        time: "30 min"
      },
      {
        Image: require("../img/food4.jpg"),
        name: "ايس كريم",
        view: true,
        time: "30 min"
      },
      {
        Image: require("../img/steak_food.png"),
        name: "ايس كريم",
        view: true,
        time: "30 min"
      },
      {
        Image: require("../img/food.jpg"),
        name: "Cop",
        view: true,
        time: "30 min"
      },

    ])

  const [Category, SetCategory] = useState(
    [
      {
        name: "Burger",
        img: require("../img/burgerr.png"),
        choose: false,
        contant: "burgeeeerrrr",
        view: false,
      }
      ,
      {
        name: "Pizza",
        img: require("../img/pizzaa.png"),
        choose: false,
        contant: "pizzzzzaaaa",
        view: false,
      }
      ,
      {
        name: "Burger",
        img: require("../img/burgerr.png"),
        choose: false,
        contant: "burgeeeerrrr"
      }
      ,
      {
        name: "Pizza",
        img: require("../img/pizzaa.png"),
        choose: false,
        contant: "pizzzzzaaaa"
      }
      ,
      {
        name: "Burger",
        img: require("../img/burgerr.png"),
        choose: false,
        contant: "burgeeeerrrr"
      }
      ,
      {
        name: "Pizza",
        img: require("../img/pizzaa.png"),
        choose: false,
        contant: "pizzzzzaaaa"
      }
    ]
  )

  const [IconSearch, setIconSearch] = useState(true)
  const [search, setsearch] = useState("")

  // const [showView, SetshowView] = useState(true)
  // const [Index, SetIndex] = useState(null)


  const makesearch = (searchText) => {
    let list = Food
    for (let i = 0; i < list.length; i++) {
      if (((list[i].name).toUpperCase()).includes(searchText.toUpperCase())) {
        list[i].view = true
      }
      else {
        list[i].view = false
      }
    }
    setFood(list)
  }

  const return_category = (text) => {
    return (text)
  }

  const chooseCategory = (index) => {
    let cate = Category
    if (cate[index].choose == false) {
      cate[index].choose = true
      SetshowView(false)
      SetIndex(index)
      return_category(cate[index].contant)
    } else if (cate[index].choose == true) {

      cate[index].choose = false
      SetIndex(null)
      SetshowView(true)
      return_category(null)
    }

    SetCategory(cate)
  }

  // const show_Category_item = (index) => {
  //   let cate = Category

  // }
  const navigation = useNavigation();

  return (
    <>
      <View style={{ backgroundColor: COLORS.pramary, flex: 1 }}>
        <ScrollView>
          <View style={styles.Header}>
            <View>
              <View></View>
              {IconSearch ? (
                <>
                  <Animatable.View
                    animation='slideInLeft' >
                    <TouchableOpacity
                      onPress={() => {

                        setIconSearch(false);
                      }}>
                      <Ionicons name='ios-search-circle' size={60} color={COLORS.orange} />
                    </TouchableOpacity>

                  </Animatable.View>
                </>
              ) : (
                <Animatable.View style={styles.SearchTextView}
                  animation='flipInY' >
                  <TextInput style={styles.SearchTextInput}
                    placeholder={'البحث عن الأكلات...'}
                    placeholderTextColor={COLORS.grayFont}
                    onChangeText={(value) => {
                      makesearch(value)

                      setsearch(value)
                    }}


                    value={search} />
                  <TouchableOpacity onPress={() => {
                    setIconSearch(true);
                  }}>

                    <Ionicons name='search' size={ICONSSIZE.xlIcon} color={COLORS.pramary} />
                  </TouchableOpacity>

                </Animatable.View>
              )}
            </View>

            <View style={styles.category_View}>
              <ScrollView horizontal>
                {Category.map((Category, index) =>
                  <TouchableOpacity style={styles.category_Box}
                    onPress={() =>
                      chooseCategory(index)

                    }
                  >
                    <Image source={Category.img} style={{ width: width / 5, height: height / 12, resizeMode: "contain" }} />
                  </TouchableOpacity>
                )}
              </ScrollView>
            </View>
            <View style={styles.food_View}>
              {Food.map((item, index) =>

                <View style={styles.meal_View}>
                  <Image source={item.Image} style={styles.meal_image}
                    resizeMode={"center"} />
                  <View style={{ width: width / 2.4, alignItems: "flex-start" }}>
                    <Text style={styles.meal_name}>
                      {item.name}
                    </Text>
                  </View>
                  <View style={styles.view_time}>
                    <Text style={styles.text_time}>
                      {item.time}
                    </Text>
                    <Ionicons name='md-time' style={{ alignSelf: "center" }} size={ICONSSIZE.smIcon} color={COLORS.ButtonWhite} />
                  </View>
                  <View style={styles.option_view}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Photo_page", {
                          name: item
                        })
                      }
                      }
                      style={styles.button_option}>
                      <Text style={styles.button_text}>
                        الطريقة
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_option}>
                      <Text style={styles.button_text}>
                        الفيديو
                      </Text>
                    </TouchableOpacity>

                  </View>


                </View>


              )}


            </View>
          </View>
          <View style={{ height: 55 }}></View>
        </ScrollView>
      </View>


    </>
  )

}


const styles = StyleSheet.create({
  Header: {
    backgroundColor: COLORS.pramary,
    alignItems: "center",
    flex: 1,

  },

  SearchTextView: {
    backgroundColor: COLORS.white,
    width: width / 1.1,
    height: height / 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: RADIUS.smRadius,
    marginVertical: MARGIN.xxsMargin,
    flexDirection: "row"

  },
  SearchTextInput: {
    width: width / 1.4,
    height: height / 17,
    alignItems: "center",
    alignSelf: "center",
    color: COLORS.black,
    justifyContent: "flex-end",
    fontFamily: "Generator Black",
    paddingHorizontal: PADDING.smPadding,
    fontSize: FONTS.h4
  },
  category_View: {
    height: height / 10,
    width: width / 1.07,
    flexDirection: "row",
  },
  category_Box: {
    width: width / 4.5,
    height: height / 11,
    padding: PADDING.xsPadding,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.pramary50,
    marginLeft: 5,
    borderRadius: RADIUS.xsRadius
  }
  ,
  food_View: {
    width: width,
    backgroundColor: COLORS.pramary,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: PADDING.xsPadding,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: MARGIN.xxsMargin
  }
  ,
  meal_View: {
    width: width / 2.1,
    alignItems: "center",
    marginVertical: MARGIN.xxsMargin,
    padding: PADDING.lgPadding,
    borderRadius: RADIUS.xxsRadius,
    backgroundColor: COLORS.pramary50
  },
  meal_image: {
    width: width / 2.4,
    height: height / 5,
    borderRadius: RADIUS.xxsRadius,
  },
  meal_name: {
    fontSize: FONTS.h4,
    color: COLORS.white,
    fontFamily: "Generator Black",
    textAlign: "left"
  }
  ,
  view_time: {
    width: width / 2.4,
    alignItems: "center",
    flexDirection: "row",
  },
  text_time: {
    fontSize: FONTS.h4,
    color: COLORS.white,
    fontFamily: "Generator Black",
    alignSelf: "center",
    marginHorizontal: 2
  }
  ,
  option_view: {
    width: width / 2.4,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",

  },
  button_option: {
    width: width / 6,
    backgroundColor: COLORS.orange,
    borderRadius: RADIUS.smRadius,
    alignItems: "center",
    justifyContent: "center",
  },
  button_text: {
    fontSize: FONTS.h5,
    color: COLORS.white,
    fontFamily: "Generator Black",
    alignSelf: "center",
    marginHorizontal: 2
  }
});
