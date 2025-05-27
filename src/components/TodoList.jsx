

export  const TodoList =({todos, deleteTodo, toggleComplete}) => {

    return(
         <div style={{display:"flex",flexDirection:"column",marginTop:"30px",border:"2px solid gray",borderRadius:"10px",padding:"5px"}}>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} style={{listStyleType:"none",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"}}>
              <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                 <input style={{transform:"scale(2)",marginRight:"20px"}} type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)}/>
              <span style={todo.completed ? {fontSize:"50px", textDecoration:"line-through",color:"red"} : {fontSize:"50px",color:"green"}} >{todo.text}</span>
              </div>
             
              <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
            </li>
          ))}
        </ul>
     </div>
    )
}