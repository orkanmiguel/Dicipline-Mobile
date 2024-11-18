import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";

import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function () {
  const [maxReps, setMAxReps] = useState("");
  const [lun, setLun] = useState("");
  const [mar, setMar] = useState("");
  const [mie, setMie] = useState("");
  const [jue, setJue] = useState("");
  const [vie, setVie] = useState("");
  const [sab, setSab] = useState("");
  const [dom, setDom] = useState("");

  async function getList() {
    const db = await SQLite.openDatabaseAsync("dbDiciplineTest");
    const result = await db.getAllAsync(
      "SELECT sum(reps * serie) suma FROM routine"
    );
    console.log("result", result);

    setMAxReps(result[0].suma);
  }
  async function getLun() {
    const db = await SQLite.openDatabaseAsync("dbDiciplineTest");
    const result = await db.getAllAsync(
      "SELECT sum(reps * serie) suma FROM routine where day = 'Lunes'"
    );
    console.log("result", result);

    setLun(result[0].suma);
  }

  async function getMar() {
    const db = await SQLite.openDatabaseAsync("dbDiciplineTest");
    const result = await db.getAllAsync(
      "SELECT sum(reps * serie) suma FROM routine where day = 'Martes'"
    );
    console.log("result", result);

    setMar(result[0].suma);
  }

  async function getMier() {
    const db = await SQLite.openDatabaseAsync("dbDiciplineTest");
    const result = await db.getAllAsync(
      "SELECT sum(reps * serie) suma FROM routine where day = 'Miercoles'"
    );
    console.log("result", result);

    setMie(result[0].suma);
  }

  async function getJue() {
    const db = await SQLite.openDatabaseAsync("dbDiciplineTest");
    const result = await db.getAllAsync(
      "SELECT sum(reps * serie) suma FROM routine where day = 'Jueves'"
    );
    console.log("result", result);

    setJue(result[0].suma);
  }

  async function getVie() {
    const db = await SQLite.openDatabaseAsync("dbDiciplineTest");
    const result = await db.getAllAsync(
      "SELECT sum(reps * serie) suma FROM routine where day = 'Viernes'"
    );
    console.log("result", result);

    setVie(result[0].suma);
  }

  async function getSab() {
    const db = await SQLite.openDatabaseAsync("dbDiciplineTest");
    const result = await db.getAllAsync(
      "SELECT sum(reps * serie) suma FROM routine where day = 'Sabado'"
    );
    console.log("result", result);

    setSab(result[0].suma);
  }

  async function getDom() {
    const db = await SQLite.openDatabaseAsync("dbDiciplineTest");
    const result = await db.getAllAsync(
      "SELECT sum(reps * serie) suma FROM routine where day = 'Domingo'"
    );
    console.log("result", result);

    setDom(result[0].suma);
  }

  useEffect(() => {
    async function setup() {
      /*   inserta(); */
      const db = await SQLite.openDatabaseAsync("dbDiciplineTest");

      await db.execAsync(` PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS routine (id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT, serie INTEGER, reps INTEGER, rest TEXT, weight NUMERIC,day TEXT, completed INTEGER
      );`);
      getLun();
      getList();
      getMar();
      getMier();
      getJue();
      getVie();
      getSab();
      getDom();
    }
    setup();
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 40,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          color: "yellow",
        }}
      >
        Datos
      </Text>
      <View style={{ backgroundColor: "black", borderRadius: 15 }}>
        <View
          style={{
            backgroundColor: "brown",
            borderRadius: 15,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              color: "black",
            }}
          >
            Maximo reps por dia
          </Text>
        </View>
        <View
          style={{
            /*  backgroundColor: "green", */
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 6,
          }}
        >
          <View
            style={{
              backgroundColor: "brown",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              margin: 6,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                color: "white",
              }}
            >
              Lun
            </Text>

            <Text
              style={{
                fontSize: 30,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                color: "yellow",
              }}
            >
              {lun ? String(lun) : 0}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "brown",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              margin: 9,
              marginVertical: 30,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                color: "white",
              }}
            >
              Mar
            </Text>

            <Text
              style={{
                fontSize: 30,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                color: "yellow",
              }}
            >
              {mar ? String(mar) : 0}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "brown",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              margin: 9,
              marginVertical: 30,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                color: "white",
              }}
            >
              Mie
            </Text>

            <Text
              style={{
                fontSize: 30,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                color: "yellow",
              }}
            >
              {mie ? String(mie) : 0}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "brown",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              margin: 9,
              marginVertical: 30,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                color: "white",
              }}
            >
              Jue
            </Text>

            <Text
              style={{
                fontSize: 30,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                color: "yellow",
              }}
            >
              {jue ? String(jue) : 0}
            </Text>
          </View>
        </View>
        <View
          style={{
            /*  backgroundColor: "green", */
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 6,
          }}
        >
          <View
            style={{
              backgroundColor: "brown",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              margin: 6,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                color: "white",
              }}
            >
              Vie
            </Text>

            <Text
              style={{
                fontSize: 30,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                color: "yellow",
              }}
            >
              {vie ? String(vie) : 0}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "brown",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              margin: 9,
              marginVertical: 30,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                color: "white",
              }}
            >
              Sab
            </Text>

            <Text
              style={{
                fontSize: 30,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                color: "yellow",
              }}
            >
              {sab ? String(sab) : 0}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "brown",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              margin: 9,
              marginVertical: 30,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                color: "white",
              }}
            >
              Dom
            </Text>

            <Text
              style={{
                fontSize: 30,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                color: "yellow",
              }}
            >
              {dom ? String(dom) : 0}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ height: 20 }}></View>
      <View
        style={{
          backgroundColor: "black",
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ backgroundColor: "brown", borderRadius: 15 }}>
          <Text
            style={{
              fontSize: 30,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              color: "black",
            }}
          >
            Maximo reps por semana
          </Text>
        </View>
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
      </View>
      <StyledPressable
        className={"active:opacity-50"}
        onPress={() => {
          getList();
          getLun();
          getMar();
          getMier();
          getJue();
          getVie();
          getSab();
          getDom();
        }}
      >
        <Text
          style={{
            fontSize: 30,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            color: "white",
          }}
        >
          Actualizar
        </Text>
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
    paddingTop: 10,
  },
});
