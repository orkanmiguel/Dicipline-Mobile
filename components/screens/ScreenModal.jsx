import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
    backgroundColor: "red",
    alignItems: "stretch",
    margin: 40,
    borderRadius: 25,
    height: 450,
  },
});
