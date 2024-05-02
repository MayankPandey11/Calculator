import { useState } from "react";
import "./App.css";
import Box from "./Component/Box/Box";
import Num from "./Component/Num/Num";

function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
      if(buttonText === "C"){
        setCalVal("");
      }else if(buttonText === "="){
        let result = eval(calVal);
        setCalVal(result);
      }else if(buttonText === "E"){
              setCalVal("0");
      }else{
        setCalVal(calVal + buttonText);
      }
  }
  return (
    <>
      <h1 className="title">Calculator</h1>
      <div className="container">
        <Box displayValue={calVal} />
        <Num onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
