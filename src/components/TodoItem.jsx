import { removeTodo } from "../store/todoSlice"
import { useDispatch } from "react-redux"
import { toggleTodoComplete } from "../store/todoSlice"

export const TodoItem = ({todo}) => {

    const dispatch = useDispatch()

    return(
        <li key={todo.id} style={{listStyleType:"none",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"}}>
              <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                 <input style={{transform:"scale(2)",marginRight:"20px"}} type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodoComplete({ id: todo.id }))}/>
              <span style={todo.completed ? {fontSize:"50px", textDecoration:"line-through",color:"red"} : {fontSize:"50px",color:"green"}} >{todo.text}</span>
              </div>
             
              <button onClick={() => dispatch(removeTodo({ id: todo.id }))}>Удалить</button>
            </li>
    )
}