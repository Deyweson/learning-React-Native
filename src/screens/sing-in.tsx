import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  Details: undefined
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "SignIn">;

export default function SignIn(): JSX.Element {
  const navigation = useNavigation<NavigationProps>();

  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>SignIn</Text>
      <TouchableOpacity
        onPress={goToHome}
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
  );
}
