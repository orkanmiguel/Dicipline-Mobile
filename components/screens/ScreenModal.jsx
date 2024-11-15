import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { rMS } from "../constants/responsive";

export default function ModalScreen({ children }) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["rgba(0,0,0,1)", "transparent", "rgba(0,0,0,1)"]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "brown",
    /*  justifyContent: "center", */
    /*     alignItems: "stretch", */
    /* margin: 40, */
    borderRadius: 25,
    height: rMS(400),
    width: rMS(250),
  },
});
