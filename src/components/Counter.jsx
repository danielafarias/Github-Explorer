import { useState } from "react";

// sem conceito de imutabilidade:
// users = ['dani', 'vitoria']
// users.push('paola)

// com conceito de imutabilidade:
// newUsers = [...users, 'paola']

export function Counter() {
    const [counter, setCounter] = useState(0);


    function increment() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    )
}