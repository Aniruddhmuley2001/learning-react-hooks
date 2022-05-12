import "./App.css";

import React from 'react'
import UseState1 from "./hooks-example/UseState1";
import UseState2 from "./hooks-example/UseState2";
import UseReducer1 from "./hooks-example/UseReducer1";

function App() {
  return (
    <div className="App">
      <UseState1 />
      <br />
      <UseState2 />
      <br />
      <UseReducer1 />
    </div>
  );
}

export default App;