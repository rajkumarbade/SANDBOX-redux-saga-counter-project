export const incrementFn = () => {
  return {
    type: "INCREMENT"
  };
};
export const decrementFn = () => {
  return {
    type: "DECREMENT"
  };
};
export const incrementByValueFn = () => {
  return {
    type: "INCREMENT_BY_VALUE",
    value: 5
  };
};

export const resetHandler = () => {
  return {
    type: "RESET_COUNTER"
  };
};
