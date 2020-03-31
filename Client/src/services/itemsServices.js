import http from "./httpService";
import { globalApi } from "../config.json";

// const apiEndpoint = apiUrl + "/products";

const apiEndpoint = globalApi + "/products";

function itemUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getItems() {
  return http.get(apiEndpoint);
}
