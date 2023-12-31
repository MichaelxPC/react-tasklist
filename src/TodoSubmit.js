
function TodoSubmit(props) {
    return(
        <div className="submit-container">
            <input className="input-submit" placeholder="¡Añade una nueva tarea!"/>
            <button className="submit-task" onClick={props.messageLog}>Añadir</button>
        </div>
        
    );
}

export {TodoSubmit};