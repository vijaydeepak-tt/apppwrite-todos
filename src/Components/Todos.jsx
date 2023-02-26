import React, { useState, useEffect } from 'react';

import {
  databases,
  DATABASE_ID,
  COLLECTION_ID,
} from '../appwrite/appwriteConfig';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loader, setLoader] = useState(false);

  const getTodosList = () => {
    setLoader(true);
    const promise = databases.listDocuments(DATABASE_ID, COLLECTION_ID);

    promise.then(
      function (response) {
        setLoader(false);
        setTodos(response.documents); // Success
      },
      function (error) {
        setLoader(false);
        console.log(error); // Failure
      }
    );
  };

  useEffect(() => {
    getTodosList();
  }, []);

  const onDelete = (id) => {
    const promise = databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id);

    promise.then(
      function (response) {
        console.log(response); // Success
        getTodosList();
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-xl font-bold mb-2">Todo List</p>
      {loader ? (
        <p>Loading ...</p>
      ) : (
        <div>
          {todos.map((item) => (
            <div key={item.$id}>
              <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                <div>
                  <p>{item.todo}</p>
                </div>
                <div>
                  <span
                    className="text-red-400 cursor-pointer"
                    onClick={() => onDelete(item.$id)}
                  >
                    Delete
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Todos;
