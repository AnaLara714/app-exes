import { useNavigation, ParamListBase } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface Props {
  title: string;
  route: string;
  activity?: string;
}
export default function CardHome({ title, route, activity }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route, { categoryName: activity })}
      style={styles.container}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    boxShadow: "0px 10px 40px 1px rgba(0, 0, 0, 0.15)",
    backgroundColor: "#69db7c",
    borderRadius: 8,
    height: "15%",
    width: "70%",
    margin: 5,
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 18,
    color: "#000",
  },
});
