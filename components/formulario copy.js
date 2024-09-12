import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TouchableOpacity,
} from "react-native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { Ejercicio } from "./entrenamiento";

const data = [
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
];

////////******************* DB

const initializeDb = async (db) => {
  try {
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, note TEXT);
      `);
    console.log("DB connected");
  } catch (error) {
    console.log("DB initialization error:", error);
  }
};

//TODO: quitar export default para que exporter esto y no el otro componente
export default function Notes() {
  return (
    <SQLiteProvider databaseName="testapp.db" onInit={initializeDb}>
      <Todos />
    </SQLiteProvider>
  );
}

//////**************************

export function Todos() {
  //estados y arreglo de la rutina

  //***************************************** */
  //TODO: pruebas bd expo new forma
  const db = useSQLiteContext();

  const [note, setNote] = useState("");
  const [prevNotes, setPrevNotes] = useState([]);
  const [noteID, setNoteID] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    async function fetchNotes() {
      const result = await db.getAllAsync("SELECT * FROM notes");
      setPrevNotes(result);
    }
    fetchNotes();
  }, []);

  const addNote = async () => {
    let dateString = new Date().toISOString();
    let date = dateString
      .slice(0, dateString.indexOf("T"))
      .split("-")
      .reverse()
      .join("-");

    let res = await db.runAsync(
      "INSERT INTO notes (date, note) values (?, ?)",
      [date, note]
    );
    Alert.alert("Note added");
    let lastNote = [...prevNotes];
    lastNote.push({
      id: res.lastInsertRowId,
      date: date,
      note: note,
    });
    setPrevNotes(lastNote);
    setNote("");
  };
  //DataBase

  //************************************* */

  return (
    <ScrollView style={styles.container}>
      {data.map((val) => {
        return (
          <View style={styles.scrollView}>
            {/* <Ejercicio style={styles.exercise}></Ejercicio> */}
            <Text>{val.id}</Text>
            <TouchableOpacity
              onPress={addNote}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "orange",
                height: 50,
                padding: 5,
                margin: 5,
              }}
            >
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        );
      })}
      {/* <Ejercicio style={styles.exercise}></Ejercicio>
      <Ejercicio style={styles.exercise}></Ejercicio>
      <Ejercicio style={styles.exercise}></Ejercicio>
      <Ejercicio style={styles.exercise}></Ejercicio>
      <Ejercicio style={styles.exercise}></Ejercicio>
      <Ejercicio style={styles.exercise}></Ejercicio>
      <Ejercicio style={styles.exercise}></Ejercicio> */}
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
