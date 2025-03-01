import React from "react";
import { useActivities } from "@/contexts/activityContext";
import { useAuth } from "@/contexts/authContext";
import { Alert, Button, FlatList, StyleSheet, Text, View } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function ManageActivities() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { activities, deleteActivity } = useActivities();
  const { user } = useAuth();

  const filteredActivities = activities.filter(
    (activity) => activity.createdBy === user?.id
  );

  if (!user) {
    return (
      <View>
        <Text>Você precisa estar logado para adicionar atividades.</Text>
      </View>
    );
  }

  const handleDelete = (id: any) => {
    Alert.alert("Excluir", "Tem certeza que deseja excluir esta atividade?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Excluir", onPress: () => deleteActivity(id) },
    ]);
    navigation.navigate("index");
  };

  if (!filteredActivities.length) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Usuário não há atividades cadastradas.</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={filteredActivities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text>{item.responsible}</Text>

            {user && user.id === item.createdBy && (
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  gap: 10,
                  justifyContent: "center",
                }}
              >
                <Button
                  title="Editar"
                  onPress={() =>
                    navigation.navigate("editActivity", { activity: item })
                  }
                />
                <Button
                  title="Excluir"
                  color="red"
                  onPress={() => handleDelete(item.id)}
                />
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
  },
  text: {
    color: "#000",
    textAlign: "left",
  },
  input: {
    backgroundColor: "#00000010",
    borderRadius: 8,
    paddingLeft: 10,
    width: "80%",
    height: 55,
    margin: 8,
  },
  button: {
    boxShadow: "0px 10px 40px 1px rgba(0, 0, 0, 0.15)",
    backgroundColor: "#b2f2bb",
    borderRadius: 8,
    height: 55,
    width: "70%",
    margin: 5,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  select: {
    backgroundColor: "#00000010",
    borderRadius: 18,
    paddingLeft: 10,
    width: 150,
    height: 55,
  },
});
