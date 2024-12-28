import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {Link, useNavigation} from "expo-router";
/*
expo route built on top of react-navigation library 
it has all features & property of react navigation */
const index = () => {
  //const name = "johndoe";
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>index</Text>
      {/* use can use ref */}
      <Link
        //href={`/settings?name=${name}`} //share using params
        href={{pathname: "settings", params: {name: "john doe"}}} //using method
        style={{fontSize: 20, fontWeight: "bold"}}
      >
        go to settings
      </Link>
      {/* another way to navigate using useNavigation hook*/}
      <TouchableOpacity
        style={{
          width: "90%",
          height: 60,
          marginTop: 20,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("(tabs)", {name: "oggy"})}
      >
        <Text style={{fontSize: 20, fontWeight: "bold", color: "white"}}>
          navigate
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "90%",
          height: 60,
          marginTop: 20,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("notifications")}
      >
        <Text style={{fontSize: 20, fontWeight: "bold", color: "white"}}>
          notification
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
