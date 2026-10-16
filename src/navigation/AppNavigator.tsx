import HomeScreen from "@/features/Home/HomeScreen";
import TarefasScreen from "@/features/ListaTarefas/TarefasScreen";
import { createNativeStackNavigator } from "expo-router/build/react-navigation/native-stack";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

// Expo Router already provides the root NavigationContainer,
// so this navigator must not be wrapped in another one.
export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Tarefas" component={TarefasScreen} />
    </Stack.Navigator>
  );
}
