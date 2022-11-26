import { useReducer } from "react"

const intialCount = {
    firstCounter : 0,
    secondCounter : 0
};

const reducer = (state,action) => {
    console.log('prev', state,action,'8')
    switch(action.type){
        case 'increment' :
            return {...state,firstCounter: state.firstCounter + action.value}
        case 'decrement' :
            return {...state,firstCounter: state.firstCounter - action.value}
        case 'increment2' :
            return {...state,secondCounter: state.secondCounter + action.value}
        case 'decrement2' :
            return {...state,secondCounter: state.secondCounter - action.value}
        case 'reset' :
            return {...state,firstCounter : 0}
        case 'reset2' :
            return {...state,secondCounter : 0}    
        default :
            return state
    }
}


const ReduceCounterTwo = () => {
    const [count,dispatch] = useReducer(reducer,intialCount)

return(

    <div>
     <p> Counter1  {count.firstCounter}    </p>
     <p>Counter2  {count.secondCounter} </p>
        <button onClick={() => dispatch({type:'increment',value:1})} >Increment</button>
        <button onClick={() => dispatch({type:'decrement',value:1})} >Decrement</button>
        <button onClick={() => dispatch({type:'increment',value:5})} >Increment 5 </button>
        <button onClick={() => dispatch({type:'decrement',value:5})} >Decrement 5 </button>
        <button onClick={() => dispatch({type:'increment2',value:1})} >Increment second</button>
        <button onClick={() => dispatch({type:'decrement2',value:1})} >Decrement second</button>

        <button onClick={() => dispatch({type:'reset'})} >Reset</button>
        <button onClick={() => dispatch({type:'reset2'})} >Reset 2</button>

    </div>


)
}

export default ReduceCounterTwo