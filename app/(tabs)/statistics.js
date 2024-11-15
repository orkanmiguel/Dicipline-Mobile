import Screen from "../../components/screens/Screen";
import { View, Text, StyleSheet } from "react-native";
import Titulo from "../../components/titulo";
import APP from "../../components/pages/estatus";
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
