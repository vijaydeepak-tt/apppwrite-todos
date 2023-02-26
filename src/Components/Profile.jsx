import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { account } from '../appwrite/appwriteConfig';
import TodoForm from './TodoForm';
import Todos from './Todos';

function Profile() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const getData = account.get();
    getData.then(
      (res) => {
        setUserDetails(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const onLogout = () => {
    const promise = account.deleteSessions();
    promise.then(
      function (response) {
        console.log(response); // Success
        navigate('/');
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  return (
    <>
      {userDetails ? (
        <>
          <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md">
            <div>
              <p className="text-xl">Hello {userDetails.name}</p>
            </div>
            <div>
              <button
                className="bg-red-400 text-white p-1 rounded-md"
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
          </div>
          {/* TODO FORM */}
          <TodoForm />
          {/* TODOS BOX */}
          <Todos />
        </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{' '}
          <Link to="/">
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </>
  );
}

export default Profile;
