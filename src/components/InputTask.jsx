

export const InputTask = ({addTask, handleInput , text}) => {

    return(
        <label>
                  <input className="Input" value={text} type="text" onChange={(event) => handleInput(event.target.value)} />
                  <button style={{background:"green"}} onClick={addTask}>Добавить</button>
                </label>
    )
}