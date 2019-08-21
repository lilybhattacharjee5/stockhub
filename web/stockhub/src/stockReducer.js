import {
  FETCH_STOCKS_BEGIN,
  FETCH_STOCKS_SUCCESS,
  FETCH_STOCKS_FAILURE,
} from './stockActions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function stockReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_STOCKS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_STOCKS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.stocks,
      }
    case FETCH_STOCKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      }
    default:
      return state;
  }
}
