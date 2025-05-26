
export default function TodoItem({id, text,completed, removeTodo,toggleCompleted}){
       
    const date = new Date();
    const day = date.getDate(); 
    const month = date.getMonth() + 1;
   

    return(
        <li key={id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input type="checkbox" checked = {completed} onChange={() => toggleCompleted(id)} />
             <p style={{fontSize:"30px"}}>{`Добавленно: ${day}.${month}`}</p>
            <span style={completed ? {textDecoration: "line-through",color:"green", fontSize:"50px" } : {  fontSize:"30px",color:"red"}}>{text}</span>
            <button onClick={() => removeTodo(id)}>Delete</button>
          </li>
    )
}