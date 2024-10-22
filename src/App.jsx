import { useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    first_name: '',
    last_name: '',
    age: '',
  });
  const [userId, setUserId] = useState('');
  const [updateUserId, setUpdateUserId] = useState('');
  const [updateUser, setUpdateUser] = useState({
    first_name: '',
    last_name: '',
    age: '',
  });

  const getUsers = async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/api/v1/users');
      setUsers(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUser = async (id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/users/${id}`
      );
      setUsers([data]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const createUser = async (newUser) => {
    try {
      const { data } = await axios.post(
        'http://localhost:8080/api/v1/users/',
        newUser
      );
      setUsers([...users, data]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateUserById = async (id, updatedUser) => {
    try {
      const { data } = await axios.put(
        `http://localhost:8080/api/v1/users/${id}`,
        updatedUser
      );
      setUsers(users.map((user) => (user.id === id ? data : user))); // Update user in the list
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/users/${id}`);
      setUsers(users.filter((user) => user.id !== id)); // Remove user from the list
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    createUser(newUser);
    setNewUser({ first_name: '', last_name: '', age: '' });
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    updateUserById(updateUserId, updateUser);
    setUpdateUserId('');
    setUpdateUser({ first_name: '', last_name: '', age: '' });
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <h1 className="mb-8 text-3xl font-bold">User Management</h1>

      {/* Create User Form */}
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Create User</h2>
        <form onSubmit={handleCreateUser}>
          <input
            type="text"
            placeholder="First Name"
            className="w-full mb-4 input input-bordered"
            value={newUser.first_name}
            onChange={(e) =>
              setNewUser({ ...newUser, first_name: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full mb-4 input input-bordered"
            value={newUser.last_name}
            onChange={(e) =>
              setNewUser({ ...newUser, last_name: e.target.value })
            }
            required
          />
          <input
            type="number"
            placeholder="Age"
            className="w-full mb-4 input input-bordered"
            value={newUser.age}
            onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
            required
          />
          <button className="w-full btn btn-primary" type="submit">
            Create User
          </button>
        </form>
      </div>

      <div className="w-full max-w-md p-6 mt-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Update User</h2>
        <form onSubmit={handleUpdateUser}>
          <input
            type="number"
            placeholder="User ID"
            className="w-full mb-4 input input-bordered"
            value={updateUserId}
            onChange={(e) => setUpdateUserId(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-full mb-4 input input-bordered"
            value={updateUser.first_name}
            onChange={(e) =>
              setUpdateUser({ ...updateUser, first_name: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full mb-4 input input-bordered"
            value={updateUser.last_name}
            onChange={(e) =>
              setUpdateUser({ ...updateUser, last_name: e.target.value })
            }
            required
          />
          <input
            type="number"
            placeholder="Age"
            className="w-full mb-4 input input-bordered"
            value={updateUser.age}
            onChange={(e) =>
              setUpdateUser({ ...updateUser, age: e.target.value })
            }
            required
          />
          <button className="w-full btn btn-warning" type="submit">
            Update User
          </button>
        </form>
      </div>

      <div className="w-full max-w-md p-6 mt-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Get User by ID</h2>
        <input
          type="number"
          placeholder="User ID"
          className="w-full mb-4 input input-bordered"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button
          className="w-full btn btn-secondary"
          onClick={() => getUser(userId)}
        >
          Get User
        </button>
      </div>

      <div className="w-full max-w-md p-6 mt-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">All Users</h2>
        <button className="w-full mb-4 btn btn-accent" onClick={getUsers}>
          Fetch All Users
        </button>
        <ul className="pl-5 space-y-2 list-disc">
          {users.map((user) => (
            <li key={user.id} className="flex items-center justify-between">
              <span>
                {user.first_name} {user.last_name}, Age: {user.age}
              </span>
              <button
                className="btn btn-xs btn-error"
                onClick={() => deleteUser(user.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
