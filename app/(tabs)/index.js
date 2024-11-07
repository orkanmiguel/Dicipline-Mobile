import { View, Text, StyleSheet } from "react-native";
import App from "../../App";
import { rMS, rS, rV } from "../../components/constants/responsive";

export default function Index() {
  console.log("Titulo test", App);
  return (
    <View style={styles.container}>
      <App />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
  },
});
