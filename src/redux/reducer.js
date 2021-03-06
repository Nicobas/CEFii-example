const initialState = {
  userData: null,
  incrementValue: 0,
};

const login = (state, action) => {
  return {
    ...state,
    userData: action.data,
  };
};

const logout = (state, action) => {
  return {
    ...state,
    userData: null,
  };
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
    case 'login':
      return login(state, action);
    case 'logout':
      return logout(state, action);
    case 'increment':
      return increment(state, action);
    case 'decrement':
      return decrement(state, action);
    default:
      return state;
  }
};

export default authReducer;
