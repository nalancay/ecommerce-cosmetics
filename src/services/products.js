import { makeRequest } from "./products.utils";

export default class Products {
  static async getProducts_type({ product_type }) {
    const URL_ENDPOINT = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`;

    try {
      const { data, isSuccessful } = await makeRequest({ URL_ENDPOINT });
      if (!isSuccessful) {
        throw new NetworkError();
      }
      return data;
    } catch (err) {
      throw err;
    }
  }
}

class NetworkError extends Error {
  constructor() {
    super("Network error");
  }
}
