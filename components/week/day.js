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
  const select = props.day.selec;
  /* console.log("select", props); */
  /* const day = "lunes";
  const date = "7"; */

  return (
    <View style={styles.container}>
      {select ? (
        <>
          <View style={styles.containerDay} className="bg-red-800">
            <Text style={styles.day}>{day}</Text>
            <Text style={styles.day}>{date}</Text>
          </View>
        </>
      ) : (
        <>
          <View style={styles.containerDay} className="bg-black">
            <Text style={styles.day1}>{day}</Text>
            <Text style={styles.day1}>{date}</Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
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
    /* backgroundColor: "black", */
  },
  day: {
    /*  backgroundColor: "red", */
    borderRadius: 15,
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  day1: {
    color: "yellow",
    fontSize: 17,
    fontWeight: "bold",
  },
});
