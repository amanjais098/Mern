// Run on every render - no dependency array


// import {useState,useEffect} from "react";
// function Counter(){
//     const[count, setCount ]= useState(0);
//     useEffect(()=> {
//         console.log("Use Effect Run");
//     },);
//     return(
//         <>
//         <div>
//         <h1>Counter by useEffect and Use State {count}</h1>
//         <button onClick={()=>setCount(count+1)}>Increase</button>
//         <button onClick={()=>setCount(count-1)}>Decrease</button>
//         <button onClick={()=>setCount(0)}>Reset</button>
//         </div>
//         </>
//     )
// };
// export default Counter;


// Run only once

// import {useState, useEffect} from "react";
// function Counter(){
//     const[count, setCount] = useState(0);
//     useEffect(()=>{
//         console.log("Use Effect RUn");
//     },[]);
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={()=>setCount(count+1)}>Increase</button>
//         <button onClick={()=>setCount(count-1)}>Decrease</button>
//         <button onClick={()=>setCount(0)}>Reset</button>
//         </>
//     )
// }
// export default Counter;


// On Condition
// import {useState, useEffect} from "react";
// function Counter(){
//     const[count, setCount] = useState(0);
//     useEffect(()=>{
//         console.log("This will run on condition")
//     },[count]);
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={()=> setCount(count+1)}>Increase</button>
//         <button onClick={()=>setCount(count-1)}>Decrease</button>
//         <button onClick={()=>setCount(0)}>Reset</button>
//         </>
//     )
// }

// export default Counter;



// import {useState, useEffect} from "react";
// function Counter(){
    
//     const[count,setCount] = useState(0);
//     useEffect(()=>{
//         console.log("This will run on every render")
//     },[count])
//     const[user, newUser] = useState("");
//     useEffect(()=>{
//         console.log("Will change if the user will get changed");
//     },[user]);
//     return(
//         <>
//         <h1>{count}</h1>
//         <h1>{user}</h1>
//         <input type="text"/>
//         <button onClick={()=>setUser("Aman")}>Click</button>
//         <button onClick={()=>setCount(count+1)}>Increase</button>
//         </>
//     )
// }
// export default Counter;














