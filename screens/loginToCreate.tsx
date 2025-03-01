import { useAuth } from "@/contexts/authContext";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function LoginToCreate() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { login } = useAuth();
  const [registration, setRegistration] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [secureText, setSecureText] = React.useState(true);

  const handleLogin = () => {
    if (!registration || !password) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    login({ id: parseInt(registration), password: password });
    navigation.navigate("actionOnActivities");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça login</Text>
      <View style={styles.inputCredentials}>
        <Text>Sipac:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua credencial"
          value={registration}
          onChangeText={setRegistration}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputCredentials}>
        <Text>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={secureText}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Text style={{ color: "#2754a8", textDecorationLine: "underline" }}>
            {secureText ? "Mostrar senha" : "Ocultar senha"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={handleLogin}>
          <Text style={{ color: "#fff" }}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
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
  buttons: {
    backgroundColor: "#40c057",
    borderRadius: 8,
    margin: 15,
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  inputCredentials: {
    width: "100%",
    marginLeft: 55,
  },
});
