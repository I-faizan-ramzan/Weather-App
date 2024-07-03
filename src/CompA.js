import React from "react";
import CompB from "./CompB";
const CompA = ({text1,text2,text3}) => {
  return (
    <div>
    <h1>
        {text1}
    </h1>
    <h1>
        {text2}
    </h1>
    <p>
        {text3}
    </p>
      <CompB />
    </div>
  );
};

export default CompA;
