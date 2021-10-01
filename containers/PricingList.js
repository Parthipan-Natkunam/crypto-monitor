import React, { Component } from "react";

import PricingListItem from "../components/PricingListItem";

export default class PricingList extends Component {
  render() {
    return (
      <>
        {[0, 1].map((_, i) => (
          <PricingListItem
            key={i}
            imageURL="./asset/img/logo.png"
            symbol={i === 0 ? "BTC" : "COSMOS"}
            name="Bitcoin"
            price={184.567864}
            priceDelta={-2.5}
            marketCap={184.562864}
            marketDelta={0.38}
          />
        ))}
      </>
    );
  }
}
