import {View, Text} from "react-native";
import React from "react";
import {useLocalSearchParams, useRouter} from "expo-router";

const settings = () => {
  const route = useRouter();
  const params = useLocalSearchParams();
  console.log("params",params);
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>settings</Text>
      <Text onPress={() => route.back()}>Go back</Text>
    </View>
  );
};

export default settings;
