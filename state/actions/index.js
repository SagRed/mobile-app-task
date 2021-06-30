export const addFeed = feed => {
  return dispatch => {
    dispatch({
      type: "ADD_FEED",
      payload: feed,
    });
  };
};
