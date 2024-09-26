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
import Modal from "./modal";
import InsertADD from "./add";

const initializeDb = async (db) => {
  try {
    await db.execAsync(`
      PRAGMA synchronous=OFF;
      PRAGMA count_changes=OFF;
      PRAGMA journal_mode=OFF;
      PRAGMA temp_store=MEMORY;
      CREATE TABLE IF NOT EXISTS routine (id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT, serie INTEGER, reps INTEGER, rest TEXT, weight NUMERIC, completed INTEGER
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

  const [name, setName] = useState("");
  const [serie, setSerie] = useState();
  const [reps, setReps] = useState();
  const [rest, setRest] = useState("");
  const [weight, setWeight] = useState();
  const [completed, setCompleted] = useState();
  const [prevRoutine, setPrevRoutines] = useState([]);
  const [routineID, setRoutineID] = useState("");
  const [visible, setVisible] = useState(false);

  const [visibility, setVisibility] = useState(false);

  const pressModal = () => {
    setVisibility(true);
  };
  useEffect(() => {
    async function fetchRoutine() {
      const result = await db.getAllAsync("SELECT * FROM routine");
      setPrevRoutines(result);
      /* console.log("resultado bd:", result); */
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
      "INSERT INTO routine (name, serie,reps,rest,weight,completed) values (?,?,?,?,?,?)",
      [name, serie, reps, rest, weight, completed]
    );

    Alert.alert("Routina added");
    let lastRoutine = [...prevRoutine];
    lastRoutine.push({
      id: res.lastInsertRowId,
      name: name,
      serie: serie,
      reps: reps,
      rest: rest,
      weight: weight,
      completed: completed,
    });
    console.log("last", lastRoutine);
    setPrevRoutines(lastRoutine);
    setName("");
    setSerie("");
    setReps("");
    setRest("");
    setWeight("");
    setCompleted("");
  };

  const editRoutine = async (id) => {
    setRoutineID(id);
    setVisibility(true);
    try {
      // Fetch the note first
      const result = await db.getFirstAsync(
        "SELECT name, serie, reps, rest, weight FROM routine WHERE id = ?",
        [id]
      );
      console.log("Fetched routine:", result.name); // Log fetched note

      // Then set the note
      setName(result.name);
      setSerie(result.serie);
      setReps(result.reps);
      setRest(result.rest);
      setWeight(result.weight);
      setCompleted(result.completed);
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
    setName("");
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
      <View style={styles.view}>
        <Modal visibility={visibility}>
          <InsertADD data={[name, serie, reps, rest, weight]} />
          <Button
            title="Cerrar"
            onPress={() => setVisibility(!visibility)}
          ></Button>
        </Modal>
        <View>
          {prevRoutine.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: "100%",
                  padding: 10,
                  /* backgroundColor: "#ffe", */
                  marginVertical: 10,
                }}
              >
                <View>
                  <Ejercicio routine={item} />
                </View>
                {/* <View
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
                </View> */}
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
  //TODO: Revisar para que el formulariom quede centrado, en un modal.
  /*   view: {
    justifyContent: "center",
    alignItems: "center",
  }, */
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
  input: {
    backgroundColor: "orange",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    margin: 5,
    width: "80%",
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
