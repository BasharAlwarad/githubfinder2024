import axios from 'axios';
import { useState, useEffect, useContext, createContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem('users')) || Array(10)
  );
  const [loading, setLoading] = useState(false);
  const githubAuth = import.meta.env.VITE_GITHUB_AUTH;
  const githubUrl = import.meta.env.VITE_GITHUB_URL;

  const fetchUsers = async () => {
    try {
      if (localStorage.getItem('users')) return;
      setLoading(true);
      const { data } = await axios.get(githubUrl, {
        headers: {
          Authorization: `Bearer ${githubAuth}`,
        },
      });

      localStorage.setItem('users', JSON.stringify(data));
      setUsers(data);
      setLoading(false);
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
