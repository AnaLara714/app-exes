import React from "react";
import { categories, courses } from "@/constants/utils";
import { useActivities } from "@/contexts/activityContext";
import { useAuth } from "@/contexts/authContext";
import { Picker } from "@react-native-picker/picker";
import { Calendar } from "react-native-calendars";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function CreateActivity() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { addActivity } = useActivities();
  const { user, logout } = useAuth();
  const [title, setTitle] = React.useState("");
  const [responsible, setResponsible] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState(categories[0].name);
  const [course, setCourse] = React.useState(courses[0].name);
  const [link, setLink] = React.useState("");
  const [date, setDate] = React.useState("");

  if (!user) {
    return (
      <View>
        <Text>Você precisa estar logado para adicionar atividades.</Text>
      </View>
    );
  }

  const handleAddActivity = () => {
    if (course === "Selecione") {
      setCourse(" ");
    }

    if (
      !title ||
      !description ||
      !responsible ||
      !link ||
      !category ||
      category === "Selecione"
    ) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const newActivity = {
      id: Date.now(),
      title,
      description,
      category,
      link,
      responsible,
      createdBy: user.id,
      createdAt: date,
      course: course,
    };

    addActivity(newActivity);
    Alert.alert("Sucesso", "Atividade cadastrada com sucesso!");
    navigation.navigate("index");
    logout();
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 0,
        padding: 15,
      }}
      style={styles.container}
    >
      <Text style={styles.text}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o título"
        onChangeText={setTitle}
        value={title}
      />
      <Text style={styles.text}>Responsável</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do/a responsável"
        onChangeText={setResponsible}
        value={responsible}
      />
      <Text style={styles.text}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira uma breve descrição"
        onChangeText={setDescription}
        value={description}
      />
      <Text style={styles.text}>Categoria</Text>
      <Picker
        selectedValue={category}
        onValueChange={setCategory}
        style={styles.select}
      >
        {categories.map((category) => (
          <Picker.Item
            key={category.id}
            label={category.name}
            value={category.name}
          />
        ))}
      </Picker>
      <Text style={styles.text}>Curso</Text>
      <Picker
        selectedValue={course}
        onValueChange={setCourse}
        style={styles.select}
      >
        {courses.map((course) => (
          <Picker.Item
            key={course.id}
            label={course.name}
            value={course.name}
          />
        ))}
      </Picker>
      <Text style={styles.text}>Link para acessar mais informações</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o link"
        onChangeText={setLink}
        value={link}
      />
      <Text style={styles.text}>Data </Text>
      <Calendar
        onDayPress={(day: any) => setDate(day.dateString)}
        markedDates={{
          [date]: { selected: true, marked: true, selectedColor: "green" },
        }}
      />
      <TouchableOpacity onPress={handleAddActivity} style={styles.button}>
        <Text style={styles.textButton}>Adicionar atividade </Text>
      </TouchableOpacity>
    </ScrollView>
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
    fontWeight: 600,
    margin: 10,
  },
  input: {
    backgroundColor: "#00000010",
    borderRadius: 8,
    paddingLeft: 10,
    width: "90%",
    height: 55,
    margin: 8,
  },
  button: {
    boxShadow: "0px 10px 40px 1px rgba(0, 0, 0, 0.15)",
    backgroundColor: "#23872b",
    borderRadius: 8,
    height: 55,
    width: "70%",
    marginLeft: "15%",
    margin: 5,
    marginTop: "3%",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  select: {
    backgroundColor: "#00000010",
    borderRadius: 18,
    margin: 5,
    marginLeft: 10,
    width: "90%",
    height: 55,
  },
  textButton: {
    color: "#fff",
  },
});
