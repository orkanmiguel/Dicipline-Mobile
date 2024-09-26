import { View, Text, StyleSheet } from "react-native";

export default function Statistics() {
  return (
    <View style={styles.container}>
      <Text>Statics</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
