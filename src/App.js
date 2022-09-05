import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = "React Hooks | useEffect";
  }, []);

  useEffect(() => {
    alert("Valor do contador " + counter);
  }, [counter]);

  const incrementCount = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>Contador</h1>
      <h2>{counter}</h2>
      <button onClick={incrementCount}>Contar!</button>
    </div>
  );
}

