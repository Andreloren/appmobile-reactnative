import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function DefaultButton({
  buttonText,
  handlePress,
  widht,
  height,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { width: widht, height: height }]}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#FFFF",
    borderRadius: 10,
    marginBottom: 20,
  },

  buttonText: {
    color: "#FFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});
