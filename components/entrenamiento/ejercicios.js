import { StyleSheet, Text, View, Image } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          style={styles.imagen}
          source={require("../../assets/pullups.png")}
        />
      </View>

      <View>
        <Text style={styles.titulo}>Pull ups</Text>
        <Text style={styles.titulo}>3X4</Text>
        <Text style={styles.titulo}>rest 3:00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    color: "white",
    fontSize: 20,
    left: 150,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "black",
    borderRadius: 8,
    width: "250%",
    height: "20%",
  },
  /*   text: {
    color: "white",
    fontSize: 18,
    borderColor: "black",
  }, */
  imagen: {
    width: 80,
    height: 80,
    borderRadius: 8,
    paddingRight: 10,
  },
  containerImg: {
    justifyContent: "center",
    /* backgroundColor: "pink", */
    alignItems: "center",
    width: 100,
  },
});
