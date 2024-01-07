import React from "react";

function TaskForm() {
    return (
        <div className="main-form-container">
            <div className="form-cont">
                <input className="submit-task-input"/>
                <button className="close submit-botton">Close</button>
                <button className="add-submit-button">Add</button>
            </div>
        </div>
    )
}

export { TaskForm };