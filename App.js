import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista de Usuarios" component={ListUser} />
        <Stack.Screen name="CreateUser" component={CreateUser} />
        <Stack.Screen name="Detalle de Usuarios" component={DetailUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} //Fin export App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
