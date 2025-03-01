import React from "react";
import { categories } from "@/constants/utils";
import { useActivities } from "@/contexts/activityContext";
import { useAuth } from "@/contexts/authContext";
import { Picker } from "@react-native-picker/picker";
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

export default function EditActivity({ route }: any) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { editActivity } = useActivities();
  const { activity } = route.params;

  const { user } = useAuth();
  const [title, setTitle] = React.useState(activity.title);
  const [responsible, setResponsible] = React.useState(activity.responsible);
  const [description, setDescription] = React.useState(activity.description);
  const [category, setCategory] = React.useState(activity.category);
  const [link, setLink] = React.useState(activity.link);

  if (!user) {
    return (
      <View>
        <Text>Você precisa estar logado para adicionar atividades.</Text>
      </View>
    );
  }

  const handleEditActivity = () => {
    editActivity({
      ...activity,
      title,
      description,
      category,
      link,
    });

    Alert.alert("Sucesso", "Atividade atualizada com sucesso!");
    navigation.navigate("index");
  };

  //TODO: mostrar atividade para editar ao responsável

  //TODO: criar componente de select para opções de categoria de atividade
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
      <Text style={styles.text}>Link para acessar mais informações</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o link"
        onChangeText={setLink}
        value={link}
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
      <TouchableOpacity onPress={handleEditActivity} style={styles.button}>
        <Text style={styles.textButton}>Salvar alterações</Text>
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
    margin: 50,
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
  textButton: {
    color: "#fff",
  },
});
