import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { Ejercicio } from "./entrenamiento";
import { StatusBar } from "expo-status-bar";

const initializeDb = async (db) => {
  try {
    await db.execAsync(`
      PRAGMA synchronous=OFF;
      PRAGMA count_changes=OFF;
      PRAGMA journal_mode=OFF;
      PRAGMA temp_store=MEMORY;
      CREATE TABLE IF NOT EXISTS routine (id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT, serie INTEGER, reps INTEGER
      );
      `);
    console.log("DB connected");
  } catch (error) {
    console.log("DB initialization error:", error);
  }
};

export default function Routines() {
  return (
    <SQLiteProvider databaseName="./dicipline.db" onInit={initializeDb}>
      <Todos />
    </SQLiteProvider>
  );
}

/* const data = [
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
]; */

export function Todos() {
  const db = useSQLiteContext();

  const [routine, setRoutine] = useState("");
  const [serie, setSerie] = useState();
  const [reps, setReps] = useState();
  const [prevRoutine, setPrevRoutines] = useState([]);
  const [routineID, setRoutineID] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    async function fetchRoutine() {
      const result = await db.getAllAsync("SELECT * FROM routine");
      setPrevRoutines(result);
      console.log("resultado bd:", result);
    }
    fetchRoutine();
  }, []);

  const addRoutine = async () => {
    /*   let dateString = new Date().toISOString();
    let date = dateString
      .slice(0, dateString.indexOf("T"))
      .split("-")
      .reverse()
      .join("-"); */
    let res = await db.runAsync(
      "INSERT INTO routine (name, serie,reps) values (?,?,?)",
      [routine, serie, reps]
    );

    Alert.alert("Routina added");
    let lastRoutine = [...prevRoutine];
    lastRoutine.push({
      id: res.lastInsertRowId,
      routine: routine,
      serie: serie,
      reps: reps,
    });
    setPrevRoutines(lastRoutine);
    setRoutine("");
  };

  const editRoutine = async (id) => {
    setRoutineID(id);
    setVisible(true);
    try {
      // Fetch the note first
      const result = await db.getFirstAsync(
        "SELECT name FROM routine WHERE id = ?",
        [id]
      );
      console.log("Fetched routine:", result.routine); // Log fetched note

      // Then set the note
      setRoutine(result.routine);
    } catch (error) {
      console.log(error);
    }
  };

  const updateRoutine = async () => {
    let text = routine;
    const result = await db.runAsync(
      "UPDATE routine set name = ? WHERE id = ?",
      [text, routineID]
    );
    setPrevRoutines((lastRoutine) => {
      return lastRoutine.map((routine) => {
        if (routine.id === routineID) {
          return { ...routine, routine: text };
        }
        return routine;
      });
    });
    setRoutine("");
    setVisible(false);
  };

  const deleteRoutine = async (id) => {
    try {
      await db.runAsync("DELETE FROM routine WHERE id = ?", [id]);
      Alert.alert("Routine deleted");
      let lastRoutine = [...prevRoutine].filter((routine) => routine.id != id);
      setPrevRoutines(lastRoutine);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text
          style={{
            paddingVertical: 10,
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          TEST ROUTINE ADD
        </Text>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            padding: 5,
            width: "100%",
          }}
          value={routine}
          onChangeText={setRoutine}
          placeholder="nombre"
        />
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            padding: 5,
            width: "100%",
          }}
          value={serie}
          onChangeText={setSerie}
          placeholder="series"
        />
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            padding: 5,
            width: "100%",
          }}
          value={reps}
          onChangeText={setReps}
          placeholder="Repeticiones"
        />
        {visible ? (
          <Button title="update" onPress={updateRoutine} color="blue" />
        ) : (
          <Button title="submit" onPress={addRoutine} color="red" />
        )}
        <View>
          {prevRoutine.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: "100%",
                  padding: 10,
                  backgroundColor: "#ffe",
                  marginVertical: 10,
                }}
              >
                <View>
                  <Text style={{ fontSize: 15, fontStyle: "italic" }}>
                    {item.routine}
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>
                    {item.serie}
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>
                    {item.reps}
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <TouchableOpacity style={{ margin: 5 }}>
                    <Text
                      style={{
                        backgroundColor: "red",
                        padding: 10,
                        color: "white",
                      }}
                      onPress={() => deleteRoutine(item.id)}
                    >
                      Del
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ margin: 5 }}>
                    <Text
                      style={{
                        backgroundColor: "blue",
                        padding: 10,
                        color: "white",
                      }}
                      onPress={() => editRoutine(item.id)}
                    >
                      Edit
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

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

/* await db.execAsync(`
  PRAGMA synchronous=OFF;
  PRAGMA count_changes=OFF;
  PRAGMA journal_mode=OFF;
  PRAGMA temp_store=MEMORY;
  CREATE TABLE IF NOT EXISTS routine (id INTEGER PRIMARY KEY AUTOINCREMENT,
   name TEXT,
   series INTEGER,
   reps INTEGER,
   rest TEXT,
   weight NUMERIC,
   completed INTEGER
  );
  `); */
