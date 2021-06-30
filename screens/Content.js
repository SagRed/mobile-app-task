import React, {useLayoutEffect, useState, useEffect} from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";
import {launchImageLibrary} from "react-native-image-picker";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../state/actions/index";

const Content = ({route, navigation}) => {
  const {from} = route.params;

  const dispatch = useDispatch();
  const {addFeed} = bindActionCreators(actions, dispatch);

  const [text, setText] = useState("");
  const [image, setImage] = useState([]);

  useEffect(() => {
    if (from === "Image") {
      const options = {
        noData: true,
      };
      launchImageLibrary(options, response => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
          navigation.navigate("Create");
        } else if (response.error) {
          console.log("ImagePicker Error: ", response.error);
        } else if (response.customButton) {
          console.log("User tapped custom button: ", response.customButton);
          alert(response.customButton);
        } else {
          setImage(response.assets[0]);
        }
      });
    }
  }, [from, navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.button}
          disabled={text === ""}
          onPress={handlePost}>
          <Text style={text === "" ? styles.textDisabled : styles.text}>
            Post
          </Text>
        </TouchableOpacity>
      ),
      title: from,
    });
  }, [navigation, text, from]);

  const handlePost = () => {
    const feed = {
      text: text,
      uri: image.uri,
      timeStamp: new Date(),
    };
    addFeed(feed);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        multiline
        placeholder="Write Content Here..."
        placeholderTextColor="grey"
        value={text}
        onChangeText={text => setText(text)}
      />
      {image && (
        <Image
          source={{
            uri: image?.uri,
          }}
          style={styles.image}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    padding: 20,
    color: "black",
  },
  image: {
    height: 300,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    width: 100,
    height: 40,
    margin: 10,
  },
  text: {
    color: "black",
  },
  textDisabled: {
    color: "grey",
  },
});

export default Content;
