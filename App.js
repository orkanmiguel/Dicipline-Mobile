import {
  StyleSheet,
  Text,
  View,
  YellowBox,
  Button,
  TouchableOpacity,
} from "react-native";
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
      <Week />

      {/* <Ejemplo /> */}
      <Form />
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
