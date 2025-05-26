import { useState } from "react"
import TodoList from "./components/TodoList";
import InputTask from "./components/InputTak";


function App() {
  const [text , setText] = useState("");
  const [todos , setTodos] = useState([]);

  const handleInput = (task) => setText(task);

  const addTodo = () => {
    if(text.trim()){
      setTodos([...todos,{id:Date.now(), text: text, completed: false}])
      
      setText("")
    }
  }

  const toggleCompleted = (id) => {
    setTodos(todos.map( todo => {
      if(todo.id !== id) return todo;
      return{
        ...todo,
        completed: !todo.completed
      }
    }))
  }

  const deleteTodo = (id) => { 
     setTodos(todos.filter((todo) => todo.id !== id))
  }
  

  return (
    <>
    <div style={{display:"flex",marginTop:"50px", justifyContent:"center",border:"2px solid gray",padding:"10px",borderRadius:"10px",background:"lightgray",boxShadow:"2px 3px gray"}}>
    <InputTask handleInput={handleInput} addTodo={addTodo} text={text}/>
    </div>

   <TodoList todos={todos} toggleCompleted={toggleCompleted} removeTodo={deleteTodo}/>
  
      
   </>
  )
}

export default App
