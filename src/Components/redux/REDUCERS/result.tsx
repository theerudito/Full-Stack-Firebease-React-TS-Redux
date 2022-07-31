const inicialState = {
  data: [],
};

export const resultReducer = (state = inicialState, action: any) => {
  console.log(action.type);
  switch (action.type) {
    case "GET_FIREBASE":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
