import TodoItem from "./TodoItem";


export default function TodoList({todos,toggleCompleted,removeTodo}){

    return(
        <>
         <div style={{display:"flex",marginTop:"50px",border:"2px solid gray",padding:"10px",borderRadius:"10px",background:"lightgray",boxShadow:"2px 3px gray"}}>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleCompleted={toggleCompleted} removeTodo={removeTodo}/>
        ))}
      </ul>
    </div>
        </>
    )
}