import { useState } from "react";

function Counter () {
    const [count, setCount] = useState(0);
    const handleIncre = ()=> {
        console.log("Incre");
        setCount(count+1);
    }
    const handleDecre = ()=> {
        console.log("Decre");
        setCount(count-1);
    }


    //comments
    return (
<>
<h4>Counter Example</h4>

<h5>Count :{count}</h5>
<button type="button" onClick={handleIncre}>+</button>
<button type="button" onClick={handleDecre}>-</button>
</>
    );
}
export default Counter;

Test@122023