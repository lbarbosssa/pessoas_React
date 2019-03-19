export default (state = {}, action) => {
  switch (action.type) {
    case "SET_LIST":
      return { ...action.payload };
    case "CLEAR":
      return action.payload;
    case "GET_LIST":
      return { ...state, loading: false };
    default:
      return state;
  }
};
