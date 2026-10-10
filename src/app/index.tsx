import { RootStackParamList } from "@/navigation/types";
import { NativeStackScreenProps } from "expo-router/build/react-navigation/native-stack";
import { View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

const App = ({ navigation }: Props) => {
  return <View></View>;
};

export default App;
