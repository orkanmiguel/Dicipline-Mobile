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
import { rMS, rS, rV } from "../constants/responsive";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default (props) => {
  const day = props.day.day;
  const date = props.day.date;
  /* const day = "lunes";
  const date = "7"; */

  return (
    <View style={styles.containerDay}>
      <Text style={styles.day}>{day}</Text>
      <Text style={styles.day}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerDay: {
    /*  backgroundColor: "brown", */
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "brown",
    width: rMS(44),
    height: rMS(48),
    marginHorizontal: rMS(0.5),
    backgroundColor: "black",
  },
  day: {
    color: "yellow",
    fontSize: 17,
    fontWeight: "bold",
  },
});
