import { StyleSheet, Text, View, YellowBox } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Titulo, Form, Week, Ejemplo } from "./components";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function App() {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["rgba(0,0,0,1)", "transparent", "rgba(0,0,0,1)"]}
      style={styles.container}
    >
      <Titulo />
      <Week />
      {/*  <Ejemplo /> */}
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
