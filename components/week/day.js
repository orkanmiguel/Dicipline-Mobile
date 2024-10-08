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

export default () => {
  const day = "lunes";
  const date = "7";

  return (
    <View style={styles.container}>
      <StyledPressable className={"active:opacity-50"}>
        <View style={styles.containerDay}>
          <Text style={styles.day}>
            {date}
            {"\n"}
            {date}
          </Text>
        </View>
      </StyledPressable>
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
