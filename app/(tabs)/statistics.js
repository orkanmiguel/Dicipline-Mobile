import Screen from "../../components/screens/Screen";
import { View, Text, StyleSheet } from "react-native";
import Titulo from "../../components/titulo";
import APP from "../../components/formulario03";
export default function Statistics() {
  return (
    <Screen>
      <View style={styles.container}>
        <Titulo />

        <APP />
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
