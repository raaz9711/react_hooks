// import { useEffect, useState } from "react"

// const HookCounterOne = () => {
//     const [count,setCount] = useState(0)

//     useEffect(() => {
//         document.title = `you clicked ${count} times`
//     })

//     return(<div>
//         <button onClick={() => setCount(count+1)}>Click {count} times </button>
//     </div>)
// }


// export default HookCounterOne

import { useEffect, useState } from "react"

const HookCounterOne = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')


    useEffect(() => {
        console.log('useEffect')
        document.title = `you clicked ${count} times`
    },[count])

    return(<div>
        <input type={'text'} value ={name} onChange = {e => setName(e.target.value)} />
        <button onClick={() => setCount(count+1)}>Click {count} times </button>
    </div>)
}


export default HookCounterOne