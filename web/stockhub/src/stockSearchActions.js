import { fetchStocksBegin, fetchStocksSuccess } from "./stockActions";
import Papa from 'papaparse';

export function fetchStockSearchData() {
  return dispatch => {
    dispatch(fetchStocksBegin());
    return fetch("./companylist.csv")
    .then(handleErrors)
    .then(res => res.text())
    .then(data => {
      const results = Papa.parse(data).data;
      const mappedData = results.map((stock) => ({
        symbol: stock[0],
        name: stock[1],
      }));
      dispatch(fetchStocksSuccess(mappedData));
    });
  }
}

export function handleErrors(response) {
  if (!response.ok) throw Error(response.statusText);
  return response;
}
