import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App({ children }) {
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
    flex: 10,
    backgroundColor: "red",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
});
