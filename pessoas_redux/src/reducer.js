export default (state = {}, action) => {
  switch (action.type) {
    case "SET_LIST":
      return action.payload;
    case "CLEAR":
      return action.payload;
    default:
      return state;
  }
};
