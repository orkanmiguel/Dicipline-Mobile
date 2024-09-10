import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default () => {
  return (
    <>
      <Text style={styles.text}>Dicipline</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    color: "white",
    fontSize: 36,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
