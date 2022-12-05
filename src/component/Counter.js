import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <AiOutlinePlusCircle
//         size={30}
//         color={"red"}
//         onClick={() => setCount(count + 1)}
//       />
//       <h1>{count}</h1>
//       <AiOutlineMinusCircle
//         size={30}
//         color={"blue"}
//         onClick={() => setCount(count - 1)}
//       />
//     </div>
//   );
// };

const Counter = () => {
  const [count, setCount] = useState(2);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <h1>{count}</h1>
      {/* <button onClick={() => (count > 0 ? setCount(count - 1) : void 0)}>
      <button onClick={() => (count > 0 ? setCount(count - 1) : setCount(count))}> */}
      <button onClick={() => setCount(count > 1 ? count - 1 : count)}>
        Minus
      </button>
    </div>
  );
};

export default Counter;
