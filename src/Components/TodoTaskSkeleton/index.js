import React from "react";

function TodoTaskSkeleton() {
    return(

        <ul>
            <div className="todos-box-skeleton">
                <div className="todo-main-skeleton loading">
                    <span><img className="check-logo-s" /></span>
                    <p className={`task-text-s`}></p>
                    <span><img className='delete-logo-s'/></span>
                </div>
            </div>
        </ul>
    );
}

export {TodoTaskSkeleton};