import axios from 'axios';
const githubAuth = import.meta.env.VITE_GITHUB_AUTH;
const githubUrl = import.meta.env.VITE_GITHUB_URL;

const Home = () => {
  const x = import.meta.env;
  console.log(x);

  const url = import.meta.env.DEV ? githubUrl : 'http://google.com';
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${githubAuth}`,
        },
      });
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  //   fetchUsers();

  return <div className="text-6xl">Home</div>;
};

export default Home;
