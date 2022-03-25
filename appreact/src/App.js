import React from "react";
import Exe05 from "./exe05-useEffect/Exe05";
import Exe04 from "./exe04-useState/Exe04";
import Exe03 from "./exe03-Componentes/Exe03";
import Exe02 from "./exe02-JSX-Arrays/Exe02";
import Exe01 from "./exe01-JSX/Exe01";

const App = () => {
  
  return (
    <>

      <hr />
      <h1 style={{color: "red"}}>Exercício 05</h1>
      <Exe05 />
          
      <hr />
      <h1 style={{color: "red"}}>Exercício 04</h1>
      <Exe04 />

      <hr />
      <h1 style={{color: "red"}}>Exercício 03</h1>
      <Exe03 />

      <hr />
      <h1 style={{color: "red"}}>Exercício 02</h1>
      <Exe02 />

      <hr />
      <h1 style={{color: "red"}}>Exercício 01</h1>
      <Exe01 />
      
    </>
  );
};

export default App;