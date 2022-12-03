import { useContext } from "react"
import { CountContext } from "../../App"
import ComponentC from "./ComponentC"

const ComponentB = () => {

    const contextB = useContext(CountContext)
    console.log('B',contextB)
    return(<div>
        Component B | {contextB.contextCount}
        <button onClick={() => contextB.contextDispatch('increment')} >Increment</button>
        <button onClick={() => contextB.contextDispatch('decrement')} >Decrement</button>
        <button onClick={() => contextB.contextDispatch('reset')} >Reset</button>
        <ComponentC/>
    </div>)
}

export default ComponentB