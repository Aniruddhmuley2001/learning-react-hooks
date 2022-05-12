import React, { useState, useEffect } from "react";
import axios from "axios";

function UseEffect1() {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[0].name);
                console.log("API called");
            })
    }, []);
    // The array beside (empty in this case) shows the dependencies on which API call is made

    return (
        <div>
            <h1><b>Use Effect 1</b></h1>
            <h1>Hello {data}</h1>
            <h1>{count}</h1>
            <button
                onClick={() => {
                    setCount(count+1);
                }}    
            >
                Click here
            </button>
        </div>
    )
}

export default UseEffect1;