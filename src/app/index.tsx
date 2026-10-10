import AppButton from "@/components/AppButton";
import Card from "@/components/Card";
import Header from "@/components/Header";
import { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { BotaoProps, Tarefa } from "./types";

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

const HomeScreen = ({ onPress, text }: BotaoProps) => {
  const nome = "Afonso";
  const idade = 25;
  const [email, setEmail] = useState<string>("" as string); // 2 formas de tipificar
  const [curso, setCurso] = useState("Engenharia Informatica");
  const valida = curso.length > 0;
  const renderAllContent = true;
  const [contador, setContador] = useState(0);
  const [tarefas, setTarefas] = useState(data as Array<Tarefa>); // Array<Tarefa> | Tarefa[]
  const [novaTarefa, setNovaTarefa] = useState("");

  console.log(email);
  return (
    <View
      style={[
        {
          flex: 1,
          borderWidth: 5,
          // alignItems: "center",
          // justifyContent: "center",
        },
        // valida && { backgroundColor: "#000" },
      ]}
    >
      <ScrollView>
        <Header title="Home Screen" />
        {!renderAllContent && (
          <>
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
            <Button onPress={() => setEmail(email)} title="Button1" />
            {/* Imagem remota */}
            <Image
              source={{ uri: "https://via.placeholder.com/150" }}
              style={{ width: 150, height: 150 }}
            />
            {/* Imagem local */}
            <Image
              source={require("./../../assets/images/icon.png")}
              style={{ width: 150, height: 150 }}
            />
            {/* Operador ternário */}
            <Text>{valida ? "Válido" : "Inválido"}</Text>
            <Text style={{ fontSize: 20 }}>
              Bla bla bla text <Text style={{ fontWeight: "bold" }}>longo</Text>
            </Text>
            <AppButton onPress={onPress} title={text} />
            <TouchableOpacity onPress={() => setContador(contador + 1)}>
              <Text>Contador: {contador}</Text>
            </TouchableOpacity>
          </>
        )}
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
        <FlatList
          data={tarefas}
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
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
