import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/types";
import Header from "@/components/Header";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "Formulario">;

type Prioridade = "Baixa" | "Média" | "Alta";
const prioridades = ["Baixa", "Média", "Alta"] as Prioridade[];

const FormularioScreen = ({ navigation }: NavigationProps) => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState("Alta" as Prioridade);

  const guardar = () => {
    Keyboard.dismiss();
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#eeebeb" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Header titulo="Adicionar livro" goBack={() => navigation.goBack()} />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingHorizontal: 20, marginTop: 100 }}
      >
        <View
          style={{ backgroundColor: "#fff", borderRadius: 15, padding: 15 }}
        >
          <Text style={{ fontSize: 15, fontWeight: "500", marginBottom: 8 }}>
            Título
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#d9dae3",
              borderRadius: 12,
              paddingHorizontal: 12,
              paddingVertical: 10,
              fontSize: 15,
              marginBottom: 15,
            }}
            value={titulo}
            onChangeText={setTitulo}
            placeholder="Ex.: Nome do livro"
            placeholderTextColor="#9a9aa5"
          />

          <Text style={{ fontSize: 15, fontWeight: "500", marginBottom: 8 }}>
            Descrição
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#d9dae3",
              borderRadius: 12,
              paddingHorizontal: 12,
              paddingVertical: 10,
              fontSize: 15,
              marginBottom: 15,
              height: 75,
            }}
            value={descricao}
            onChangeText={setDescricao}
            placeholder="Detalhes do livro (opcional)"
            placeholderTextColor="#9a9aa5"
            multiline
            textAlignVertical="top"
          />

          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              marginBottom: 8,
              marginTop: 10,
            }}
          >
            Prioridade
          </Text>
          <View style={{ flexDirection: "row", gap: 8 }}>
            {prioridades.map((p) => {
              const ativa = p === prioridade;
              return (
                <TouchableOpacity
                  key={p}
                  onPress={() => setPrioridade(p)}
                  style={{
                    flex: 1,
                    paddingVertical: 10,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: ativa ? "#3d5ce4" : "#d9dae3",
                    backgroundColor: ativa ? "#e6e6fa" : "#fff",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 14, color: ativa ? "#3d5ce4" : "#444" }}
                  >
                    {p}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          gap: 10,
          marginHorizontal: 15,
          marginTop: 10,
          marginBottom: 60,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flex: 1,
            backgroundColor: "#fff",
            borderRadius: 15,
            borderWidth: 1,
            borderColor: "#d9dae3",
            paddingVertical: 15,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={guardar}
          style={{
            flex: 1,
            backgroundColor: "#4a43c9",
            borderRadius: 15,
            paddingVertical: 15,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
            Guardar livro
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default FormularioScreen;
