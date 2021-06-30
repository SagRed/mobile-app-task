export const feedReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FEED":
      return [...state, action.payload];
    default:
      return state;
  }
};
