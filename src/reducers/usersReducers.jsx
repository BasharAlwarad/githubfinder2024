const usersReducer = (action, state) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true };
    case 'SET_USERS':
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;
