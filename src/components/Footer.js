import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

const openWebBrowser = () => {
  WebBrowser.openBrowserAsync("https://asamshan.dev/");
};

export default function Footer() {
  return (
    <TouchableOpacity onPress={openWebBrowser}>
      <Text style={styles.footerText}>
        {`Built with `}
        <MaterialCommunityIcons name="heart-circle" color="#000" size={30} /> by
        Asam Shan
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  footerText: {
    color: "#333",
    fontSize: 14,
    fontFamily: "Press-Start2p",
    alignSelf: "center",
    marginTop: 40,
    padding: 25,
    lineHeight: 30,
    textDecorationLine: "underline",
    textDecorationStyle: "dotted",
  },
});
