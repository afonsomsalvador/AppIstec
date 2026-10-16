import { Filtro, Tarefa } from "@/app/types";
import AppButton from "@/components/AppButton";
import Card from "@/components/Card";
import { RootStackParamList } from "@/navigation/types";
import { NativeStackScreenProps } from "expo-router/build/react-navigation/native-stack";
import { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const data = [
  {
    id: "1",
    title: "Tarefa 1",
    concluida: false,
  },
  {
    id: "2",
    title: "Tarefa 2",
    concluida: false,
  },
  {
    id: "3",
    title: "Tarefa 3",
    concluida: true,
  },
] as Array<Tarefa>;

type NavigationProps = NativeStackScreenProps<RootStackParamList, "Tarefas">;

const TarefasScreen = ({ navigation }: NavigationProps) => {
  const [contador, setContador] = useState(0);
  const [tarefas, setTarefas] = useState(data as Array<Tarefa>); // Array<Tarefa> | Tarefa[]
  const [novaTarefa, setNovaTarefa] = useState("");
  const [filtro, setFiltro] = useState<Filtro>("todas"); // useState("todas" as Filtro);
  const tarefasVisiveis = () => {
    if (filtro === "pendentes") {
      return tarefas.filter((t) => !t.concluida);
    }
    if (filtro === "concluidas") {
      return tarefas.filter((t) => t.concluida);
    }
    return tarefas;
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <Image
          source={require("@/assets/images/arrow-right.png")}
          style={{ width: 40, height: 40 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
          Tarefas
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          marginTop: 5,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          value={novaTarefa}
          onChangeText={setNovaTarefa}
          placeholder="Digite a nova tarefa"
        />
        <AppButton
          onPress={() => {
            setTarefas([
              ...tarefas,
              {
                id: (tarefas.length + 1).toString(),
                title: novaTarefa,
                concluida: false,
              },
            ]);
            setNovaTarefa("");
          }}
          title="Adicionar Tarefa"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          marginTop: 5,
          justifyContent: "flex-start",
        }}
      >
        <AppButton onPress={() => setFiltro("todas")} title="Todas" />
        <AppButton onPress={() => setFiltro("concluidas")} title="Concluídas" />
        <AppButton onPress={() => setFiltro("pendentes")} title="Pendentes" />
      </View>
      <FlatList
        data={tarefasVisiveis()}
        style={{ marginHorizontal: 10 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item: tarefa }) => (
          <Card
            onConcluir={() =>
              setTarefas(
                tarefas.map((t) =>
                  t.id === tarefa.id ? { ...t, concluida: !t.concluida } : t,
                ),
              )
            }
            onDelete={() =>
              setTarefas(tarefas.filter((t) => t.id !== tarefa.id))
            }
            title={tarefa.title}
            concluida={tarefa.concluida}
            onTap={() => navigation.navigate("Detalhe", { tarefa: tarefa })}
          />
        )}
      />
    </View>
  );
};

export default TarefasScreen;
