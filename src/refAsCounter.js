import {useState} from 'react';

export default function RefAsCounter(){
    const [counter, setCounter] = useState(0);
    
    function increaseCounter(){
        setCounter(counter + 1);
    };
    
    function showCounter(){
        alert('O valor atual do counter é ' + counter);
    };
    
    return (
        <div>
            <h1>Armazenador de clicks.</h1>
            <button onClick={increaseCounter}>Aumentar (inibido)</button>
            &nbsp;
            <button onClick={showCounter}>Mostrar o número de clicks atual</button>
        </div>
    );
}