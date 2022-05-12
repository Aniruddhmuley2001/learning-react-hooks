import React, { useState} from 'react'

function useState2() {
  const [inputValue, setInputValue] = useState("Test");

  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  return (
    <div className="useState2">
      <h1><b>Use State 2</b></h1>
      <input placeholder='Enter text here' onChange={onChange} />
      {inputValue}
    </div>
  );
}

export default useState2;