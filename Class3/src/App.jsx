import { useState } from "react";
//  function App(){
//      const[name, setName] = useState("");
//    return(
//    <div>
//      <input className="field" type="text" placeholder="Enter Your Name?" onChange={(e)=>setName(e.target.value)} />
//      <br />
//      <button className="button" onClick={()=>console.log(name)}>Submit</button>
//    </div>
//    )
//  }

function fvrtFruit(){
 const [fruit , setFruit] = useState("Mango");
 return(
    <div>
        <h1>My Fvrt Fruit is {fruit}</h1>
        <button onClick={()=>setFruit("Stawberry")}>show</button>
    </div>
 )
}
 export default fvrtFruit;