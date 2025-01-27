import { useState } from 'react';
import { useUserContext, useAlertContext } from '@/contexts';

const UserSearch = () => {
  const [input, setInput] = useState('');
  const { fetchUser, dispatch, searchUser } = useUserContext();
  const { alert, msg, showAlert } = useAlertContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      showAlert('Please enter a username', 'danger');
      return;
    }
    fetchUser(input.trim());
    setInput('');
  };

  return (
    <>
      {alert ? (
        <div className={`alert alert-${alert}`}>
          <p>{msg}</p>
        </div>
      ) : (
        <div className="grid grid-cols1 xl:grid-cols-2 lg:grid-cols-2 md:grid-clos-2 mb-8 gap-8">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <div className="relative">
                  <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    className="w-full pr-40 bg-gray-200 input input-lg text-black"
                    placeholder="Search Users..."
                    value={input}
                  />
                  <button
                    className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div>
            {searchUser && (
              <button
                className="btn btn-ghost btn-lg"
                onClick={() => dispatch({ type: 'CLEAR_USER' })}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UserSearch;
