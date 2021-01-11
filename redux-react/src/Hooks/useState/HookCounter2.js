import React, {useState} from 'react'

function HookCounter2() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const increment = () => {
        setCount(prev=> prev + 1)
    }
    const decrement = () => {
        setCount(prev=> prev - 1)
    }
    const reset = () => {
        setCount(initialCount)
    }
    const increment5 = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prev=> prev + 1)
        }
    }
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment5}>Increment 5</button>
        </div>
    )
}

export default HookCounter2
