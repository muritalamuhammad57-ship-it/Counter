import { useState } from "react"

export const Counter = () =>{
    const [counter, setCounter] = useState(0)
    const handleDecrease  = () =>{if(counter>0) return setCounter(counter -1)}
    return (
        <div className="first">         
            <h1>Counter App</h1>
        <div className="Box">
            <span>{counter}</span>
            </div>
            <div className="button">
            <button onClick={() =>setCounter(counter + 1)}className="one">Increase</button>
            <button onClick={handleDecrease}className="two">Decrease</button>
        </div>
        
        </div>

    )
}
export default Counter
