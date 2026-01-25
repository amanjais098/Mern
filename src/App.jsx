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




//Builtin hooks
// import React from "react";
// import UseCounter from "./UseCounter";
// function CounterComponent(){
//     const{count, increment, decrement, reset} = UseCounter(5);
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



// import {useContext} from "react";
// import './App.css'
// import ChildA from './components/ChildA';

// // Step1-
// const UserContext = createContext();
// // Step2- wrap all the child inside a provider
// // Step3 - pass value
// // step 4 
// function App(){
//     const[user, setUser] = useState({name:"Love"})
//     return(
//         <>
//         <UserContext.Provider value={user}>
//             <ChildA/>
//         </UserContext.Provider>
//         <Child A/>
//         </>
//     )
// }

// export default App;
// expo-rt {UserContext}


// import { Routes, Route } from "react-router-dom"
// import Home from './Pages/Home'
// import About from './Pages/About'
// import ContactUs from './Pages/ContactUs'
// import { jsx } from "react/jsx-runtime"

// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contactUs" element={<ContactUs />} />
//       </Routes>
//     </>
//   )
// }





// import {Routes, Route} from 'react-router-dom'
// import Home from './Pages/Home'
// import About from './Pages/About'
// import ContactUs from './Pages/ContactUs'
// import React from 'react' 
// import { jsx } from 'react/jsx-runtime'

// const App = ()=>{
//     return(
//         <>
//         <Routes>
//             <Route path='/' element={<Home/>}/>
//             <Route path='/about' element={<About/>}/>
//             <Route path='/contactUs' element={<ContactUs/>}/>
//             <Route path='/Counter' element={<Counter/>}/>
//             <Route path='/Random' element={<Random/>}/>
//         </Routes>
//         </>
//     )
// }




//Control component because we used useState here 
// import React from 'react'
// import { useState } from 'react';

// const NameForm = () => {
//     const[name, setName] = useState("");
//     const[email, setEmail] = useState("");
//     const[password, setPassword] = useState("");
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         console.log(name,email,password);
//     }
//     return (
//     <>
//     <div>
//       <h1>Form</h1>
      
//       <form onSubmit={handleSubmit}>

//         <input 
//         type="text" 
//         value={name} 
//         onChange={(e) => setName(e.target.value)} 
//         placeholder="Enter your name"
//         />
//         <br/>
//         <br/>
//         <br></br>
//         <input
//         type="email"
//         value={email}
//         onChange={(e)=> setEmail(e.target.value)}
//         placeholder="Enter Email"
//         />
//         <br/>
//         <br/>
//         <br/>
//         <input 
//         type="password"
//         value={password}
//         onChange={(e)=> setPassword(e.target.value)}
//         placeholder="Enter password"
//         />
//         <button type="submit">submit</button>
//       </form>
//     </div>
//     </>
//   )
// }

// export default NameForm





// import React from 'react'
// import { useState } from 'react'

// const FormRevise = () => {
//     const[formData, setFormData] = useState({
//         name:"",
//         password: "",
//         email:""
//     })
//     const handleSubmit=(e) => {
//         e.preventDefault();
//         if(formData.name == "",formData.password == "",formData.email == ""){
//         alert("Please fill all the values");
//         }else{
//             console.log(formData.name, formData.password, formData.email);
//         }
//     }
    
//   return (
//     <div>
//       <h1>form</h1>
//       <form onSubmit={(handleSubmit)}>

//         <input 
//         type="text"
//         value={formData.name}
//         onChange={(e)=>setFormData({...formData, name: e.target.value})}
//         placeholder="Enter your name"
//         />
//         <br/>
//         <input
//         type="email"
//         value={formData.email}
//         onChange={(e)=>setFormData({...formData, email: e.target.value})}
//         placeholder="email"
//         />
//         <br/>
//         <input 
//         type="password"
//         value={formData.password}
//         onChange={(e)=>setFormData({...formData, password:e.target.value})}
//         placeholder="enter your password"
//         />
//         <br/>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default FormRevise





// import { useEffect, useState } from "react";

// function App() {
//   const [imgUrl, setImgUrl] = useState("");

//   useEffect(() => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("API Output:", data);   
//         setImgUrl(data.message);            
//       });
//   }, []);

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h2>Random Dog Image 🐶</h2>

//       {imgUrl && (
//         <img
//           src={imgUrl}
//           alt="dog"
//           style={{ width: "300px", borderRadius: "10px" }}
//         />
        
//       )}
//     </div>
//   );
// }

// export default App; 

// import { useState, useEffect } from "react";
// function App(){
//     const[imgUrl, setImgUrl] = useState("");
//     // useEffect(()=>{
//     //     fetch()
//     //     .then((res)=>res.json())
//     //     .then((data)=>{
//     //         console.log(data);
//     //         setImgUrl(data[0]);
//     //     })
//     // },[])

//     const handleClick=(e)=>{
//         fetch("https://api.thecatapi.com/v1/images/search")
//         .then((res)=>res.json())
//         .then((data)=>{
//             console.log(data);
//             setImgUrl(data[0]);
//         })
//     }

//     return(
//         <>
//         <div>
//             <h1>cat</h1>
//             {imgUrl &&
//                 <img src={imgUrl.url}
//                 alt="random images"
//                 />
//             }
//             <button onClick={(e)=>handleClick()}>Enter</button>
//         </div>
//         </>
//     )
// }
// export default App


// Axios 

// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios'


// const App = () => {
//     const[img, setImg] = useState("")
//     useEffect(()=>{
//         axios.get("https://dog.ceo/api/breeds/image/random")
//         .then((response)=>{
//             console.log(response.data)
//             setImg(response.data.message)
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
//     },[])
//   return (
//     <>
//       <div>
//              <h1>cat</h1>
//              {img &&
//                 <img src={img}
//                 alt="random images"
//                 />
//             }
            
//          </div>
//     </>
//   )
// }

// export default App


// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//       .then(res => {
//         console.log(res.data);
//         setUsers(res.data);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Users List</h2>
//       {users.map(user => (
//         <p key={user.id}>{user.name},{user.address.zipcode},{user.address.street}</p>
//       ))}
//     </div>
//   );
// }

// export default App;



// import axios from 'axios'
// import React, { useState, useEffect } from 'react'



// const App = () => {
//     const[user, setUser] = useState(null)
//     useEffect(()=>{
//         axios.get("https://randomuser.me/api/")
//         .then((response)=>{
//             console.log(response.data.results[0])
//             setUser(response.data.results[0])
//         })
//     },[])
//   return (
//     <div>
//       {user && (
//         <p>{user.name.first}</p>
//       )}
//     </div>
//   )
// }

// export default App

import React, { useEffect,useState } from 'react'
import axios from 'axios'

const App = () => {
    const[user, setUser] = useState(null)
    useEffect(()=>{
        axios("https://randomuser.me/api/")
        .then((response)=>{
            console.log(response.data.results[0])
            setUser(response.data.results[0])
        })
    },[])
  return (
    <div>
      {user && (
        <>
        <p>{user.name.first}</p>
        <img src={user.picture.medium} alt="image"/>
        </>
      )}
    </div>
  )
}

export default App



