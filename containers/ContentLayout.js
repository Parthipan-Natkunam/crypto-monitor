import React, { Component } from "react";
import { View } from "proton-native";

export default class ContentLayout extends Component {
  render() {
    return (
      <View
        style={{
          padding: 20,
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        {this.props.children}
      </View>
    );
  }
}
