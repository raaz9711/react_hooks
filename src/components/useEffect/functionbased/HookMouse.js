import { useEffect, useState } from "react"

const HookMouse = () => {

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = e => {
        console.log('log mouse')
        setX(e.clientX)
        setY(e.clientY)

    }

    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('mousemove',logMousePosition)
debugger
        return () => {
            console.log('removing event')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    return(<div>
        X - {x} Y- {y}
    </div>)

}


export default HookMouse