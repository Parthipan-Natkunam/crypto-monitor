import React, { Component } from "react";
import { View, Text } from "proton-native";
import ChangeIndicator from "./primitives/ChangeIndicator";

export default class StackedStats extends Component {
  render() {
    return (
      <View style={{  minWidth: 150 }}>
        <Text style={{ fontWeight: "bold", marginBottom: 8, alignSelf: "center" }}>
          {this.props.heading}
        </Text>
        <View
          style={{
            display: "inline"
          }}
        >
          <Text style={{alignSelf: "center"}}>{this.props.value.toFixed(2)}</Text>
          <ChangeIndicator delta={this.props.delta} />
        </View>
      </View>
    );
  }
}
