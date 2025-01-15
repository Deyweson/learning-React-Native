import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "./sing-in";

export default function Home(): JSX.Element {

  type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;

  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40 }}>Home</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details")}
        style={{
          top: 20,
          width: 200,
          backgroundColor: "#43425D",
          alignItems: "center",
          padding: 8,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff" }}>Details</Text>
      </TouchableOpacity>
    </View>
  )
}