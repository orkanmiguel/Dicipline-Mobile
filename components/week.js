import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerDay}>
        <Text style={styles.day}>Dia 1</Text>
      </View>
      <View style={styles.containerDay}>
        <Text style={styles.day}>Dia 2</Text>
      </View>
      <View style={styles.containerDay}>
        <Text style={styles.day}>Dia 3</Text>
      </View>
      <View style={styles.containerDay}>
        <Text style={styles.day}>Dia 4</Text>
      </View>
      <View style={styles.containerDay}>
        <Text style={styles.day}>Dia 5</Text>
      </View>
      <View style={styles.containerDay}>
        <Text style={styles.day}>Dia 6</Text>
      </View>
      <View style={styles.containerDay}>
        <Text style={styles.day}>Dia 7</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    /*     backgroundColor: "brown", */
    marginHorizontal: 20,
  },
  containerDay: {
    /*  backgroundColor: "brown", */
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "brown",
    fontSize: 20,
    width: 60,
    height: 60,
  },
  day: {
    color: "yellow",
    fontSize: 18,
    fontWeight: "bold",
  },
});
