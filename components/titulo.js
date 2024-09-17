import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
} from "react-native";

const image = { uri: "https://motionbgs.com/media/2015/berserk.jpg" };

export default () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Dicipline</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    /*     backgroundColor: "pink", */
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  text: {
    color: "yellow",
    fontSize: 50,
    fontWeight: "bold",
    textShadowOffset: { width: 10, height: 10 },
  },
  image: {
    height: 130,
    width: 500,
    justifyContent: "center",
    alignItems: "center",
  },
});
