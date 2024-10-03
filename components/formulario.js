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
  Pressable,
} from "react-native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { Ejercicio } from "./entrenamiento";
import { StatusBar } from "expo-status-bar";
import Modal from "./modal";
import InsertADD from "./add";
import {
  AddIcon,
  CloseIcon,
  DeleteIcon,
  EditIcon,
  SaveIcon,
} from "./icons/Icons";

const initializeDb = async (db) => {
  try {
    await db.execAsync(`
      PRAGMA synchronous=OFF;
      PRAGMA count_changes=OFF;
      PRAGMA journal_mode=OFF;
      PRAGMA temp_store=MEMORY;
      CREATE TABLE IF NOT EXISTS routine (id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT, serie INTEGER, reps INTEGER, rest TEXT, weight NUMERIC,day TEXT, completed INTEGER
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
  const [day, setDay] = useState();
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
      "INSERT INTO routine (name, serie,reps,rest,weight,day,completed) values (?,?,?,?,?,?,?)",
      [name, serie, reps, rest, weight, day, completed]
    );

    Alert.alert("Ejercicio Agregado!");
    let lastRoutine = [...prevRoutine];
    lastRoutine.push({
      id: res.lastInsertRowId,
      name: name,
      serie: serie,
      reps: reps,
      rest: rest,
      weight: weight,
      day: day,
      completed: completed,
    });
    console.log("last", lastRoutine);
    setPrevRoutines(lastRoutine);
    clearInput();
    setVisibility(!visibility);
  };
  //TODO: Solo muestra muestra para editar datos del nombre y tiempo (Sera por que son string ?)
  const editRoutine = async (id) => {
    setVisible(true);
    setRoutineID(id);
    setVisibility(true);
    try {
      // Fetch the note first
      const result = await db.getFirstAsync(
        "SELECT name, serie, reps, rest, weight,day FROM routine WHERE id = ?",
        [id]
      );
      console.log("Fetched routine:", result); // Log fetched note
      console.log("serie", result.serie);

      // Then set the note
      setName(result.name);
      setSerie(result.serie);
      setReps(result.reps);
      setRest(result.rest);
      setWeight(result.weight);
      setDay(result.day);
    } catch (error) {
      console.log(error);
    }
  };

  const clearInput = () => {
    setName("");
    setSerie("");
    setReps("");
    setRest("");
    setWeight("");
    setDay("");
    setCompleted("");
  };

  const updateRoutine = async () => {
    let txtName = name;
    let txtSerie = serie;
    let txtReps = reps;
    let txtRest = rest;
    let txtWeight = weight;
    let txtDay = day;
    let txtCompleted = completed;

    /* console.log("update routine", text); */
    //TODO:Revisar esta Sintaxis de Update SQLite, para que actualice todos los campos de la tabla routine
    const result = await db.runAsync(
      "UPDATE routine set name, serie,reps,rest,weight,day,completed name = ?,serie = ?,reps = ?,rest = ?,weight = ?,day = ?,completed = ? WHERE id = ?",
      [
        txtName,
        txtSerie,
        txtReps,
        txtRest,
        txtWeight,
        txtDay,
        txtCompleted,
        routineID,
      ]
    );
    setPrevRoutines((lastRoutine) => {
      return lastRoutine.map((routine) => {
        if (routine.id === routineID) {
          return { ...routine, routine: txtName };
        }
        return routine;
      });
    });
    clearInput();
    setVisibility(!visibility);
  };

  const deleteRoutine = async (id) => {
    try {
      await db.runAsync("DELETE FROM routine WHERE id = ?", [id]);
      Alert.alert("Eliminado con exito");
      let lastRoutine = [...prevRoutine].filter((routine) => routine.id != id);
      setPrevRoutines(lastRoutine);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/*//TODO: Configuracion Modal rutina */}

      <View>
        <Modal visibility={visibility}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              /*       backgroundColor: "green", */
            }}
          >
            {visible ? (
              <Text
                style={{
                  paddingVertical: 15,
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "yellow",
                  fontSize: 32,
                  marginLeft: 6,
                }}
              >
                Editar Ejercicio
              </Text>
            ) : (
              <Text
                style={{
                  paddingVertical: 15,
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "yellow",
                  fontSize: 32,
                  marginLeft: 6,
                }}
              >
                Nuevo Ejercicio
              </Text>
            )}

            <Pressable
              onPress={() => {
                setVisibility(!visibility);
                setVisible(false);
              }}
              style={{
                alignItems: "flex-end",
                paddingRight: 6,
                paddingBottom: 10,
                /*    backgroundColor: "pink", */
              }}
            >
              <CloseIcon />
            </Pressable>
          </View>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Nombre "
          />
          <TextInput
            style={styles.input}
            value={serie}
            onChangeText={setSerie}
            placeholder="N° de Series"
          />
          <TextInput
            style={styles.input}
            value={reps}
            onChangeText={setReps}
            placeholder="Cantidad de Repeticiones"
          />
          <TextInput
            style={styles.input}
            value={rest}
            onChangeText={setRest}
            placeholder="Descanso minutos 00:00"
          />
          <TextInput
            style={styles.input}
            value={weight}
            onChangeText={setWeight}
            placeholder="Peso KG "
          />
          <TextInput
            style={styles.input}
            value={day}
            onChangeText={setDay}
            placeholder="Dia de la semana"
          />
          {/*//TODO:Cambiar Botones por pressables para mejor configuracion.  */}
          <View style={{ paddingTop: 5 }}>
            {visible ? (
              <Pressable
                onPress={updateRoutine}
                style={{
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  backgroundColor: "green",
                  marginHorizontal: 20,
                  borderRadius: 15,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  ACTUALIZAR
                </Text>
                <SaveIcon />
              </Pressable>
            ) : (
              <Pressable
                onPress={addRoutine}
                style={{
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  backgroundColor: "brown",
                  marginHorizontal: 20,
                  borderRadius: 15,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  GUARDAR
                </Text>
                <SaveIcon />
              </Pressable>
            )}

            {/*  <Button title="Guardar" onPress={addRoutine} color="brown" /> */}
            {/*  <Button title="Cerrar" onPress={() => setVisibility(!visibility)} /> */}
          </View>
        </Modal>
        <View style={{ alignItems: "flex-end", paddingEnd: 20 }}>
          <AddIcon onPress={() => pressModal()} />
        </View>

        {/*   <Button
          color="black"
          title="Agregar Rutina"
          onPress={() => pressModal()}
        /> */}
      </View>
      {/*  */}
      <ScrollView style={styles.container}>
        <View style={styles.view}>
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
                  <View style={{ margin: 10 }}>
                    <Ejercicio routine={item}>
                      {/* //TODO: Editar Rutina y configurar botones de update y no insert */}
                      <EditIcon onPress={() => editRoutine(item.id)} />
                      <DeleteIcon onPress={() => deleteRoutine(item.id)} />
                    </Ejercicio>
                  </View>
                </View>
              );
            })}
          </View>
          {/*  <StatusBar style="auto" /> */}
        </View>
      </ScrollView>
    </>
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
