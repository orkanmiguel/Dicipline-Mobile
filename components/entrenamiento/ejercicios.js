import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import { DeleteIcon, EditIcon } from "../icons/Icons";

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
  console.log("props", id);
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
        <View style={styles.containerStart}>
          <Entypo name="star" size={26} color="yellow" />
          <Entypo name="star" size={26} color="yellow" />
          <Entypo name="star" size={26} color="yellow" />
          <Entypo name="star-outlined" size={26} color="yellow" />
          <Entypo name="star-outlined" size={26} color="yellow" />
        </View>
        <Text style={styles.titulo}>
          {name} + {weight}KG
        </Text>
        <View style={styles.reps}>
          <Text style={styles.titulo}>
            {serie} X {reps}
          </Text>

          <Text style={styles.titulo}> rest: {rest}</Text>
        </View>
      </View>
      <View
        style={{
          borderRadius: 15,
          height: 100,
          flexDirection: "column",
          justifyContent: "space-around",
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
    justifyContent: "space-around",
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
