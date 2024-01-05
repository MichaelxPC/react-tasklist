
function TodoSubmit({addListTask, taskNewName, setTaskNewName}) {
    return(
        <div className="submit-container">
            <input className="input-submit" value={taskNewName} onChange={(event) => {
                setTaskNewName(event.target.value);
            }} placeholder="¡Añade una nueva tarea!"/>
            <button className="submit-task" onClick={addListTask}>Añadir</button>
        </div>
        
    );
}

export {TodoSubmit};