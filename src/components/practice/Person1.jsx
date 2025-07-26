import React, { useState } from "react";
import HOC from "./HOC";

const Person1 = ({money,handleIncreaseMoney}) => {
  return (
    <div className="flex items-center gap-2">
      <h1>Pratyaksha is offering RS:{money}</h1>
      <button onClick={handleIncreaseMoney} className="bg-red-400 p-2 rounded-xl">
        Increase Money
      </button>
    </div>
  );
};

export default HOC(Person1);
