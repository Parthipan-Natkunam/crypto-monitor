import React, { Component } from "react";

import PricingListItem from "../components/PricingListItem";
import ErrorMessage from "../components/ErrorMessage";
import LoadingMessage from "../components/LoadingMessage";
import currencyTicker from "../api/currencyTicker";

export default class PricingList extends Component {
  state = {
    data: [],
    error: null,
    loading: true,
  };

  fetchData = async () => {
    try {
      this.setState({
        loading: true,
      });
      const data = await currencyTicker.getPriceData();
      this.setState({
        data,
        loading: false,
      });
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage message={this.state.error} />;
    }
    if (this.state.loading) {
      return <LoadingMessage />;
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
