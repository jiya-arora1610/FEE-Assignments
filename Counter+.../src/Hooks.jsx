import { useState, useEffect } from "react";

function Hooks(){
    const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count+1);
    }
    useEffect(()=>{
        document.title = "welcome jiya";
    },[])
    return(
        <>
            <h1>count: {count}</h1>
            <button onClick={handleClick}>ADD</button>
        </>
    )
}

export default Hooks;