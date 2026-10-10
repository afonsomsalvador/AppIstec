import Header from "@/components/Header";
import { RootStackParamList } from "@/navigation/types";
import { NativeStackScreenProps } from "expo-router/build/react-navigation/native-stack";
import { useState } from "react";
import { Button, Image, ScrollView, Text, TextInput } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

const HomeScreen = ({ navigation }: Props) => {
  const nome = "Afonso";
  const idade = 25;
  const [email, setEmail] = useState<string>("" as string); // 2 formas de tipificar
  const [curso, setCurso] = useState("Engenharia Informatica");
  const valida = curso.length > 0;
  return (
    <ScrollView>
      <Header title="Home Screen" />
      <Text style={{ fontSize: 18 }}>{nome}</Text>
      <Text>{idade + 10}</Text>
      {/* <Text>{text}</Text> */}
      <Text>{curso}</Text>
      <Text>{email}</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Digite o email"
      />
      <Button onPress={() => navigation.navigate("Tarefas")} title="Button1" />
      {/* Imagem remota */}
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={{ width: 150, height: 150 }}
      />
      {/* Imagem local */}
      <Image
        source={require("@/assets/images/icon.png")}
        style={{ width: 150, height: 150 }}
      />
      {/* Operador ternário */}
      <Text>{valida ? "Válido" : "Inválido"}</Text>
      <Text style={{ fontSize: 20 }}>
        Bla bla bla text <Text style={{ fontWeight: "bold" }}>longo</Text>
      </Text>
    </ScrollView>
  );
};

export default HomeScreen;
