import React, { Component } from "react";
import { View, Text } from "proton-native";
import ChangeIndicator from "./primitives/ChangeIndicator";

export default class StackedStats extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontWeight: "bold", marginBottom: 8 }}>
          {this.props.heading}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ marginRight: 4 }}>{this.props.value.toFixed(2)}</Text>
          <ChangeIndicator delta={this.props.delta} />
        </View>
      </View>
    );
  }
}
