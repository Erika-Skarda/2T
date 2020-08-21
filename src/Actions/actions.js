export const toggleStatus = id => {
  return {
    type: "TOGGLE_STATUS",
    payload: {
      id
    }
  };
};

export const setFilter = filter => {
  return {
    type: "SET_FILTER",
    payload: {
      filter
    }
  };
};
export const addClient = text => {
  return {
    type: "ADD_CLIENT",
    payload: {
      text
    }
  };
};