import React, { Component } from "react";
import { View, Text } from "proton-native";

import CoinIndicator from "./CoinIndicator";
import StackedStats from "./StackedStats";

export default class PricingListItem extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#ccc",
          padding: 10,
          borderRadius: 12,
          border: " 1px solid #000",
          marginBottom: 18,
        }}
      >
        <View
          style={{
            border: "none",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 5,
          }}
        >
          <CoinIndicator
            imageURL={this.props.imageURL}
            symbol={this.props.symbol}
          />
          <Text>{this.props.name}</Text>
          <StackedStats
            delta={this.props.priceDelta}
            heading="Price ($)"
            value={this.props.price}
          />
          <StackedStats
            delta={this.props.marketDelta}
            heading="Market Cap."
            value={this.props.marketCap}
          />
        </View>
      </View>
    );
  }
}
