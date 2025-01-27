import { UserResults, UserSearch } from '@/components';
import { useUserContext } from '@/contexts';

const Home = () => {
  const { searchUser, users, loading } = useUserContext();

  return (
    <>
      <UserSearch />
      {!searchUser ? (
        <UserResults users={users} loading={loading} />
      ) : (
        <UserResults users={searchUser} loading={loading} />
      )}
    </>
  );
};

export default Home;
