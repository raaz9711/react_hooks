import axios from "axios"
import { useEffect, useReducer } from "react"

const initialState = {loading:true,post:{},error:''}

const reducer = (state,action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                loading : false,
                post : action.payload,
                error: ''
            }
        
        case 'FETCH_ERROR' : 
        return{
            loading : false,
            post : {},
            error: 'Something went wrong'
        }
        default :
        return state
    }
}
const FetchByReducer = () => {

    const [state,dispatch] = useReducer(reducer,initialState);
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    useEffect(() => {
        axios.get(url,)
        .then(res => {
            dispatch({type:'FETCH_SUCCESS',payload:res.data})
        })
        .catch(error => {
            dispatch({type:'FETCH_ERROR'})
        })
    },[])
    

    return(<div>
        <p>FetchReducer</p>
        {state.loading ? 'loading' : state.post.title}
        {state.error ? state.error : null}

    </div>)
}

export default FetchByReducer