import './App.css'
import Product from './Product'
import Counter from './counter'
import { useState } from 'react';
import Display from './Display';

function App() {
  // return (
  //   <>
  //     <h1>Product App</h1>
  //     <Product />
  //     <Counter />
  //   </>

  // let count = 10;
  const [count, setCount] = useState(10); //hook
  const [name, setName] = useState("aman");
  const [theme, setTheme] = useState("light");
  const [student, setStudent] = useState({name:"Jiya", age:18});
  const [fruit, setFruit] = useState(["apple", "banana", "mango"]);
  function handleClick(){
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1); //no consecutive increment, bcs all function run ek saath hi, so increment once only by all simultaneously
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
  }

  function handleName(){
    setName(name == "aman" ? "Jiya" : "aman");
  }

  function handleTheme(){
    setTheme(theme == "light" ? "dark" : "light");
  }

  function handleLastname(){
    setStudent({...student,lastname:"Arora"});
    //adding new object values, deleting is homework
  }

  function handleFruits(){
    setFruit([...fruit,"orange"]);
  }

  return (
    <>
      <div className={theme=="dark" ? "dark" : "light"} style={{border:"2px solid red"}}>
        <button onClick = {handleTheme}>{theme=="dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}</button>
        <h1>Count: {count}</h1>
      <button onClick={handleClick}>Add</button>
      <p>Display count = {count}</p>
      <h1>name: <span className={name=="aman"? "red" : "green"}>{name}</span></h1>
      <button onClick={handleName}>Change Name</button>

      <p>{student.name}</p>
      <p>{student.age}</p>
      <p>{student.lastname ? student.lastname : "We dont have last name"}</p>
      <button onClick={handleLastname}> Add last name</button>

      <ul>
        {fruit.map(fruit=>{
          return <li key={fruit}> {fruit}</li>})} 
          {/* // key used for optimization purpose */}
      </ul>
      <button onClick={handleFruits}>Add Fruits</button>
      </div>
    </>
  )

  //   <>
  //     <section id="center">
  //       <div className="hero">
  //         <img src={heroImg} className="base" width="170" height="179" alt="" />
  //         <img src={reactLogo} className="framework" alt="React logo" />
  //         <img src={viteLogo} className="vite" alt="Vite logo" />
  //       </div>
  //       <div>
  //         <h1>Get started</h1>
  //         <p>
  //           Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
  //         </p>
  //       </div>
  //       <button
  //         type="button"
  //         className="counter"
  //         onClick={() => setCount((count) => count + 1)}
  //       >
  //         Count is {count}
  //       </button>
  //     </section>

  //     <div className="ticks"></div>

  //     <section id="next-steps">
  //       <div id="docs">
  //         <svg className="icon" role="presentation" aria-hidden="true">
  //           <use href="/icons.svg#documentation-icon"></use>
  //         </svg>
  //         <h2>Documentation</h2>
  //         <p>Your questions, answered</p>
  //         <ul>
  //           <li>
  //             <a href="https://vite.dev/" target="_blank">
  //               <img className="logo" src={viteLogo} alt="" />
  //               Explore Vite
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://react.dev/" target="_blank">
  //               <img className="button-icon" src={reactLogo} alt="" />
  //               Learn more
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //       <div id="social">
  //         <svg className="icon" role="presentation" aria-hidden="true">
  //           <use href="/icons.svg#social-icon"></use>
  //         </svg>
  //         <h2>Connect with us</h2>
  //         <p>Join the Vite community</p>
  //         <ul>
  //           <li>
  //             <a href="https://github.com/vitejs/vite" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#github-icon"></use>
  //               </svg>
  //               GitHub
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://chat.vite.dev/" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#discord-icon"></use>
  //               </svg>
  //               Discord
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://x.com/vite_js" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#x-icon"></use>
  //               </svg>
  //               X.com
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://bsky.app/profile/vite.dev" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#bluesky-icon"></use>
  //               </svg>
  //               Bluesky
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </section>

  //     <div className="ticks"></div>
  //     <section id="spacer"></section>
  //   </>
  // )
}

export default App
