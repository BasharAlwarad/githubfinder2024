import UserItem from './UserItem';
// import { useUserContext } from '@/contexts';

const UserResults = ({ users, loading }) => {
  // const { users, loading } = useUserContext();

  return (
    <main>
      {users ? (
        loading ? (
          <ul className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users?.map((e, i) => (
              <li key={i} className="text-center">
                <div className="flex flex-col gap-4 w-52">
                  <div className="w-full h-32 skeleton"></div>
                  <div className="h-4 skeleton w-28"></div>
                  <div className="w-full h-4 skeleton"></div>
                  <div className="w-full h-4 skeleton"></div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <ul className="grid grid-cols-1 gap-8 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
              {users?.map((e) => (
                <UserItem key={e.id} user={e} />
              ))}
            </ul>
          </div>
        )
      ) : (
        <p>No users found.</p>
      )}
    </main>
  );
};

export default UserResults;
