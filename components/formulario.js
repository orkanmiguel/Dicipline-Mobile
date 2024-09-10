import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Ejercicio } from "./entrenamiento";

export default () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titulo}>Ejercicios dia</Text>
        <View style={styles.containerExercise}>
          <Ejercicio></Ejercicio>
          <Ejercicio></Ejercicio>
          <Ejercicio></Ejercicio>
          <Ejercicio></Ejercicio>
          <Ejercicio></Ejercicio>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titulo: {
    color: "white",
    fontSize: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingBottom: 50,
  },
  container: {
    flex: 4,
    justifyContent: "center",
    alignContent: "space-evenly",
    alignItems: "stretch",
    paddingBottom: 15,
  },
  text: {
    color: "white",
    fontSize: 18,
    borderColor: "black",
  },
  containerExercise: {
    backgroundColor: "pink",
    justifyContent: "space-between",
    width: 180,
    height: 1000,
  },
});
