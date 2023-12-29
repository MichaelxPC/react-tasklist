import checkMark from './imgs/checkmark.png';
import deleteMark from './imgs/delete.png';


function TodoTask({completed, contains, onComplete, onDelete}) {
    return(
        <ul>
            <div className="todos-box">
                <div className="todo-main">
                    <span onClick={onComplete}><img src={checkMark} className="check-logo" alt="check" /></span>
                    <p className={`task-text ${completed && "task-tachado"}`}>{contains}</p>
                    <span onClick={onDelete}><img className='delete-logo' src={deleteMark} alt='delete'/></span>
                </div>
            </div>
        </ul>
    );
}

export {TodoTask};