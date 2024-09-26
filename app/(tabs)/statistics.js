import Screen from "../../components/screens/Screen";
import { View, Text, StyleSheet } from "react-native";
import Titulo from "../../components/titulo";

export default function Statistics() {
  return (
    <Screen>
      <Titulo />
      <View style={styles.container}>
        <Text style={{ color: "white" }}>Estadisticas</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
