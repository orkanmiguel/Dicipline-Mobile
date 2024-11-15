import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";

import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function () {
  const [maxReps, setMAxReps] = useState("");

  async function getList() {
    const db = await SQLite.openDatabaseAsync("dbDiciplineTest");
    const result = await db.getAllAsync(
      "SELECT (sum(reps) * sum(serie)) suma FROM routine"
    );
    console.log("result", result[0].suma);
    setMAxReps(result[0].suma);
  }

  useEffect(() => {
    async function setup() {
      /*   inserta(); */
      const db = await SQLite.openDatabaseAsync("dbDiciplineTest");

      await db.execAsync(` PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS routine (id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT, serie INTEGER, reps INTEGER, rest TEXT, weight NUMERIC,day TEXT, completed INTEGER
      );`);

      getList();
    }
    setup();
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          color: "black",
        }}
      >
        Maximo reps por semana:
      </Text>
      <Text
        style={{
          fontSize: 100,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          color: "yellow",
        }}
      >
        {String(maxReps)}
      </Text>

      <StyledPressable
        className={"active:opacity-50"}
        onPress={() => {
          getList();
        }}
      >
        <Text>Actualizar</Text>
      </StyledPressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*     backgroundColor: "red", */
    justifyContent: "center",
    alignItems: "center",
  },
});
