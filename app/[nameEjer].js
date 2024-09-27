import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { Link, Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import Screen from "../components/screens/Screen";

export default function Details() {
  const { nameEjer } = useLocalSearchParams();
  return (
    <Screen>
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
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          <View style={styles.containerInf}>
            <View style={{}}>
              <Image
                style={styles.imagen}
                source={require("../assets/pullups.png")}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                /* backgroundColor: "pink", */
                width: 250,
                height: 300,
                borderRadius: 8,
              }}
            >
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                atque voluptate fuga ratione cumque. Soluta possimus explicabo
                exercitationem dignissimos ipsum cupiditate modi quam quia
                recusandae optio distinctio vel, nobis earum.m
              </Text>
            </View>
          </View>
          <View style={styles.containerInf}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                /* backgroundColor: "pink", */
                width: 250,
                height: 300,
                borderRadius: 8,
              }}
            >
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                atque voluptate fuga ratione cumque. Soluta possimus explicabo
                exercitationem dignissimos ipsum cupiditate modi quam quia
                recusandae optio distinctio vel, nobis earum.m
              </Text>
            </View>
            <View style={{}}>
              <Image
                style={styles.imagen}
                source={require("../assets/pullups.png")}
              />
            </View>
          </View>
          <View style={styles.containerInf}>
            <View style={{}}>
              <Image
                style={styles.imagen}
                source={require("../assets/pullups.png")}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                /* backgroundColor: "pink", */
                width: 250,
                height: 300,
                borderRadius: 8,
              }}
            >
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                atque voluptate fuga ratione cumque. Soluta possimus explicabo
                exercitationem dignissimos ipsum cupiditate modi quam quia
                recusandae optio distinctio vel, nobis earum.m
              </Text>
            </View>
          </View>
          <View style={styles.containerInf}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                /* backgroundColor: "pink", */
                width: 250,
                height: 300,
                borderRadius: 8,
              }}
            >
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                atque voluptate fuga ratione cumque. Soluta possimus explicabo
                exercitationem dignissimos ipsum cupiditate modi quam quia
                recusandae optio distinctio vel, nobis earum.m
              </Text>
            </View>
            <View style={{}}>
              <Image
                style={styles.imagen}
                source={require("../assets/pullups.png")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  imagen: {
    borderRadius: 8,
    padding: 10,
    /*  resizeMode: "contain", */
  },
  containerInf: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    padding: 20,

    /* backgroundColor: "pink", */
    alignItems: "center",
  },
  paragraph: {
    alignSelf: "flex-start",
    color: "white",
    fontWeight: "bold",
    fontSize: 21,
  },
});
