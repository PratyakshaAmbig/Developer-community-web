import React, { useState } from "react";

const HOC = (OriginalComponent) => {
  function NewComponents() {
    const [money, setMoney] = useState(10);
    const handleIncreaseMoney = () => {
      setMoney(money * 2);
    };
    return (
      <OriginalComponent
        money={money}
        handleIncreaseMoney={handleIncreaseMoney}
      />
    );
  }
  return NewComponents;
};

export default HOC;
