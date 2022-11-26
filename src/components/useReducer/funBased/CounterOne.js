import { useReducer } from "react"

const intialCount = 0;

const reducer = (state,action) => {
    console.log(state,action,'16')
    switch(action){
        case 'increment' :
         console.log(action,state)
            return state + 1
        case 'decrement' :
         console.log(action,state)
            return state - 1
        case 'reset' :
         console.log(action,state)
            return 0
        default :
            return state
    }
}


const ReduceCounterOne = () => {
    const [count,dispatch] = useReducer(reducer,intialCount)

return(

    <div>
     <p>   {count} </p>
        <button onClick={() => dispatch('increment')} >Increment</button>
        <button onClick={() => dispatch('decrement')} >Decrement</button>
        <button onClick={() => dispatch('reset')} >Reset</button>
    </div>


)
}

export default ReduceCounterOne