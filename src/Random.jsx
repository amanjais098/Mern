
import {useState} from "react";
function Random(){
    const[RandomNum, setRandom] = useState[0]
    let number = Math.random()*100;
    return(
        <>
        <h1>{number}</h1>
        <button onClick={()=>setRandom(Math.round(number))}>Random</button>
        </>
    )

}

export default Random;










