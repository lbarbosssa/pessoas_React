//ACTION TYPE
const SET_LIST = "SET_LIST";
const CLEAR = "CLEAR";

//ACTION CREATORS
export const setList = pessoas => {
  console.log("Action setList ->", pessoas);
  return {
    type: SET_LIST,
    payload: {
      pessoas
    }
  };
};

export const clear = () => {
  console.log("Action  para limpar");
  return {
    type: CLEAR,
    payload: {
      pessoas: null
    }
  };
};
