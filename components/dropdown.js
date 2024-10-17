import { useCallback, useRef, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Modal } from ".";

export default function Dropdown() {
  const [expanded, setExpaded] = useState(false);
  const toggleExpanded = useCallback(() => setExpaded(!expanded), [expanded]);

  const buttonRef = useRef(null);
  const [top, setTop] = useState(0);
  return (
    <View
      ref={buttonRef}
      onLayout={(event) => {
        const layout = event.nativeEvent.layout;
        const topOffset = layout.y;
        const heightOfComponent = layout.height;

        setTop(topOffset + heightOfComponent);
      }}
    >
      <Pressable style={styles.button} onPress={toggleExpanded}>
        <Text style={styles.text}>Seleccion el Ejercicio</Text>
      </Pressable>
      {expanded ? (
        <View style={[styles.options, { top }]}>
          <Modal visible={expanded} transparent>
            <Pressable onPress={() => setExpaded(false)}>
              <View style={styles.backdrop}>
                <FlatList
                  keyExtractor={(item) => item.value}
                  data={[
                    { value: "Pull ups", label: "pu" },
                    { value: "Dips", label: "dp" },
                    { value: "Dips", label: "dp" },
                    { value: "Dips", label: "dp" },
                    { value: "Dips", label: "dp" },
                    { value: "Dips", label: "dp" },
                    { value: "Dips", label: "dp" },
                    { value: "Dips", label: "dp" },
                    { value: "Dips", label: "dp" },
                    { value: "Dips", label: "dp" },
                  ]}
                  renderItem={({ item }) => (
                    <Pressable style={styles.optionItem}>
                      <Text>{item.value}</Text>
                    </Pressable>
                  )}
                  itemSeparatorCoponent={() => (
                    <View style={styles.separator} />
                  )}
                />
              </View>
            </Pressable>
          </Modal>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  optionItem: {
    alignItems: "center",
    height: 45,
    justifyContent: "center",
    width: 300,
  },
  separator: {
    height: 10,
  },
  options: {
    position: "absolute",
    /*     top: 53, */
    backgroundColor: "white",
    width: "100",
    padding: "10m",
    borderRadius: 6,
    maxHeight: 400,
  },
  text: {
    fontSize: 15,
    opacity: 0.8,
    color: "white",
  },
  button: {
    height: 50,
    justifyContet: "center",
    backgroundColor: "black",
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 8,
  },
});
