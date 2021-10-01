import React, { Component } from "react";
import { View } from "proton-native";

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

  firstFetch = true;
  intervalId = null;

  fetchData = async () => {
    try {
      if (this.firstFetch) {
        this.setState({
          loading: true,
        });
      }
      const data = await currencyTicker.getPriceData();
      this.setState({
        data,
        loading: false,
      });
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  };

  componentDidUpdate() {
    this.firstFetch = false;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.fetchData(), 12000);
  }

  componentWillUnmount() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  render() {
    if (this.state.error) {
      return (
        <ErrorMessage
          message={this.state.error}
          icon="./asset/img/notification.png"
        />
      );
    }
    if (this.state.loading) {
      return <LoadingMessage />;
    }
    return (
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          height: "100%",
        }}
      >
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
      </View>
    );
  }
}
