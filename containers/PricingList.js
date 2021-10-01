import React, { Component } from "react";

import PricingListItem from "../components/PricingListItem";
import ErrorMessage from "../components/ErrorMessage";
import currencyTicker from "../api/currencyTicker";

export default class PricingList extends Component {
  state = {
    data: [],
    error: null,
  };

  fetchData = async () => {
    try {
      console.log("Will Call API!!!!!");
      const data = await currencyTicker.getPriceData();
      console.log("Called API!!!");
      console.log(data);
      this.setState({
        data,
      });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage message={this.state.error} />;
    }
    return (
      <>
        {this.state.data.map(
          (
            {
              imageURL,
              symbol,
              name,
              price,
              marketCap,
              priceDelta,
              marketDelta,
            },
            i
          ) => (
            <PricingListItem
              key={symbol}
              imageURL={imageURL}
              symbol={symbol}
              name={name}
              price={price}
              priceDelta={priceDelta}
              marketCap={marketCap}
              marketDelta={marketDelta}
            />
          )
        )}
      </>
    );
  }
}
