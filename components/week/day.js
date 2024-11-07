import { Link } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Pressable,
} from "react-native";

import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default (props) => {
  const day = props.day.day;
  const date = props.day.date;
  /* const day = "lunes";
  const date = "7"; */

  return (
    <View style={styles.container}>
      <View style={styles.containerDay}>
        <Text style={styles.day}>{day}</Text>
        <Text style={styles.day}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginBottom: 25,
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    /*     backgroundColor: "brown", */
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
