import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ActionOnActivities() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("createActivity")}
        style={styles.buttons}
      >
        <Text style={styles.text}>Cadastrar </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("manageActivities")}
        style={styles.buttons}
      >
        <Text style={styles.text}>Gerenciar </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    boxShadow: "0px 10px 40px 1px rgba(0, 0, 0, 0.15)",
    backgroundColor: "#69db7c",
    borderRadius: 8,
    height: 95,
    width: "70%",
    margin: 5,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "#000",
  },
});
