import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function DetailsActivity({ route }: any) {
  const { activity } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{activity.title}</Text>
        <Text style={styles.responsible}>
          Responsável: {activity.responsible}
        </Text>
      </View>
      <Text style={styles.category}>{activity.category}</Text>
      <Text style={styles.course}>{activity.course}</Text>
      <Text style={styles.description}>{activity.description}</Text>
      <Text style={styles.date}>
        Data de cadastro da atividade:{" "}
        {new Date(activity.createdAt).toLocaleDateString("pt-BR")}
      </Text>
      <TouchableOpacity
        style={styles.buttonLink}
        onPress={() => Linking.openURL(activity.link)}
      >
        <Text>Acessar mais informações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: "#000",
  },
  header: {
    width: "100%",
    paddingBottom: 15,
    color: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#23872b",
  },
  responsible: {
    fontSize: 18,
    marginTop: 15,
  },
  course: {},
  category: {
    fontStyle: "italic",
    color: "#14541a",
    marginTop: 15,
    fontSize: 16,
    fontWeight: 500,
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
    marginTop: 24,
    marginBottom: 24,
  },
  buttonLink: {
    backgroundColor: "#69db7c",
    borderRadius: 8,
    margin: 15,
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  date: {
    fontSize: 12,
    color: "#00005",
  },
  link: {},
});
