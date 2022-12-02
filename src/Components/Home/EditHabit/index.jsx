import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function EditHabit({ habit, frequency, habitArea, checkColor }) {
  function handleEdit() {
    console.log("Ta funcionando e Editar");
  }

  function handleCheck() {
    console.log("Check funcionando");
  }

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.button}
      onPress={handleEdit}
    >
      <View style={styles.habitText}>
        <Text style={styles.habitTitle}>{habit}</Text>
        <Text style={styles.habitFrequency}>{frequency}</Text>
      </View>
      <TouchableOpacity
        style={[styles.check, { borderColor: checkColor }]}
        onPress={handleCheck}
      ></TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 320,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#151515",
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  habitTitle: {
    color: "white",
    fontWeight: "bold",
  },
  habitFrequency: {
    color: "white",
  },
  check: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
});