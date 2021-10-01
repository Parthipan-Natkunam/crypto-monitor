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
          border: "1px solid #000",
          margin: 18,
        }}
      >
        <View
          style={{
            border: "none",
            alignItems: "center",
            marginBottom: 4,
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          <Text>{this.props.name}</Text>
        </View>

        <View
          style={{
            border: "none",
            flexDirection: "row",
            alignItems: "center",
            padding: 5,
          }}
        >
          <CoinIndicator
            imageURL={this.props.imageURL}
            symbol={this.props.symbol}
          />
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
