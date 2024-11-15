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
import { Ejercicio } from "./entrenamiento";
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
import createWeek from "./week/createWeek";
import * as SQLite from "expo-sqlite";

import { styled } from "nativewind";
import { rMS, rS, rV } from "./constants/responsive";
import { vs } from "react-native-size-matters";

const StyledPressable = styled(Pressable);

export default function Todos() {
  /*   const db = useSQLiteContext(); */

  const [name, setName] = useState("");
  const [serie, setSerie] = useState("");
  const [reps, setReps] = useState("");
  const [rest, setRest] = useState("");
  const [weight, setWeight] = useState("");
  const [day, setDay] = useState("");
  const [completed, setCompleted] = useState();
  const [prevRoutine, setPrevRoutines] = useState([]);
  const [routineID, setRoutineID] = useState("");
  const [date, setDate] = useState("");
  const [visible, setVisible] = useState(false);

  const weekData = createWeek.createWeek;
  console.log("createWeek", weekData);
  //TODO: esta variable sera la encargada de cargar los dias segun su numero.
  const [prevDay, setPrevDay] = useState([]);

  const [visibility, setVisibility] = useState(false);

  const pressModal = async () => {
    setVisibility(true);
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
    console.log("id reviced", newArray.id);
    setPrevRoutines(newArray);
  }
  /*   useEffect(() => {
    async function fetchRoutine() {
      const result = await db.getAllAsync("SELECT * FROM routine");
      setPrevRoutines(result);
      console.log("resultado bd:", result);
    }
    fetchRoutine();
  }, []); */

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
        date,
        completed
      );

      Alert.alert("Ejercicio Agregado!");

      /* getList(); */
      SelectDay(date);
      clearInput();
      setVisibility(!visibility);
      setVisible(false);
    }
  };

  /* getList();
      clearInput();
      setVisibility(!visibility);
      setVisible(false); */
  /*   //TODO:Insercion basica para ver como se comporta con un delete
  const inserta = async () => {
    const db = await SQLite.openDatabaseAsync("dbDiciplineTest");

    await db.runAsync(
      "INSERT INTO routine (name, serie,reps,rest,weight,day,completed) values (?,?,?,?,?,?,?)",
      ("pull ups", "3", "10", "3:00", "10 kg", "lunes", "0")
    );

    getList();
  }; */
  /*   inserta(); */

  //TODO: Solo muestra muestra para editar datos del nombre y tiempo (Sera por que son string ?)
  const editRoutine = async (id) => {
    setVisible(true);
    setRoutineID(id);
    setVisibility(true);

    const db = await SQLite.openDatabaseAsync("dbDiciplineTest");
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
  //TODO: update rutina //////////////////////////////////////////////

  async function updateRoutine() {
    if (name == "" || serie == "") {
    } else {
      const db = await SQLite.openDatabaseAsync("dbDiciplineTest");

      await db.runAsync(
        "UPDATE routine set  name = ?,serie = ?,reps = ?,rest = ?,weight = ?,day = ?,completed = ? WHERE id = ?",
        name,
        serie,
        reps,
        rest,
        weight,
        day,
        completed,
        routineID
      );

      /*    getList(); */
      SelectDay(date);
      clearInput();
      setVisibility(!visibility);
      setVisible(false);
    }
  }

  const updateRoutinee = async () => {
    let txtName = name;
    let txtSerie = serie;
    let txtReps = reps;
    let txtRest = rest;
    let txtWeight = weight;
    let txtDay = day;
    let txtCompleted = completed;

    const db = await SQLite.openDatabaseAsync("dbDiciplineTest");
    /* console.log("update routine", text); */
    //TODO:Revisar esta Sintaxis de Update SQLite, para que actualice todos los campos de la tabla routine
    const result = await db.runAsync(
      "UPDATE routine set  name = ?,serie = ?,reps = ?,rest = ?,weight = ?,day = ?,completed = ? WHERE id = ?",
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
          return {
            ...routine,
            name: txtName,
            serie: txtSerie,
            reps: txtReps,
            rest: txtRest,
            weight: txtWeight,
            day: txtDay,
            completed: txtCompleted,
          };
        }
        console.log("routine value", routine);
        return routine;
      });
    });
    Alert.alert("Editado con exito");
    setName(txtName);
    setSerie(txtSerie);
    setReps(txtReps);
    setRest(txtRest);
    setWeight(txtWeight);
    setDay(txtDay);

    clearInput();
    setVisibility(!visibility);
  };
  //TODO: termino update rutina //////////////////////////////////////////////

  const deleteRoutine = async (id) => {
    const db = await SQLite.openDatabaseAsync("dbDiciplineTest");

    await db.runAsync("DELETE FROM routine WHERE id = ?", [id]);

    Alert.alert("Eliminado con exito");
    SelectDay(date);
    /*  getList(); */
  };

  const SelectDay = async (getDay) => {
    //TODO:Aca se debe llamar la informacion segun el dia de la semana, para mostrar la rutina.
    console.log("Select Day", getDay, day);
    if (getDay === "Lun") {
      /* day = "Lunes"; */
      /*       setDay = "Lunes"; */
      getDay = "Lunes";
    }
    if (getDay === "Mar") {
      /* day = "Martes"; */
      /*   setDay = "Martes"; */
      getDay = "Martes";
    }
    if (getDay === "Mie") {
      /*  day = "Miercoles"; */
      /*     setDay = "Miercoles"; */
      getDay = "Miercoles";
    }
    if (getDay === "Jue") {
      /*   day = "Jueves"; */
      /*     setDay = "Jueves"; */
      getDay = "Jueves";
    }
    if (getDay === "Vie") {
      /* day = "Viernes"; */
      /*     setDay = "Viernes"; */
      getDay = "Viernes";
    }
    if (getDay === "Sab") {
      /*      setDay = "Sabado"; */
      getDay = "Sabado";
    }
    if (getDay === "Dom") {
      /* setDay = "Domingo"; */
      getDay = "Domingo";
    }

    const db = await SQLite.openDatabaseAsync("dbDiciplineTest");

    const allRows = await db.getAllAsync(
      "SELECT * FROM routine WHERE day = ?",
      [getDay]
    );
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
    console.log("id reviced", newArray.id);
    setPrevRoutines(newArray);
    setDate(getDay);
    /*  console.log("date", date); */
  };

  useEffect(() => {
    async function setup() {
      /*   inserta(); */
      const db = await SQLite.openDatabaseAsync("dbDiciplineTest");

      await db.execAsync(` PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS routine (id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT, serie INTEGER, reps INTEGER, rest TEXT, weight NUMERIC,day TEXT, completed INTEGER
      );`);

      SelectDay("Lun");
    }
    setup();
  }, []);

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

            <StyledPressable
              className={"active:opacity-50"}
              onPress={() => {
                setVisibility(!visibility);
                setVisible(false);
                clearInput();
              }}
              style={{
                alignItems: "flex-end",
                paddingRight: 6,
                paddingBottom: 10,
                /*    backgroundColor: "pink", */
              }}
            >
              <CloseIcon />
            </StyledPressable>
          </View>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Nombre"
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

          <View style={{ paddingTop: 5 }}>
            {visible ? (
              <StyledPressable
                className={"active:opacity-50"}
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
              </StyledPressable>
            ) : (
              <StyledPressable
                className={"active:opacity-50"}
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
              </StyledPressable>
            )}

            {/*  <Button title="Guardar" onPress={addRoutine} color="brown" /> */}
            {/*  <Button title="Cerrar" onPress={() => setVisibility(!visibility)} /> */}
          </View>
        </Modal>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: rMS(36),
            //alignItems: "center",
          }}
        >
          {/* TODO:Mod WEEK */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              /* marginTop: rMS(33), */
              /*  */
              /* backgroundColor: "pink", */
            }}
          >
            {weekData.map((item, index) => {
              return (
                <StyledPressable
                  key={index}
                  style={{}}
                  className={"active:opacity-50 "}
                  onPress={() => SelectDay(item.day)}
                >
                  <Days day={item} />
                </StyledPressable>
              );
            })}
            <StyledPressable
              className={"active:opacity-50"}
              //TODO: pressModal() mod por inserta para guardar dato fast
              onPress={() => pressModal()}
            >
              <AddIcon />
            </StyledPressable>
          </View>
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
                  style={
                    {
                      /* backgroundColor: "pink", */
                      /* marginVertical: 10, */
                    }
                  }
                >
                  <View style={{}}>
                    <Ejercicio routine={item}>
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
    /* justifyContent: "center", */
    marginTop: 10,
  },
  //TODO: Revisar para que el formulariom quede centrado, en un modal.
  view: {
    justifyContent: "center",
    alignItems: "center",
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
  input: {
    backgroundColor: "orange",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    margin: 5,
    width: "80%",
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
