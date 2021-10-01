import React, { Component } from "react";
import { View, Text, Image } from "proton-native";

export default class LoadingMessage extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "90%",
        }}
      >
        <Image
          style={{
            height: 64,
            width: 64,
          }}
          source={{
            uri: "./asset/img/loading.png",
          }}
        />
        <Text style={{ alignSelf: "center", marginTop: 8, fontSize: 20 }}>
          Connecting to Server. Please Wait...
        </Text>
      </View>
    );
  }
}
