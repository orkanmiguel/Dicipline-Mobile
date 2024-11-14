import { View, Text, StyleSheet } from "react-native";
import Screen from "../../components/screens/Screen";
import Titulo from "../../components/titulo";
import APP from "../../components/testSQL";

export default function Cronometer() {
  return (
    <Screen>
      <Titulo />
      <View style={styles.container}>
        <Text style={{ color: "white" }}>Cronometro</Text>
        <APP />
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
