import React, { Component } from "react";
import { View, Text, Image } from "proton-native";

export default class ErrorMessage extends Component {
  render() {
    return (
      <View
        style={{
          height: "95%",
          backgroundColor: "#ffdbd9",
          color: "#0d0101",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: 100, height: "auto" }}
          source={{ uri: "asset/img/error.png" }}
        />
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Operation Failed!
          </Text>
          <Text>{this.props.message}</Text>
        </View>
      </View>
    );
  }
}
