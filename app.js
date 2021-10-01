import React, { Component } from "react"; // import from react
import { Window, App } from "proton-native"; // import the proton-native components

import TopBar from "./components/TopBar";
import PricingList from "./containers/PricingList";
import ContentLayout from "./containers/ContentLayout";
export default class Main extends Component {
  render() {
    return (
      <App>
        <Window
          title="CryptoMon"
          style={{
            height: 800,
            width: 1200,
            background: "#e3e3e3",
            color: "#000",
          }}
        >
          <TopBar appTitle="CryptoMon" appLogoURL="./asset/img/logo.png" />
          <ContentLayout>
            <PricingList/>
          </ContentLayout>
        </Window>
      </App>
    );
  }
}
