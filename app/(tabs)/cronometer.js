/* export default function Cronometer() { */
import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";

export default function Cronometer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);
  const startRef = useRef(null);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (running) {
      startRef.current = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startRef.current);
      }, 10);
      Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      clearInterval(timerRef.current);
      animatedValue.stopAnimation();
    }
    return () => clearInterval(timerRef.current);
  }, [running]);

  const startTimer = () => setRunning(true);
  const stopTimer = () => setRunning(false);
  const resetTimer = () => {
    setRunning(false);
    setTime(0);
    animatedValue.setValue(0);
  };

  const formatTime = (time) => {
    const getMilliseconds = `00${time % 1000}`.slice(-3);
    const seconds = Math.floor(time / 1000);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    return `${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  const animatedStyle = {
    opacity: animatedValue,
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.5],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.time, animatedStyle]}>
        {formatTime(time)}
      </Animated.Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={startTimer}
          style={[styles.button, styles.startButton]}
        >
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={stopTimer}
          style={[styles.button, styles.stopButton]}
        >
          <Text style={styles.buttonText}>Pausar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={resetTimer}
          style={[styles.button, styles.resetButton]}
        >
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e1e", // Fondo oscuro para un look moderno
  },
  time: {
    fontSize: 60,
    fontWeight: "bold",
    color: "white", // Color cian para un estilo futurista
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  button: {
    padding: 15,
    borderRadius: 12,
    margin: 5,
    elevation: 5,
  },
  startButton: {
    backgroundColor: "#00e676", // Color verde para iniciar
  },
  stopButton: {
    backgroundColor: "#ff3d00", // Color rojo para pausar
  },
  resetButton: {
    backgroundColor: "#2962ff", // Color azul para reiniciar
  },
  buttonText: {
    fontSize: 18,
    color: "#fff", // Texto blanco para buen contraste
    fontWeight: "bold",
  },
});
