import React, { Component } from "react";
import { Text } from "proton-native";

export default class ChangeIndicator extends Component {
  render() {
    return (
      <Text
        style={{
          marginLeft: 4,
          color: this.props.delta < 0 ? "#730701" : "#006e0b",
          backgroundColor: this.props.delta < 0 ? "#f29994" : "#76de80",
          fontWeight: "bold",
          alignSelf: "center",
        }}
      >
        {this.props.delta > 0 && "+"}
        {this.props.delta.toFixed(2)} %
      </Text>
    );
  }
}
