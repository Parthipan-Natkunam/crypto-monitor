import http, { asyncErrorHandler } from "./base";

const END_POINT = "currencies/ticker";

const formatData = (rawResponseData) => {
  return rawResponseData.map(
    ({
      logo_url: imageURL,
      currency: symbol,
      name,
      price,
      market_cap: marketCap,
      "1d": {
        price_change_pct: priceDelta,
        market_cap_change_pct: marketDelta,
      },
    }) => {
      return {
        imageURL,
        symbol,
        name,
        price: +price,
        marketCap: +marketCap,
        priceDelta: +priceDelta,
        marketDelta: +marketDelta,
      };
    }
  );
};

const getPriceTicker = async () => {
  const resp = await http.get(END_POINT);
  const { data = [] } = resp;
  if (data.length === 0) {
    throw new Error("No Data Available");
  }

  return formatData(data);
};

export default {
  getPriceData: asyncErrorHandler(getPriceTicker),
};
