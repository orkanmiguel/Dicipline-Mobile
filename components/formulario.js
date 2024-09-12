import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import { Ejercicio } from "./entrenamiento";

const data = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

export default () => {
  return (
    <ScrollView style={styles.container}>
      {data.map((val) => {
        return (
          <View style={styles.scrollView}>
            {/* <Ejercicio style={styles.exercise}></Ejercicio> */}
            <Text>{val.id}</Text>
          </View>
        );
      })}
      {/* <Ejercicio style={styles.exercise}></Ejercicio>
      <Ejercicio style={styles.exercise}></Ejercicio>
      <Ejercicio style={styles.exercise}></Ejercicio>
      <Ejercicio style={styles.exercise}></Ejercicio>
      <Ejercicio style={styles.exercise}></Ejercicio>
      <Ejercicio style={styles.exercise}></Ejercicio>
      <Ejercicio style={styles.exercise}></Ejercicio> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    /*   backgroundColor: "black", */
    flex: 1,
  },
  scrollView: {
    borderRadius: 15,
    marginTop: 6,
    /*     backgroundColor: "pink", */
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  exercise: {
    paddingTop: 10,
  },
});
