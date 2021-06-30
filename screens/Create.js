import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const Create = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Content", {from: "Image"})}>
        <Text>Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Content", {from: "Text"})}>
        <Text>Text</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    width: 150,
    padding: 15,
    margin: 10,
  },
});

export default Create;
