import React, { Component } from "react";
import { View, Text, Image } from "proton-native";

export default class ErrorMessage extends Component {
  render() {
    return (
      <View
        style={{
          height: "95%",
          color: "#0d0101",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            height: 64,
            width: 64,
            marginRight: 8,
          }}
          source={{
            uri: "./asset/img/notification.png",
          }}
        />
        <View style={{ marginTop: 8, marginBottom: 8 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginBottom: 8,
              alignSelf: "center",
            }}
          >
            Operation Failed!
          </Text>
          <Text>{this.props.message}</Text>
        </View>
      </View>
    );
  }
}
