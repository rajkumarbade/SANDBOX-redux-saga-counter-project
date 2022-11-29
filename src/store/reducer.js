const initialState = {
  count: 0
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_SUCCESS":
      return {
        count: state.count + 1
      };
    case "DECREMENT_SUCCESS":
      return {
        count: state.count - 1
      };
    case "INCREMENT_BY_VALUE":
      if (state.count === 0) {
        return {
          count: state.count + 5
        };
      }
      if (state.count !== 0) {
        return {
          count: state.count + state.count
        };
      }
      break;
    case "RESET_COUNTER_SUCCESS":
      return {
        count: 0
      };
    default: {
      return state;
    }
  }
};
export default counterReducer;
