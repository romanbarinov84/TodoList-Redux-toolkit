
export default function InputTask({handleInput,addTodo,text}){

    return(
        <>
         <label>
              <input className="Input" type="text" value={text} onChange={(e) => handleInput(e.target.value)}/>
              <button onClick={addTodo}>Добавить задачу</button>
            </label>
                
        </>
    )
}