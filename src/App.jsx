import { useState } from "react"




function App() {

  const [text , setText] = useState("");
  const [todos , setTodos] = useState([]);

  const handleInput = (task) => setText(task);
  
  return (
    <>
     <div style={{display:"flex",flexDirection:"column",justifyContent:"center",background:"cornflowerblue",padding:"20px 40px", marginTop:"50px",borderRadius:"10px",boxShadow:"12px 3px 4px gray"}}>

      <div style={{display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid white",padding:"20px",borderRadius:"10px",boxShadow:"4px 4px 2px white"}}>

        <h1 style={{color:"white",fontSize:"50px",}}>ToDoList on Redux toolkit</h1>
        </div>
        <div style={{marginTop:"30px"}}>
        <label>
          <input className="Input" value={text} type="text" onChange={(event) => handleInput(event.target.value)} />
          <button style={{background:"green"}}>Добавить</button>
        </label>
        </div>
     </div>

   </>
  )
}

export default App
