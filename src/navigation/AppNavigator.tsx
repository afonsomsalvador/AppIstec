import HomeScreen from "@/features/Home/HomeScreen";
import TarefasScreen from "@/features/ListaTarefas/TarefasScreen";
import { NavigationContainer } from "expo-router/build/react-navigation";
import { createNativeStackNavigator } from "expo-router/build/react-navigation/native-stack";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Tarefas" component={TarefasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
