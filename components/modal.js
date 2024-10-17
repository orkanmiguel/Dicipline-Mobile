import React, { useState } from "react";
import { View, Modal, Text, Pressable } from "react-native";
import ScreenModal from "../components/screens/ScreenModal";
import { CloseIcon } from "./icons/Icons";

export default ({ children, visibility }) => {
  /*  console.log("children", children); */

  return (
    <Modal animationType="slide" transparent={true} visible={visibility}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <ScreenModal>{children}</ScreenModal>
      </View>
    </Modal>
  );
};
