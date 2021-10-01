import React, { Component } from "react";
import { View, Text, Image } from "proton-native";

export default class TopBar extends Component {
  render() {
    return (
      <View
        style={{
          height: 80,
          background: "#333",
          color: "#fefefe",
          padding: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            height: 64,
            width: 64,
            marginRight: 8,
          }}
          source={{
            uri: this.props.appLogoURL,
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            marginLeft: 8,
          }}
        >
          {this.props.appTitle}
        </Text>
      </View>
    );
  }
}
