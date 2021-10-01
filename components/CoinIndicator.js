import React, { Component } from "react";
import { View, Text, Image } from "proton-native";

export default class CoinIndicator extends Component {
  render() {
    return (
      <View
        style={{
          width: 100,
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
          }}
          source={{
            uri: this.props.imageURL,
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 4,
          }}
        >
          {this.props.symbol}
        </Text>
      </View>
    );
  }
}
