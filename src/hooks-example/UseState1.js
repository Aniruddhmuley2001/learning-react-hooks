import React, { useState} from 'react'

function UseState1() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="useState1">
      <h1><b>Use State 1</b></h1>
      {counter}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseState1;