import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {

    document.title = ` the count is${count}`;
  });

  return (
    <div className="items-center text-center mt-80 ">
     
      <div className=" flex-row "> 
      <h1 className=" text-3xl font-bold ">
        {count}
      </h1>



      <button onClick={decrement} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5 mr-2">
        -1
      </button>

      <button onClick={increment} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5 ml-2 ">
        +1
      </button>


      </div>

    </div>
  );
}

export default App;
