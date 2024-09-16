import { StyleSheet, Text, View, YellowBox, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Titulo, Form, Week, Ejemplo, Modal, InsertADD } from "./components";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";

export default function App() {
  const [visibility, setVisibility] = useState(false);

  const pressModal = () => {
    setVisibility(true);
  };
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["rgba(0,0,0,1)", "transparent", "rgba(0,0,0,1)"]}
      style={styles.container}
    >
      <Titulo />
      <Modal visibility={visibility}>
        <InsertADD />
        <Button
          title="Cerrar"
          onPress={() => setVisibility(!visibility)}
        ></Button>
      </Modal>
      <Button
        color="black"
        title="Agregar Rutina"
        onPress={() => pressModal()}
      />
      {/*       <Modal animationType="slide" transparent={true} visible={modal}>
        <View
          style={{
            alignItems: "stretch",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: "#eee",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: 25,
              borderRadius: 25,
            }}
          >
            <Text>Soy un modal</Text>
            <Button
              title="Cerrar modal"
              onPress={() => setModal(!modal)}
            ></Button>
          </View>
        </View>
      </Modal> */}

      <Week />
      {/* <Ejemplo /> */}
      <Form />
      <View style={styles.containerNav}>
        <View style={styles.ContainerCrono}>
          <FontAwesome5 name="calendar-alt" size={30} color="yellow" />
          <Text style={styles.nav}>Calendario</Text>
        </View>
        <View style={styles.ContainerCrono}>
          <MaterialCommunityIcons
            name="weight-lifter"
            size={30}
            color="yellow"
          />
          <Text style={styles.nav}>Estadisticas</Text>
        </View>

        <View style={styles.ContainerCrono}>
          <Ionicons name="timer" size={30} color="yellow" />
          <Text style={styles.nav}>Cronometro</Text>
        </View>
      </View>
      {/*   <View style={styles.form}>
        <Text>hi</Text>
      </View> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingBottom: 15,
    backgroundColor: "brown",
  },
  container: {
    flex: 10,
    backgroundColor: "red",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  containerNav: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 15,
    alignItems: "center",
    borderRadius: 5,

    height: 90,
  },
  nav: {
    color: "yellow",
  },
  ContainerCrono: {
    color: "yellow",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
