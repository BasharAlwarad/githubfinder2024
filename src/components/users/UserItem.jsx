import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="flex flex-row justify-between p-2 shadow-xl bg-base-300">
      <figure className="w-[5rem] h-[5rem]">
        <img className="rounded-full" src={avatar_url} alt="avatar_url" />
      </figure>
      <div className="flex flex-col items-start justify-between w-[50%] ">
        <h2 className="text-xl">{login} </h2>
        <Link to={`/users/${login}`} className="justify-end card-actions">
          <button className="btn btn-primary btn-sm">Visit Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
