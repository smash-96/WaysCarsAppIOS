import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const SingleButton = ({ text, btnPressed }) => {
  return (
    <TouchableOpacity
      onPress={btnPressed}
      activeOpacity={0.8}
      style={styles.container}
    >
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SingleButton;

const styles = StyleSheet.create({
  container: {
    width: "30%",
    height: 50,
    borderWidth: 1,
    borderColor: "lightblue",
    alignItems: "center",
    backgroundColor: "#0a2b51",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 18,
    color: "white",
  },
});
