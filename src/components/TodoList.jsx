import { TodoItem } from "./TodoItem"
import { useSelector } from "react-redux"

export  const TodoList =() => {
  const todos = useSelector((state) => state.todos.todos);

    return(
         <div style={{display:"flex",flexDirection:"column",marginTop:"30px",border:"2px solid gray",borderRadius:"10px",padding:"5px"}}>
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id}  todo={todo}/>
          ))}
        </ul>
     </div>
    )
}