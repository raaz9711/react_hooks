import { useState } from "react"

const HookCounterTwo = () => {
const intialCount = 0;
const [count,setCount]   = useState(intialCount) 

const incrementByFive = () => {
    for(let i = 0; i < 5; i++) {
        // console.log(i)
        // setCount((p) =>
        // {
        // console.log('prev',p) 
        // return p +1
        // }
        // )
        setCount(prev => prev + 1)
    }
}

return(<div>
   <h2> Count : {count} </h2>
    <button onClick={() => setCount(intialCount)}>Reset</button>
    <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
    <button onClick= {incrementByFive}>Five</button>

</div>)
}

export default HookCounterTwo