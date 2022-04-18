import { useEffect, useState } from "react"



const UseWindowSize = ()=>{
    const [windowWidth,setWindowWidth] = useState(window.innerWidth)
    useEffect(()=>{
        const handleResize = ()=>{
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
        return ()=> window.removeEventListener('resize', handleResize)
    },[])

    return {isMobile : windowWidth !== null ? windowWidth < 768 : false}

}

export default UseWindowSize;