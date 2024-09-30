import Screen from "../../components/screens/Screen";
import { View, Text, StyleSheet } from "react-native";
import Titulo from "../../components/titulo";

export default function Statistics() {
  return (
    <Screen>
      <Titulo />
      <View style={styles.titulo}>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          Estadisticas
        </Text>
      </View>
      <View style={{ flex: 2 }}>
        <Text style={styles.maximos}>Max de Pull ups : 100</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  titulo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  maximos: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
