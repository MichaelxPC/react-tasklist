
function TodoList(props) {
    return(
        <div className="main-list">
        {props.children}
        </div>
    );
}

export {TodoList};