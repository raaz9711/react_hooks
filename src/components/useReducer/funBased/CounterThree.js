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


const ReduceCounterThree = () => {
    const [count,dispatch] = useReducer(reducer,intialCount)
    const [count2,dispatch2] = useReducer(reducer,intialCount)


return(

    <div>
     <p>   {count} </p>
        <button onClick={() => dispatch('increment')} >Increment</button>
        <button onClick={() => dispatch('decrement')} >Decrement</button>
        <button onClick={() => dispatch('reset')} >Reset</button>
    <p></p>
    {/* <p>   {count2} </p>
        <button onClick={() => dispatch2('increment')} >Increment</button>
        <button onClick={() => dispatch2('decrement')} >Decrement</button>
        <button onClick={() => dispatch2('reset')} >Reset</button> */}
    </div>


)
}

export default ReduceCounterThree