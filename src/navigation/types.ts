import { Tarefa } from "@/app/types";

export type RootStackParamList = {
  HomeScreen: undefined;
  Tarefas: undefined;
  Detalhe: { tarefa: Tarefa };
};
