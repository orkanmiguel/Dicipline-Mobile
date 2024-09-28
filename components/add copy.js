import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";

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

export default function Routines(props) {
  /* console.log("props function", props); */
  return (
    <SQLiteProvider databaseName="./dicipline.db" onInit={initializeDb}>
      <Todos props={props} />
    </SQLiteProvider>
  );
}

export function Todos({ props }) {
  /*  console.log("props todos", props.data); */
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

  return (
    <>
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
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="nombre"
      />
      <TextInput
        style={styles.input}
        value={serie}
        onChangeText={setSerie}
        placeholder="series"
      />
      <TextInput
        style={styles.input}
        value={reps}
        onChangeText={setReps}
        placeholder="Repeticiones"
      />
      <TextInput
        style={styles.input}
        value={rest}
        onChangeText={setRest}
        placeholder="Descanso minutos"
      />
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        placeholder="Peso KG"
      />
      <TextInput
        style={styles.input}
        value={completed}
        onChangeText={setCompleted}
        placeholder="completado"
      />
    </>
  );
}

const styles = StyleSheet.create({
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
