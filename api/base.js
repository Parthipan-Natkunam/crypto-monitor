import axios from "axios";

const BASE_URL = process.env.CRYPTOMON_API_BASE;
const API_NAMESPACE = process.env.CRYPTOMON_API_VERSION || "v1";
const API_KEY = process.env.CRYPTOMON_API_KEY || null;

export const asyncErrorHandler = (networkRequestFunction) => async () => {
  try {
    return await networkRequestFunction();
  } catch (err) {
    const message = err.message || "Something Went Wrong. Please Try again";
    throw new Error(message);
  }
};

const httpBase = axios.create({
  baseURL: `${BASE_URL}/${API_NAMESPACE}/`,
  headers: {},
  params: {
    key: API_KEY,
    status: "active",
    sort: "rank",
    "per-page": 10,
    page: 1,
  },
});

export default httpBase;
