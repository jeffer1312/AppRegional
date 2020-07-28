import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Drawer, Container, Header, Content, Button } from "native-base";

class SideBar extends Component {
  render() {
    return (
      <View style={[styles.container, { backgroundColor: "fff" }]}>
        <Text>
          <Icon name="rocket" size={30} color="#900" />
          Conteúdo side bar
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
