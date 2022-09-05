import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Contador</h1>
      <h2>{count}</h2>
      <button onClick={incrementCount}>Contar!</button>
    </div>
  );
}
