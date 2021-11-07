import { useState } from "react";
const Counter = () => {
    const [count, setcount] = useState(100);
    const [isLight, setisLight] = useState(true);
    return (
        <div >
            <button onClick={() => setcount(count - 1)}>-1</button>
            {count}
            <button onClick={()=> setcount(count + 1)}>+1</button>
        </div>
    );
}

export default Counter;