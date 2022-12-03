import { useContext } from "react"
import { CountContext } from "../../App"
const ComponentC = () => {
    const contextC = useContext(CountContext)

    return(<div>
        Component C | {contextC.contextCount}
        <button onClick={() => contextC.contextDispatch('increment')} >Increment</button>
        <button onClick={() => contextC.contextDispatch('decrement')} >Decrement</button>
        <button onClick={() => contextC.contextDispatch('reset')} >Reset</button>
    </div>)
}

export default ComponentC