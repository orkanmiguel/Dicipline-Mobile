import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import { AirbnbRating } from "react-native-ratings";

//componente que muestra el ejecicio, seires y reps, tiempo descanso
export default (props) => {
  /* console.log("children eje:", props.children); */

  let id = props.routine.id;
  let name = props.routine.name;
  let serie = props.routine.serie;
  let reps = props.routine.reps;
  let rest = props.routine.rest;
  let weight = props.routine.weight;

  //TODO: Deprecated, este dato solo se guarda al completar todas las series
  //TODO: y rutina, esto es es un update.
  /*  let completed = props.routine.completed; */

  const touchImagen = () => {
    console.log("imagen");
  };
  /* console.log("props", id); */
  return (
    <LinearGradient
      colors={["rgba(0,0,0,1)", "transparent", "rgba(0,0,0,1)"]}
      style={styles.container}
    >
      <Link href={`/${name}`} asChild>
        <Pressable>
          <View style={styles.containerImg}>
            <Image
              style={styles.imagen}
              source={require("../../assets/pullups.png")}
            />
          </View>
        </Pressable>
      </Link>
      <View style={styles.ejercicio}>
        {/* //TODO: Agregar Modificación para dejar estrellas vacias. */}
        <AirbnbRating
          defaultRating={0}
          count={serie}
          showRating={false}
          size={25}
          starContainerStyle={{
            justifyContent: "space-evenly",
            width: "70%",
          }}
        />
        <View style={styles.containerStart}></View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "black" }}>
            {name} + {weight}KG
          </Text>
        </View>

        <View style={styles.reps}>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
            {serie} X {reps}
          </Text>

          <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
            {" "}
            Descanso: {rest}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 100,
          flexDirection: "column",
          justifyContent: "space-around",
          marginRight: 5,
          /* alignItems: "center", */
        }}
      >
        {props.children[0]}
        {props.children[1]}
        {/* <EditIcon /> */}
        {/* <DeleteIcon /> */}
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
    /* backgroundColor: "green", */
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  /*   text: {
    color: "white",
    fontSize: 18,
    borderColor: "black",
  }, */
  imagen: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  containerImg: {
    justifyContent: "center",
    margin: 10,
    /*  backgroundColor: "pink", */
    alignItems: "center",
  },
  reps: {
    flexDirection: "row",
    justifyContent: "space-around",
    /*  backgroundColor: "red", */
  },
});
