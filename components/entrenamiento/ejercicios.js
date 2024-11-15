import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import StarRating from "react-native-star-rating-widget";
import { useEffect, useState } from "react";
import { rMS, rS, rV } from "../constants/responsive";
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
  let serie = props.routine.serie;
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
    <LinearGradient
      colors={["rgba(0,0,0,1)", "transparent", "rgba(0,0,0,1)"]}
      style={styles.container}
    >
      <View style={styles.card}>
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
            {/*  <StarRating
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
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "yellow",
                borderColor: "black",
              }}
            >
              {name.slice(0, 10)}
            </Text>
          </View>

          <View style={styles.reps}>
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
              {String(serie).slice(0, 3)} X {String(reps).slice(0, 3)} +{" "}
              {weight}
              KG
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
              {" "}
              Descanso: {String(rest).slice(0, 5)}
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
    /* width: rMS(350), */
    margin: rMS(3),
    /*    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center", */
  },
  card: {
    /*     backgroundColor: "pink", */
    /* width: rMS(350), */
    /* position: "static", */
    margin: rMS(2),
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
    width: rMS(80),
    height: rMS(80),
    borderRadius: 15,
  },
  containerImg: {
    justifyContent: "center",
    margin: 5,
    /*  backgroundColor: "pink", */
    alignItems: "center",
  },
  reps: {
    flexDirection: "row",
    justifyContent: "space-around",
    /*  backgroundColor: "red", */
  },
});
