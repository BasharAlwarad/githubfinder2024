import axios from 'axios';
import { useEffect, useContext, createContext, useReducer } from 'react';
import { usersReducer } from '@/reducers';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = {
    loading: false,
    users: JSON.parse(localStorage.getItem('users')) || Array(10),
  };

  const [{ loading, users }, dispatch] = useReducer(usersReducer, initialState);

  const githubAuth = import.meta.env.VITE_GITHUB_AUTH;
  const githubUrl = import.meta.env.VITE_GITHUB_URL;

  const fetchUsers = async () => {
    try {
      if (localStorage.getItem('users')) return;
      dispatch({ type: 'LOADING' });
      const { data } = await axios.get(githubUrl, {
        headers: {
          Authorization: `Bearer ${githubAuth}`,
        },
      });

      localStorage.setItem('users', JSON.stringify(data));
      dispatch({
        type: 'SET_USERS',
        payload: {
          loading: false,
          users: data,
        },
      });
    } catch (error) {
      console.error('Failed to fetch users:', error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
