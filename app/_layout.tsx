import "react-native-reanimated";
import {
  DarkTheme,
  DefaultTheme,
  NavigationIndependentTree,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "@/contexts/authContext";
import { ActivityProvider } from "@/contexts/activityContext";

import Home from "./index";
import LoginToCreate from "@/screens/loginToCreate";
import CreateActivity from "@/screens/createActivity";
import actionOnActivities from "@/screens/actionOnActivities";
import ManageActivities from "@/screens/manageActivities";
import EditActivity from "@/screens/editActivity";
import ListActivities from "@/screens/listActivities";
import DetailsActivity from "@/screens/detailsActivity";

const Stackk = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <ActivityProvider>
          <NavigationIndependentTree>
            <NavigationContainer>
              <Stackk.Navigator>
                <Stackk.Screen
                  name="index"
                  component={Home}
                  options={{
                    title: ".EXES",
                    headerTitleAlign: "center",
                    headerBackVisible: false,
                    headerStyle: { backgroundColor: "#69db7c" },
                    headerTitleStyle: { color: "#000", fontWeight: "bold" },
                    statusBarStyle: "dark",
                  }}
                />
                <Stackk.Screen
                  name="research"
                  component={ListActivities}
                  options={{
                    title: "Pesquisas",
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: "#69db7c" },
                    headerTitleStyle: { color: "#000", fontWeight: "bold" },
                    statusBarStyle: "dark",
                  }}
                />
                <Stackk.Screen
                  name="extensions"
                  component={ListActivities}
                  options={{
                    title: "Extensões",
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: "#69db7c" },
                    headerTitleStyle: { color: "#000", fontWeight: "bold" },
                    statusBarStyle: "dark",
                  }}
                />
                <Stackk.Screen
                  name="events"
                  component={ListActivities}
                  options={{
                    title: "Eventos",
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: "#69db7c" },
                    headerTitleStyle: { color: "#000", fontWeight: "bold" },
                    statusBarStyle: "dark",
                  }}
                />
                <Stackk.Screen
                  name="notices"
                  component={ListActivities}
                  options={{
                    title: "Editais",
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: "#69db7c" },
                    headerTitleStyle: { color: "#000", fontWeight: "bold" },
                    statusBarStyle: "dark",
                  }}
                />

                <Stackk.Screen
                  name="loginToCreate"
                  component={LoginToCreate}
                  options={{
                    title: "Login",
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: "#69db7c" },
                    headerTitleStyle: { color: "#000", fontWeight: "bold" },
                    statusBarStyle: "dark",
                  }}
                />
                <Stackk.Screen
                  name="actionOnActivities"
                  component={actionOnActivities}
                  options={{
                    title: "Gerencie as Atividades",
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: "#69db7c" },
                    headerTitleStyle: { color: "#000", fontWeight: "bold" },
                    statusBarStyle: "dark",
                  }}
                />
                <Stackk.Screen
                  name="createActivity"
                  component={CreateActivity}
                  options={{
                    title: "Cadastrar Atividade",
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: "#69db7c" },
                    headerTitleStyle: { color: "#000", fontWeight: "bold" },
                    statusBarStyle: "dark",
                  }}
                />
                <Stackk.Screen
                  name="manageActivities"
                  component={ManageActivities}
                  options={{
                    title: "Gerenciar Atividades",
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: "#69db7c" },
                    headerTitleStyle: { color: "#000", fontWeight: "bold" },
                    statusBarStyle: "dark",
                  }}
                />
                <Stackk.Screen
                  name="editActivity"
                  component={EditActivity}
                  options={{
                    title: "Editar Atividade",
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: "#69db7c" },
                    headerTitleStyle: { color: "#000", fontWeight: "bold" },
                    statusBarStyle: "dark",
                  }}
                />
                <Stackk.Screen
                  name="detailsActivity"
                  component={DetailsActivity}
                  options={{
                    title: "Atividade",
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: "#69db7c" },
                    headerTitleStyle: { color: "#000", fontWeight: "bold" },
                    statusBarStyle: "dark",
                  }}
                />
              </Stackk.Navigator>
            </NavigationContainer>
          </NavigationIndependentTree>
          <StatusBar style="dark" backgroundColor="#69db7c" />
        </ActivityProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
