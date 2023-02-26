import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

import {
  databases,
  DATABASE_ID,
  COLLECTION_ID,
} from '../appwrite/appwriteConfig';

function TodoForm() {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const promise = databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      uuidV4(),
      {
        todo,
      }
    );

    promise.then(
      function (response) {
        console.log(response); // Success
        e.target.reset();
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <form
        action=""
        className="flex justify-center mb-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Todo"
          className="border p-2 w-2/3 rounded-md"
          onChange={({ target }) => setTodo(target.value)}
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
