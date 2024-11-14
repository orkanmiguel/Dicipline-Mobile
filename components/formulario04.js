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
/* import { SQLiteProvider, useSQLiteContext } from "expo-sqlite"; */
import { Ejercicio, Ejercicio02 } from "./entrenamiento";
import { StatusBar } from "expo-status-bar";
import Modal from "./modal";
import InsertADD from "./add";
import {
  AddIcon,
  CloseIcon,
  DeleteIcon,
  EditIcon,
  HomeIcon,
  SaveIcon,
} from "./icons/Icons";
import Days from "./week/day";

import * as SQLite from "expo-sqlite";

import { styled } from "nativewind";
import { rMS, rS, rV } from "./constants/responsive";

const StyledPressable = styled(Pressable);

export default function Todos() {
  const [listRoutine, setListRoutine] = useState([]);
  const [name, setName] = useState("");
  const [serie, setSerie] = useState("");
  const [reps, setReps] = useState("");
  const [rest, setRest] = useState("");
  const [weight, setWeight] = useState("");
  const [day, setDay] = useState("");
  const [completed, setCompleted] = useState();
  const [updateActive, setUpdateActive] = useState(false);
  const [updateName, setUpdateName] = useState("");

  const addRoutine = async () => {
    //agregar validacion de data.

    //TODO: ejemplo validacion para mantener los campos con datos.
    if (name == "" || serie == "") {
    } else {
      const db = await SQLite.openDatabaseAsync("dbDiciplineTest");
      await db.runAsync(
        "INSERT INTO routine (name, serie,reps,rest,weight,day,completed) values (?,?,?,?,?,?,?)",
        name,
        serie,
        reps,
        rest,
        weight,
        day,
        completed
      );

      Alert.alert("Ejercicio Agregado!");

      getList();
    }
  };

  async function getList() {
    const db = await SQLite.openDatabaseAsync("dbDiciplineTest");

    const allRows = await db.getAllAsync("SELECT * FROM routine");
    let newArray = [];
    for (const row of allRows) {
      /* console.log(row.id, row.value, row.intValue); */
      newArray.push({
        id: row.id,
        name: row.name,
        serie: row.serie,
        reps: row.reps,
        rest: row.rest,
        weight: row.weight,
        day: row.day,
        completed: row.completed,
      });
    }
    /* console.log("id reviced", newArray.id); */
    setListRoutine(newArray);
  }

  const deleteRoutine = async (id) => {
    const db = await SQLite.openDatabaseAsync("dbDiciplineTest");

    await db.runAsync("DELETE FROM routine WHERE id = ?", [id]);

    Alert.alert("Eliminado con exito");

    getList();
  };

  useEffect(() => {
    async function setup() {
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
      <Text>Nombre Ejercicio</Text>
      <TextInput
        value={name}
        style={styles.input}
        onChangeText={setName}
      ></TextInput>
      <Text>Series</Text>
      <TextInput
        value={serie}
        style={styles.input}
        onChangeText={setSerie}
      ></TextInput>

      <Button title="Add" onPress={() => addRoutine()} />
      <ScrollView>
        {listRoutine.map((item, index) => {
          return (
            <View key={index}>
              <View style={{ margin: 10 }}>
                <Ejercicio02 routine={item}>
                  {/* //TODO: Editar Rutina y configurar botones de update y no insert */}
                  <StyledPressable
                    className={"active:opacity-50"}
                    onPress={() => editRoutine(item.id)}
                  >
                    <EditIcon />
                  </StyledPressable>
                  <StyledPressable
                    className={"active:opacity-50"}
                    onPress={() => deleteRoutine(item.id)}
                  >
                    <DeleteIcon />
                  </StyledPressable>
                </Ejercicio02>
              </View>
              <Button title="Remove" onPress={() => deleteRoutine(item.id)} />
              {/*  <Button
              title="Update"
              onPress={() => update(item.name, item.number)}
            /> */}
            </View>
          );
        })}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
