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

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Ejercicio style={styles.exercise}></Ejercicio>
        <Ejercicio style={styles.exercise}></Ejercicio>
        <Ejercicio style={styles.exercise}></Ejercicio>
        <Ejercicio style={styles.exercise}></Ejercicio>
        <Ejercicio style={styles.exercise}></Ejercicio>
        <Ejercicio style={styles.exercise}></Ejercicio>
        <Ejercicio style={styles.exercise}></Ejercicio>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
