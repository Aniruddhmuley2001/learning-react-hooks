import React, {useReducer} from "react";

// Using State

// function useReducer1() {
  // const [count, setCount] = useState(0)
  // const [showText, setShowText] =  useState(true);

  // return (
  //   <div className="useReducer1">
  //     <h1><b>Use Reducer 1</b></h1>
  //     <h1>{count}</h1>
  //     <button
  //       onClick={() => {
  //         setCount(count + 1);
  //         setShowText(!showText);
  //       }}
  //     >
  //       Click here
  //     </button>
      
  //     {showText && <p>This is a text</p>}
  //   </div>
  // );
// }


// Using Reducer

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {count: state.count+1, showText: state.showText}
    case "toggleShowText":
      return {count: state.count, showText: !state.showText}
    default:
      return state;
  }
}

const UseReducer1 = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})

  return (
    <div>
      <h1><b>Use Reducer 1</b></h1>
      <h1>{state.count}</h1>
      <button 
        onClick={() => {
          dispatch({type: "INCREMENT"});
          dispatch({type: "toggleShowText"});
        }}
      >
        Click here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  )
}

export default UseReducer1;