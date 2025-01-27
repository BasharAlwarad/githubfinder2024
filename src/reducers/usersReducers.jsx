const usersReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOADING':
      return { ...state, loading: true };
    case 'GET_USERS':
      return { ...state, loading: false, users: payload.users };
    case 'GET_USER':
      return { ...state, loading: false, searchUser: payload.searchUser };
    case 'CLEAR_USER':
      return { ...state, loading: false, searchUser: null };
    default:
      return state;
  }
};

export default usersReducer;
