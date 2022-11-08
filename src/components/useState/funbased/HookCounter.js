import { useState } from "react"

const HookCounter = () => {

    const [count,setCount] = useState(0)

    const incrementCount = () => {
        setCount(p => p + 1)
    }

    return(
        <div>
            <button onClick={incrementCount} > Count {count} </button>
        </div>
    )


}

export default HookCounter