const usersReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOADING':
      return { ...state, loading: true };
    case 'GET_USERS':
      return { ...state, loading: false, users: payload.users };
    case 'GET_USER':
      return { ...state, loading: false, searchUser: payload.searchUser };
    case 'SHOW_USER_DETAILS':
      localStorage.setItem('user', JSON.stringify(payload.user));
      return {
        ...state,
        loading: false,
        user: JSON.parse(localStorage.getItem('user')),
      };
    case 'CLEAR_USER':
      return { ...state, loading: false, searchUser: null };
    default:
      return state;
  }
};

export default usersReducer;
