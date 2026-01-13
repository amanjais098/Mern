// import Hello from "./Hello"
// import Welcome from "./Welcome"
// function App(){
//     return(
//         <>
//         <h1>Aman</h1>
//         <h2>Wamiq</h2>
//         <Hello/>
//         <Welcome/>
//         </>
//     )
// }


// export default App






// import Card from "./Card";
// import Card2 from "./Card2";
// import Hello from "./Hello";

// function App(){
//     return(
//         <>
//         <div>
//             <Card name = "Aman"/>
//             <Card name = "Adarsh"/>
//             <Card name="Wamiq"/>
//             <Card name = "helloo"/>
//             <Card2 address="Lucknow"/>
//         </div>
//         <Hello/>

//         </>
//     )
// }
// export default App




// function Header(){
// 	return(
// 	<>
// 	<h1>This is Header</h1>
// 	</>
// 	)
// }
// function Footer(){
// 	return(
// 	<>
// 	<h2>This is Footer</h2>
// 	</>
// 	)
// }

// App
// function App(){
// 	return(
//     <>
// 	<Header/>
// 	<p>This is Nested Components</p>
// 	<Footer/>
// 	</>
//     )
// }
// export default App


// Counter-

// import{useState} from "react";
// function Counter(){
//     const[count, setCount] = useState(0);
//     return(
//         <>
//         <div>
//             <h1>count: {count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increased</button>
//             <button onClick={()=>setCount(0)}>Reset</button>
//             <button onClick={()=>setCount(count-1)}>Decreased</button>
//         </div>
//         </>
//     )
// }
// export default Counter; 


// import Random from "./Random";
// function App(){
//     return(
//         <>
//         <Random/>
//         </>
//     )
// }
// export default App;


//Counter for useEffect

// import Counter from "./Counter";

// function App(){
//     return(
//         <Counter/>
//     )
// }

// export default App

// import React from "react";
// import UseCounter from "./UseCounter";
// function CounterComponent(){
//     const{count, increment,decrement,reset} = UseCounter(5);
//     return(
//         <>
//         <div>
//             <h1>{count}</h1>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//         </>
//     )
// }

// export default CounterComponent;


import React from "react";
import UseCounter from "./UseCounter";
function CounterComponent(){
    const{count, increment, decrement, reset} = UseCounter(5);
    return(
        <>
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
        </>
    )
}
export default CounterComponent; 



