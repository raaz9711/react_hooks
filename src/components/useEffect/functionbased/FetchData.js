import axios from "axios"
import { useEffect, useState } from "react"


const FetchData = () => {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {console.log(res); setPost(res.data) })
        .catch((err) => console.log(err))
    },[id])

    return(<div>
        <input value={id} onChange = {e => setId(e.target.value)} type='text' />
        {/* <ul>
            {
                post.map(p => <li key={p.id}>{p.title}</li>)
            }
        </ul> */}
        <p>{post.title}</p>
    </div>)
}

export default  FetchData;