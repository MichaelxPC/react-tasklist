import checkMark from './imgs/checkmark.png';
import deleteMark from './imgs/delete.png';


function TodoTask({completed, contains}) {
    return(
        <ul>
            <div className="todos-box">
                <div className="todo-main">
                    <img src={checkMark} className="check-logo" alt="check" />
                    <p className={`task-text ${completed && "task-tachado"}`}>{contains}</p>
                </div>
                <div className='delete-task'>
                    <img className='delete-logo' src={deleteMark} alt='delete'/>
                </div>
            </div>
        </ul>
    );
}

export {TodoTask};