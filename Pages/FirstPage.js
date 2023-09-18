import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function FirstPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/cell-phone.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Title</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing aaelit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo.
      </Text>

      <View style={styles.dashedLineContainer}>
        <View style={[styles.dashedLine, { backgroundColor: "#707070" }]} />
        <View style={styles.emptySpace} />
        <View style={[styles.dashedLine, { backgroundColor: "#D4D4D4" }]} />
        <View style={styles.emptySpace} />
        <View style={[styles.dashedLine, { backgroundColor: "#D4D4D4" }]} />
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Second")}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    paddingBottom: 50,
  },
  content: {
    fontSize: 22,
    textAlign: "center",
    width: 500,
    height: 300,
    lineHeight: 27,
    color: "#707070",
  },
  dashedLineContainer: {
    flexDirection: "row",
    marginBottom: 40,
    width: "40%",
  },
  dashedLine: {
    flex: 1,
    height: 10,
  },
  emptySpace: {
    width: 10,
  },
  nextButton: {
    width: 350.84,
    height: 80.45,
    backgroundColor: "#BCA464",
    borderRadius: 5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  skipText: {
    position: "absolute",
    top: 20,
    right: 20,
    fontSize: 22,
  },
});
