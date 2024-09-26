import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { Link, Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function Details() {
  const { nameEjer } = useLocalSearchParams();
  return (
    <ScrollView>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "red",
            textTransform: "capitalize",
          },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: nameEjer,
          headerRight: () => {},
        }}
      />
      {/*   <Link href="/">Volver Atras</Link> */}
      <View>
        <Text>Nombre del Ejercicio: {nameEjer}</Text>
        <View style={styles.containerImg}>
          <Image
            style={styles.imagen}
            source={require("../assets/pullups.png")}
          />
          <Text style={styles.parrapho}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit atque
            voluptate fuga ratione cumque. Soluta possimus explicabo
            exercitationem dignissimos ipsum cupiditate modi quam quia
            recusandae optio distinctio vel, nobis earum.m
          </Text>
        </View>
        <View style={styles.containerImg}>
          <Image
            style={styles.imagen}
            source={require("../assets/pullups.png")}
          />
          <Text style={styles.parrapho}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit atque
            voluptate fuga ratione cumque. Soluta possimus explicabo
            exercitationem dignissimos ipsum cupiditate modi quam quia
            recusandae optio distinctio vel, nobis earum.m
          </Text>
        </View>
        <View style={styles.containerImg}>
          <Image
            style={styles.imagen}
            source={require("../assets/pullups.png")}
          />
          <Text style={styles.parrapho}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit atque
            voluptate fuga ratione cumque. Soluta possimus explicabo
            exercitationem dignissimos ipsum cupiditate modi quam quia
            recusandae optio distinctio vel, nobis earum.m
          </Text>
        </View>
        <View style={styles.containerImg}>
          <Image
            style={styles.imagen}
            source={require("../assets/pullups.png")}
          />
          <Text style={styles.parrapho}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit atque
            voluptate fuga ratione cumque. Soluta possimus explicabo
            exercitationem dignissimos ipsum cupiditate modi quam quia
            recusandae optio distinctio vel, nobis earum.m
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imagen: {
    width: 400,
    height: 400,
    borderRadius: 8,
    paddingRight: 10,
    resizeMode: "contain",
  },
  containerImg: {
    flexDirection: "row",
    justifyContent: "space-evenly",

    /*  backgroundColor: "pink", */
    alignItems: "center",
  },
  parrapho: {},
});
