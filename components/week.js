import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";

export default () => {
  let d = new Date();
  let fecha1 = d;
  if (fecha1.getUTCDay() == 1) {
    console.log("test", fecha1.getUTCDay());

    dias1 = (fecha1.getUTCDay() - 1) * -1;
    console.log(dias1);
    fecha1.setDate(fecha1.getDate() + dias1);
  }
  //TODO:Modificar esto para que no sea la fecha de esta manera.
  let mar = d.getDate() + 1;
  let mier = d.getDate() + 2;
  let jue = d.getDate() + 3;
  let vie = d.getDate() + 4;
  let sab = d.getDate() + 5;
  let dom = d.getDate() + 6;
  console.log("martes", mar);

  return (
    <View style={styles.container}>
      <View style={styles.containerDay}>
        <Text style={styles.day}>
          Lun{"\n"}
          {fecha1.getDate()}
        </Text>
      </View>
      <View style={styles.containerDay}>
        <Text style={styles.day}>
          Mar{"\n"}
          {mar}
        </Text>
      </View>
      <View style={styles.containerDay}>
        <Text style={styles.day}>
          Mie{"\n"}
          {mier}
        </Text>
      </View>
      <View style={styles.containerDay}>
        <Text style={styles.day}>
          Jue{"\n"}
          {jue}
        </Text>
      </View>
      <View style={styles.containerDay}>
        <Text style={styles.day}>
          Vie{"\n"}
          {vie}
        </Text>
      </View>
      <View style={styles.containerDay}>
        <Text style={styles.day}>
          Sab{"\n"}
          {sab}
        </Text>
      </View>
      <View style={styles.containerDay}>
        <Text style={styles.day}>
          Dom{"\n"}
          {dom}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    /*     backgroundColor: "brown", */
    marginHorizontal: 20,
  },
  containerDay: {
    /*  backgroundColor: "brown", */
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "brown",
    fontSize: 20,
    width: 60,
    height: 60,
  },
  day: {
    color: "yellow",
    fontSize: 18,
    fontWeight: "bold",
  },
});
