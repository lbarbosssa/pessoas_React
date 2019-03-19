//ACTION TYPE
const SET_LIST = "SET_LIST";
const CLEAR = "CLEAR";
const GET_LIST = "GET_LIST";

//ACTION CREATORS
export const setList = pessoas => {
  return {
    type: SET_LIST,
    payload: {
      loading: true,
      pessoas
    }
  };
};

export const getList = () => {
  return {
    type: GET_LIST
  };
};

export const clear = (alert) => {
  return {
    type: CLEAR,
    payload: {
      alert
    }
  };
};
