import React, { useEffect, useState } from "react";

const Context = () => {
  const [count, setCount] = useState();
  useEffect(() => {
    console.log("Render =" + count);
  });
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
};

export default Context;
