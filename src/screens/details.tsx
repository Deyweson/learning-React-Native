import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Details(): JSX.Element {

  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details</Text>
      <TouchableOpacity
        onPress={back}
        style={{
          top: 20,
          width: 200,
          backgroundColor: "#43425D",
          alignItems: "center",
          padding: 8,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff" }}>HOME</Text>
      </TouchableOpacity>
    </View>
  )
}