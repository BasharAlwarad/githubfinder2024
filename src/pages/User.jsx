import { useParams, useNavigate } from 'react-router-dom';
const User = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default User;
