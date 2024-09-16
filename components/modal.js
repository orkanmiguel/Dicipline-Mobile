import React from "react";
import { View, Modal } from "react-native";

export default ({ children, visibility }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visibility}>
      <View
        style={{
          alignItems: "stretch",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "#eee",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 25,
            borderRadius: 25,
          }}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
};
