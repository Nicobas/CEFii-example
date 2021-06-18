const initialState = {
  userData: null,
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

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      return login(state, action);
    case 'logout':
      return logout(state, action);
    default:
      return state;
  }
};

export default authReducer;
