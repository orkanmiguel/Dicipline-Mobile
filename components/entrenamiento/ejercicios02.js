import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import StarRating from "react-native-star-rating-widget";
import { useEffect, useState } from "react";

import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

//componente que muestra el ejecicio, seires y reps, tiempo descanso
export default (props) => {
  // TODO: Configurar para que al guardar ejercicio se genere con las estrellas correctas
  const [rating, setRating] = useState(0);

  /* console.log("children eje:", props.children); */
  /*   console.log("Rating:", rating, props.routine.id); */

  let id = props.routine.id;
  let name = props.routine.name;
  let serie = props.routine.serie || 0;
  console.log("name", name.trim());
  let reps = props.routine.reps;
  let rest = props.routine.rest;
  let weight = props.routine.weight;
  let nam = name.trim();
  //TODO: Deprecated, este dato solo se guarda al completar todas las series
  //TODO: y rutina, esto es es un update.
  /*  let completed = props.routine.completed; */

  const touchImagen = () => {
    /*  console.log("imagen"); */
  };
  /* console.log("props", id); */
  return (
    <View
      colors={["rgba(0,0,0,1)", "transparent", "rgba(0,0,0,1)"]}
      style={styles.container}
    >
      {/* TODO: Ver o revisar por que no manda a la pagina */}
      <Link href={`${props.routine.name}`} asChild>
        <StyledPressable className={"active:opacity-50"}>
          <View style={styles.containerImg}>
            <Image
              style={styles.imagen}
              source={require("../../assets/pullups.png")}
            />
          </View>
        </StyledPressable>
      </Link>
      <View style={styles.ejercicio}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            /*   backgroundColor: "pink", */
          }}
        >
          {/* TODO: Por ahora maximo 7 series por ejercicio. */}
          {/* <StarRating
            maxStars={serie}
            color={"yellow"}
            emptyColor={"white"}
            rating={rating}
            onChange={setRating}
            enableHalfStar={false}
            accessibilityAdjustmentLabel={`%${serie}% stars`}
          /> */}
        </View>

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
    </View>
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
