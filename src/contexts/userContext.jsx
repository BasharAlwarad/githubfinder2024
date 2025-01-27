import axios from 'axios';
import { useEffect, useContext, createContext, useReducer } from 'react';
import { usersReducer } from '@/reducers';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = {
    loading: false,
    users: JSON.parse(localStorage.getItem('users')) || Array(10),
    searchUser: null,
  };

  const [{ loading, users, searchUser }, dispatch] = useReducer(
    usersReducer,
    initialState
  );

  const githubAuth = import.meta.env.VITE_GITHUB_AUTH;
  const githubUrl = import.meta.env.VITE_GITHUB_URL;

  const fetchUsers = async () => {
    try {
      if (localStorage.getItem('users')) return;
      dispatch({ type: 'LOADING' });
      const { data } = await axios.get(`${githubUrl}/users`, {
        headers: {
          Authorization: `Bearer ${githubAuth}`,
        },
      });
      localStorage.setItem('users', JSON.stringify(data));
      dispatch({
        type: 'GET_USERS',
        payload: {
          users: data,
        },
      });
    } catch (error) {
      console.error('Failed to fetch users:', error.message);
    }
  };

  const fetchUser = async (e, name) => {
    e.preventDefault();
    try {
      // if (!name.trim()) {
      //   alert('Please enter a username');
      //   return;
      // }
      dispatch({ type: 'LOADING' });
      const params = new URLSearchParams({ q: name });
      const { data } = await axios.get(`${githubUrl}/search/users?${params}`, {
        headers: {
          Authorization: `Bearer ${githubAuth}`,
        },
      });
      dispatch({
        type: 'GET_USER',
        payload: {
          searchUser: data.items,
        },
      });
    } catch (error) {
      console.error('Failed to fetch user:', error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{ users, searchUser, loading, fetchUser, dispatch }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
