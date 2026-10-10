export interface BotaoProps {
  text: string;
  onPress: () => void;
}

export type Tarefa = {
  id: string;
  title: string;
  concluida: boolean;
};

export type Filtro = "todas" | "concluidas" | "pendentes";
