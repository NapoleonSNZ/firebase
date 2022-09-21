import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ListUser() {
  return (
    <View>
      <Text style={styles.Text}>Listado de usuarios</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Text: {
    fontSize: 25,
    color: "cyan",
  },
});
