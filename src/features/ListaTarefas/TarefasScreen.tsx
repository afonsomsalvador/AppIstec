import { Filtro, Tarefa } from "@/app/types";
import AppButton from "@/components/AppButton";
import Card from "@/components/Card";
import { RootStackParamList } from "@/navigation/types";
import { NativeStackScreenProps } from "expo-router/build/react-navigation/native-stack";
import { useState } from "react";
import { FlatList, TextInput, View } from "react-native";

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

type Props = NativeStackScreenProps<RootStackParamList, "Tarefas">;

const TarefasScreen = ({ navigation }: Props) => {
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
          />
        )}
      />
    </View>
  );
};

export default TarefasScreen;
