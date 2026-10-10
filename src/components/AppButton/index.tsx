import { Text, TouchableOpacity } from "react-native";

type AppButtonProps = {
  title: string;
  onPress: () => void;
};

const AppButton = ({ title, onPress }: AppButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        paddingVertical: 2,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        borderRadius: 5,
      }}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
