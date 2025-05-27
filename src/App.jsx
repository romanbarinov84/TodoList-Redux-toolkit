import { useState } from "react"
import { TodoList } from "./components/TodoList";
import { InputTask } from "./components/InputTask";
import { addTodo } from "./store/todoSlice";
import { useDispatch } from "react-redux";



function App() {

  const [text , setText] = useState("");
  const dispatch = useDispatch();

  const handleInput = (task) => setText(task);
  const addTask = () => {
    if(text.trim()){
      dispatch(addTodo({text}))
    }
    setText("");
  }




  
  return (
    <>
     <div style={{display:"flex",flexDirection:"column",justifyContent:"center",background:"cornflowerblue",padding:"20px 40px", marginTop:"50px",borderRadius:"10px",boxShadow:"12px 3px 4px gray"}}>

      <div style={{display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid white",padding:"20px",borderRadius:"10px",boxShadow:"4px 4px 2px white"}}>

        <h1 style={{color:"white",fontSize:"50px",}}>ToDoList on Redux toolkit</h1>
        </div>
        <div style={{marginTop:"30px"}}>
        <InputTask addTask={addTask} handleInput={handleInput} text={text}/>
        </div>
     </div>
     <TodoList/>
   </>
  )
}

export default App
