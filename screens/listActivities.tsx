import { useActivities } from "@/contexts/activityContext";
import { useAuth } from "@/contexts/authContext";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ListActivities({ route }: any) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { activities } = useActivities();
  const { categoryName } = route.params;

  console.log(categoryName);

  const filteredActivities = activities.filter(
    (activity) => activity.category == categoryName
  );

  const handleOpenActivity = (item: any) => {
    navigation.navigate("detailsActivity", { activity: item });
  };

  if (!filteredActivities.length) {
    return (
      <View style={styles.container}>
        <Text>Não há atividades de {categoryName} cadastradas.</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={filteredActivities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleOpenActivity(item)}
            style={styles.button}
          >
            <Text style={styles.text}>{item.title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text>{item.responsible}</Text>
              <Text>{item.course != " " ? " – " : ""}</Text>
              <Text> {item.course}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontWeight: "700",
    fontSize: 18,
  },
  button: {
    margin: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
