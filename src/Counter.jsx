import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    return(

        <div className="counter">
        <div className="heading">
        <h1>Tasbah</h1>
        <button>Dark/Light</button>
        </div>

        <div className="main-continer">
        <div className="number-display">
        {count}
        </div>
        
        <div className="buttons">
        <button className="add-btn" onClick={() => setCount(count + 1)}>Add</button>
        <button  className="minus-btn" onClick={() => setCount(count >= 1 ? count -1 : 0)}>Minus</button>
        <button className="reset-btn" onClick={() => setCount(0)}>Reset</button>
        </div>
    
        </div>
        </div>
    )
}
export default Counter