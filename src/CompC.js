import { useContext } from "react";
import { InsitContext, NameContext } from "./App";

const CompC = () => {
  const myName = useContext(NameContext);
  const myInstitute = useContext(InsitContext);
  return (
    <div>
      <h1>Here I am Learnig useContext Hook i C </h1>
      <h2>{myName}</h2>
      <h3>{myInstitute}</h3>
    </div>
  );
};

export default CompC;
