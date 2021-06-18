const initialState = {
  incrementValue: 0,
};

const increment = (state, action) => {
  return {
    ...state,
    incrementValue: state.incrementValue + 1,
  };
};

const decrement = (state, action) => {
  return {
    ...state,
    incrementValue: state.incrementValue - 1,
  };
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return increment(state, action);
    case 'decrement':
      return decrement(state, action);
    default:
      return state;
  }
};

export default authReducer;
