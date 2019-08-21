export const FETCH_STOCKS_BEGIN = 'FETCH_STOCKS_BEGIN';
export const FETCH_STOCKS_SUCCESS = 'FETCH_STOCKS_SUCCESS';
export const FETCH_STOCKS_FAILURE = 'FETCH_STOCKS_FAILURE';

export const fetchStocksBegin = () => ({
  type: FETCH_STOCKS_BEGIN,
});

export const fetchStocksSuccess = (stocks) => ({
  type: FETCH_STOCKS_SUCCESS,
  payload: { stocks },
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_STOCKS_FAILURE,
  payload: { error },
});
