import React from "react";
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./screens/Home";
import Create from "./screens/Create";
import Content from "./screens/Content";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "",
            headerStyle: styles.headerHome,
          }}
        />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{title: "", headerStyle: styles.header}}
        />
        <Stack.Screen
          name="Content"
          component={Content}
          options={{
            headerStyle: styles.header,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerHome: {
    backgroundColor: "#e6e6e6",
  },
  header: {
    borderBottomColor: "black",
    borderBottomWidth: 0.9,
  },
});

export default App;