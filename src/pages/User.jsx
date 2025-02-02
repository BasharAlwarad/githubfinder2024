import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    console.log(storedUser);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  if (!user) return null;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl border border-gray-200">
        <figure>
          <FaUserFriends className="text-9xl text-center text-blue-500" />
          <FaCodepen className="text-9xl text-center text-blue-500" />
          <FaStore className="text-9xl text-center text-blue-500" />
          <FaUsers className="text-9xl text-center text-blue-500" />

          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-32 h-32 rounded-full mt-4"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-bold">{user.login}</h2>
          <p className="text-gray-600">GitHub ID: {user.id}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full"
          >
            View Profile
          </a>
          <div className="w-full flex flex-col space-y-2 mt-4">
            <a
              href={user.repos_url}
              className="btn btn-outline btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositories
            </a>
            <a
              href={user.followers_url}
              className="btn btn-outline btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Followers
            </a>
            <a
              href={user.following_url.replace('{/other_user}', '')}
              className="btn btn-outline btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Following
            </a>
            <a
              href={user.organizations_url}
              className="btn btn-outline btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Organizations
            </a>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-secondary w-full mt-4"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
