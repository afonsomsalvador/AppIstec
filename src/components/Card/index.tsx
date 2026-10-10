import AppButton from "@/components/AppButton";
import { Text, View } from "react-native";

type CardProps = {
  title: string;
  concluida: boolean;
  onConcluir: () => void;
  onDelete: () => void;
};

const Card = ({ title, concluida, onConcluir, onDelete }: CardProps) => {
  return (
    <View
      style={{
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: "#2b362d",
        backgroundColor: "#79977e",
        borderRadius: 8,
      }}
    >
      <Text
        style={[
          { color: "#fff", fontWeight: "bold", fontSize: 16 },
          concluida && { textDecorationLine: "line-through" },
        ]}
      >
        {title}
      </Text>
      <Text style={{ fontWeight: "bold" }}>
        {concluida ? "Concluída" : "Pendente"}
      </Text>
      <View style={{ flexDirection: "row", gap: 10, marginTop: 5 }}>
        <AppButton
          onPress={onConcluir}
          title={concluida ? "Desmarcar" : "Marcar concluída"}
        />
        <AppButton onPress={onDelete} title="Eliminar" />
      </View>
    </View>
  );
};

export default Card;
