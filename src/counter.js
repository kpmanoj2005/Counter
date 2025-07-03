import { useState } from "react"

function Counter() {
    const [count,setCount]=useState(0);
    

  return (
    <>
      <h2>Count: {count}</h2>
      <button className="btn" onClick={()=>setCount(count+1)}>Increment</button>
      <button className="btn" onClick={()=>setCount(count-1)}>Decrement</button>
      <button className="reset btn" onClick={()=>setCount(0)}>Reset</button>
    </>
  );
}

export default Counter;

//UseState-hook
//add state-data that changes over time
//
//class-statefull,functional - stateless
//hooks-special function that let us hook into react features
//<></>- is called fragment