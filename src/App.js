import React from "react"
import './App.css';
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Jones"}
        firstName={"Robert"}
        age={32}
        hair={"blonde"}
      />
      <PersonCard
        lastName={"Grimes"}
        firstName={"Rick"}
        age={42}
        hair={"Dark Brown"}
      />
      <PersonCard
        lastName={"Doe"}
        firstName={"Jane"}
        age={31}
        hair={"brunette"}
      />
      <PersonCard
        lastName={"Lopez"}
        firstName={"Eduardo"}
        age={35}
        hair={"black"}
      />
    </div>
  );
}
  
  
export default App;
