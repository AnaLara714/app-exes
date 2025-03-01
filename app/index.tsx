import CardHome from "@/components/CartHome";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <Text
        style={{
          margin: 15,
          fontWeight: "700",
          fontSize: 16,
          width: 275,
          textAlign: "center",
        }}
      >
        Acompanhe as atividades acadêmica do campus de Sobral em um só lugar!
      </Text>
      <CardHome title="Pesquisas" route="research" activity={"Pesquisa"} />
      <CardHome title="Extensões" route="extensions" activity={"Extensão"} />
      <CardHome title="Eventos" route="events" activity={"Evento"} />
      <CardHome title="Editais" route="notices" activity={"Edital"} />
      <TouchableOpacity
        style={{
          margin: 15,
          padding: 5,
        }}
        onPress={() => navigation.navigate("loginToCreate")}
      >
        <Text
          style={{
            color: "#1971c2",
            fontWeight: "700",
            textDecorationLine: "underline",
          }}
        >
          É docente ou TAE? Cadastre atividade aqui.
        </Text>
      </TouchableOpacity>
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
  },
});
