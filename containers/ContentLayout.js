import React, { Component } from "react";
import { View } from "proton-native";

export default class ContentLayout extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 20,
          flexBasis: "100%",
        }}
      >
        {this.props.children}
      </View>
    );
  }
}
