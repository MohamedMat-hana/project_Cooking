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
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');


export default function FoodCommon() {
  const [Food, setFood] = useState(
    [
      {
        Image: require("../img/pizza.png"),
        name: "Pizza",
        view: true,
        time: "30 min",
        Elta7der: '15 min',
        Eltahy: "15 min",
        Elsouba: "25",
        components: "مكرونه \n, دقيق\n ,حليب , ملح \n1- فلفل اسود مكرونه\n - دقيق \n-حليب , \nPizza , \nفلفل اسود",
        Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و معل\nقه اضف الماء و معلقه ملحاضف الماء و معلقه ملحاضف الماء و معلقه\n ملح ملح",
        categortType: 1
      },
      {
        Image: require("../img/burger.png"),
        name: "Burger",
        Elta7der: '15 min',
        Eltahy: "15 min",
        Elsouba: "25",
        components: "مكرونه \n, دقيق\n ,حليب , ملح \n1- فلفل اسود مكرونه\n - دقيق \n-حليب , \nPizza , \nفلفل اسود",
        view: true,
        Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و معل\nقه اضف الماء و معلقه ملحاضف الماء و معلقه ملحاضف الماء و معلقه\n ملح ملح",
        time: "30 min",
        categortType: 1

      },
      {
        Image: require("../img/food.jpg"),
        name: "Cop",
        Elta7der: '15 min',
        Eltahy: "15 min",
        Elsouba: "25",
        components: "مكرونه \n, دقيق\n ,حليب , ملح \n1- فلفل اسود مكرونه\n - دقيق \n-حليب , \nPizza , \nفلفل اسود",
        view: true,
        Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و معل\nقه اضف الماء و معلقه ملحاضف الماء و معلقه ملحاضف الماء و معلقه\n ملح ملح",
        time: "30 min",
        categortType: 1

      },
      {
        Image: require("../img/food2.jpg"),
        name: "ايس كريم",
        Elta7der: '15 min',
        Eltahy: "15 min",
        Elsouba: "25",
        components: "مكرونه \n, دقيق\n ,حليب , ملح \n1- فلفل اسود مكرونه\n - دقيق \n-حليب , \nPizza , \nفلفل اسود",
        view: true,
        Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و معل\nقه اضف الماء و معلقه ملحاضف الماء و معلقه ملحاضف الماء و معلقه\n ملح ملح",
        time: "30 min",
        categortType: 2

      },
      {
        Image: require("../img/food3.jpg"),
        name: "ايس كريم",
        Elta7der: '15 min',
        Eltahy: "15 min",
        Elsouba: "25",
        components: "مكرونه \n, دقيق\n ,حليب , ملح \n1- فلفل اسود مكرونه\n - دقيق \n-حليب , \nPizza , \nفلفل اسود",
        view: true,
        Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و معل\nقه اضف الماء و معلقه ملحاضف الماء و معلقه ملحاضف الماء و معلقه\n ملح ملح",
        time: "30 min",
        categortType: 2

      },
      {
        Image: require("../img/food4.jpg"),
        name: "ايس كريم",
        Elta7der: '15 min',
        Eltahy: "15 min",
        Elsouba: "25",
        components: "مكرونه \n, دقيق\n ,حليب , ملح \n1- فلفل اسود مكرونه\n - دقيق \n-حليب , \nPizza , \nفلفل اسود",
        view: true,
        Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و معل\nقه اضف الماء و معلقه ملحاضف الماء و معلقه ملحاضف الماء و معلقه\n ملح ملح",
        time: "30 min",
        categortType: 2

      },
      {
        Image: require("../img/steak_food.png"),
        name: "ايس كريم",
        Elta7der: '15 min',
        Eltahy: "15 min",
        Elsouba: "25",
        components: "مكرونه \n, دقيق\n ,حليب , ملح \n1- فلفل اسود مكرونه\n - دقيق \n-حليب , \nPizza , \nفلفل اسود",
        view: true,
        Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و معل\nقه اضف الماء و معلقه ملحاضف الماء و معلقه ملحاضف الماء و معلقه\n ملح ملح",
        time: "30 min",
        categortType: 3

      },
      {
        Image: require("../img/food.jpg"),
        name: "Cop",
        Elta7der: '15 min',
        Eltahy: "15 min",
        Elsouba: "25",
        components: "مكرونه \n, دقيق\n ,حليب , ملح \n1- فلفل اسود مكرونه\n - دقيق \n-حليب , \nPizza , \nفلفل اسود",
        view: true,
        Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و معل\nقه اضف الماء و معلقه ملحاضف الماء و معلقه ملحاضف الماء و معلقه\n ملح ملح",
        time: "30 min",
        categortType: 3

      },

    ])

  const [Category, SetCategory] = useState(
    [
      {
        id: 1,
        name: "Burger",
        img: require("../img/burgerr.png"),
        choose: false,
        contant: "burgeeeerrrr",
        components: "AAAAAA"

      }
      ,
      {
        id: 2,
        name: "Pizza",
        img: require("../img/pizzaa.png"),
        choose: false,
        contant: "pizzzzzaaaa",
        components: "bbbbbb"

      }
      ,
      {
        id: 3,
        name: "Burger",
        img: require("../img/burgerr.png"),
        choose: false,
        contant: "burgeeeerrrr",
        components: "ccccc"

      }
      ,
      {
        id: 4,
        name: "Pizza",
        img: require("../img/pizzaa.png"),
        choose: false,
        contant: "pizzzzzaaaa",
        components: "dddddd"

      }
      ,
      {
        id: 5,
        name: "Burger",
        img: require("../img/burgerr.png"),
        choose: false,
        contant: "burgeeeerrrr"
      }
      ,
      {
        id: 6,
        name: "Pizza",
        img: require("../img/pizzaa.png"),
        choose: false,
        contant: "pizzzzzaaaa"
      }
    ]
  )

  const [IconSearch, setIconSearch] = useState(true)
  const [search, setsearch] = useState("")



  const ref = React.useRef(null)
  const [animationDisplay, setanimationDisplay] = useState(false)

  const makesearch = (searchText) => {
    let list = Food
    let count = 0
    for (let i = 0; i < list.length; i++) {
      if (((list[i].name).toUpperCase()).includes(searchText.toUpperCase())) {
        list[i].view = true
      }
      else {
        list[i].view = false
        count++
      }
    }
    if (count == list.length) {
      setanimationDisplay(true)
    }

    // 
    if (count != list.length) {
      setanimationDisplay(false)

    }
    setFood(list)
    count = 0
  }

  const [showView, setshowView] = useState(true)
  const [CategoryReturn, setCategoryReturn] = useState([])
  const [indexName, setindexName] = useState()
  const chooseCategory = (index) => {
    let list = Category
    let arr = Food
    if (list[index].choose == true) {
      setshowView(true)
      list[index].choose = false

    }
    else {

      for (let i = 0; i < list.length; i++) {
        list[i].choose = false
      }
      list[index].choose = true
      setshowView(false)
      var ret = []
      for (let i = 0; i < arr.length; i++) {
        if (list[index].id == arr[i].categortType) {
          //  let newObj={
          //   Image: arr[i].Image,
          //   name: arr[i].name,
          //   view: arr[i].view,
          //   time: arr[i].time,
          //   Elta7der: arr[i].Elta7der,
          //   Eltahy: arr[i].Eltahy,
          //   Elsouba: arr[i].Elsouba,
          //   components: arr[i].components,
          //   Step: arr[i].Step,

          //   }
          //   ret.push(newObj)
          ret.push(arr[i])
        }

      }
      // console.log(ret)
      setCategoryReturn(ret)
      // ret = []
    }
    setCategoryReturn(ret)
    SetCategory(list)
    setindexName(index)
  }




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
                  <TouchableOpacity style={Category.choose ? styles.category_chosen_Box : styles.category_Box}
                    onPress={() =>
                      chooseCategory(index)

                    }
                  >
                    <Image source={Category.img} style={{ width: width / 5, height: height / 12, resizeMode: "contain" }} />
                  </TouchableOpacity>
                )}
              </ScrollView>
            </View>
            {showView ? (
              <View style={styles.food_View}>
                <View style={styles.Headerstarred}>
                  <Text style={styles.textHeaderstarred}>
                    الوصفات
                  </Text>
                  {/* <Text style={styles.textHeaderstarred2}>
                  رؤية الكل
                </Text> */}
                </View>
                {
                  animationDisplay ? (
                    <>
                      <View style={{ alignItems: "center", justifyContent: "center", alignSelf: "center", width: width, height: height / 1.8 }}>
                        <LottieView
                          ref={this.ref}
                          source={require("../lottie/search_empty.json")}
                          loop={true}
                          autoPlay={true}
                          speed={1.5}
                        // style={{ alignSelf: "center" }}
                        />
                      </View>
                    </>
                  ) : (
                    <>
                      {Food.map((item, index) =>
                        item.view ? (
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

                        ) : (
                          null
                        )


                      )}
                    </>
                  )
                }



              </View>
            ) : (
              <View style={styles.food_View}>
                <View style={styles.Headerstarred}>
                  <Text style={styles.textHeaderstarred}>
                    {Category[indexName].name}
                  </Text>
                  {/* <Text style={styles.textHeaderstarred2}>
                  رؤية الكل
                </Text> */}
                </View>
                {CategoryReturn.map((items, index) =>
                  <>

                    <View style={styles.meal_View}>
                      <Image source={items.Image} style={styles.meal_image}
                        resizeMode={"center"} />
                      <View style={{ width: width / 2.4, alignItems: "flex-start" }}>
                        <Text style={styles.meal_name}>
                          {items.name}
                        </Text>
                      </View>
                      <View style={styles.view_time}>
                        <Text style={styles.text_time}>
                          {items.time}
                        </Text>
                        <Ionicons name='md-time' style={{ alignSelf: "center" }} size={ICONSSIZE.smIcon} color={COLORS.ButtonWhite} />
                      </View>
                      <View style={styles.option_view}>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate("Photo_page", {
                              name: items
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
                  </>

                )}
              </View>
            )}

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
    // height: height / 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: RADIUS.smRadius,
    marginVertical: MARGIN.xxsMargin,

    // borderWidth: 1,
    // borderColor: COLORS.orange,
    // paddingHorizontal: PADDING.xsPadding,
    // fontSize: FONTS.h,
    flexDirection: "row"

  },
  SearchTextInput: {
    // backgroundColor: COLORS.white,
    width: width / 1.4,
    // height: height / 17,
    alignItems: "center",
    alignSelf: "center",
    // backgroundColor:COLORS.black,
    color: COLORS.black,
    justifyContent: "flex-end",
    fontFamily: "Generator Black",
    // borderRadius: RADIUS.lgRadius,
    // borderWidth: 2,
    // borderColor: COLORS.orange,
    paddingHorizontal: PADDING.smPadding,
    fontSize: FONTS.h4
    // marginVertical: MARGIN.xsMargin

  },

  category_View: {
    height: height / 10,
    width: width / 1.07,
    flexDirection: "row",
    marginTop: MARGIN.xxsMargin
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
  category_chosen_Box: {
    width: width / 4.5,
    height: height / 11,
    padding: PADDING.xsPadding,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.warning,
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
    marginTop: MARGIN.xxsMargin,
    // backgroundColor: "#0fff"
  }
  ,
  Headerstarred: {
    width: width / 1.05,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center"
  },
  textHeaderstarred: {
    fontSize: FONTS.h1,
    color: COLORS.ButtonWhite,
    // fontWeight: "bold",
    fontFamily: "Generator Black"
  },
  textHeaderstarred2: {
    fontSize: FONTS.h5,
    color: COLORS.gray,
    // fontWeight: "bold",
    fontFamily: "Generator Black"
  },
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
