import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";

//componente que muestra el ejecicio, seires y reps, tiempo descanso
export default () => {
  return (
    <LinearGradient
      colors={["rgba(0,0,0,1)", "transparent", "rgba(0,0,0,1)"]}
      style={styles.container}
    >
      <View style={styles.containerImg}>
        <Image
          style={styles.imagen}
          source={require("../../assets/pullups.png")}
        />
      </View>

      <View style={styles.ejercicio}>
        <View style={styles.containerStart}>
          <Entypo name="star" size={26} color="yellow" />
          <Entypo name="star" size={26} color="yellow" />
          <Entypo name="star" size={26} color="yellow" />
          <Entypo name="star-outlined" size={26} color="yellow" />
          <Entypo name="star-outlined" size={26} color="yellow" />
        </View>
        <Text style={styles.titulo}>Pull ups + 10kg</Text>
        <View style={styles.reps}>
          <Text style={styles.titulo}>3X4</Text>
          <Text style={styles.titulo}>rest 3:00</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  containerStart: {
    /* backgroundColor: "pink", */
    flexDirection: "row",
    justifyContent: "space-around",
  },
  start: {
    color: "yellow",
    fontSize: 20,
  },
  ejercicio: {
    /*     backgroundColor: "green", */
  },
  titulo: {
    paddingTop: 10,
    color: "white",
    fontSize: 25,
  },
  container: {
    backgroundColor: "brown",
    borderRadius: 15,
    height: 120,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  /*   text: {
    color: "white",
    fontSize: 18,
    borderColor: "black",
  }, */
  imagen: {
    width: 100,
    height: 100,
    borderRadius: 8,
    paddingRight: 10,
  },
  containerImg: {
    justifyContent: "center",

    /*  backgroundColor: "pink", */
    alignItems: "center",
  },
  reps: {
    flexDirection: "row",
    justifyContent: "space-around",
    /*  backgroundColor: "red", */
  },
});
