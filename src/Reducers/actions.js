const initialState = {
  clientList: [
    {
      id: "",
      status: true,
      name:"",
      cpf:"",
      tipo:"",
      data:""
    }
  ],
  filter: "data"
};

export const actions = (state = initialState, action) => {
 
  switch (action.type) {
    case "TOGGLE_STATUS": {
      const newClient = state.clientList.map(client => {
        if (client.id === action.payload.id) {
          return {
            ...client,
            status: !client.status
          };
        }
        return client;
      });
      return {
        ...state,
        clientList: newClient 
      };
    }
    case "SET_FILTER": {
      return {
        ...state,
        filter: action.payload.filter
      };
    }
    default:
      return state;
  }
};