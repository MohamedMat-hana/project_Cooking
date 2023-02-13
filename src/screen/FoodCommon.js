import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function FoodCommon() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={{ flex: 1 }}
      onPress={() => { navigation.navigate("Photo_page") }}>
    </TouchableOpacity>
  );
}

export default FoodCommon;
