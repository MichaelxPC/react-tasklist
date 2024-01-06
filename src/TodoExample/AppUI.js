import React from 'react'
import { TodoTittle } from '../Components/TodoTittle';
import { TodoInput } from '../Components/TodoInput';
import { TodoList } from '../Components/TodoList';
import { TodoTask } from '../Components/TodoTask';
import { TodoSubmit } from '../Components/TodoSubmit';
import { TodoTitle } from '../Components/TodoTitle';
import { TodoTaskSkeleton } from '../Components/TodoTaskSkeleton';
import { TaskContext } from '../Context';

function AppUi() {
  const {
    completeTask: completeTask,
    totalTask: totalTask,
    searchValue: searchValue,
    setSearchValue: setSearchValue,
    loanding: loanding,
    error: error,
    searchedTools: searchedTools,
    taskNewName: taskNewName,
    setTaskNewName:setTaskNewName,
    addListTask: addListTask,
    addTask: addTask,
    deleteTask: deleteTask,
  } = React.useContext(TaskContext);
    return (
        <>
        <div className='container'>
          <div className='second-container'>
            <div className='secondo-container'>
              <TodoTittle completed={completeTask} total={totalTask}/>
              <TodoInput 
              searchValue = {searchValue} setSearchValue = {setSearchValue}
              >
              <TodoTitle/>  
                <TodoList>
                  {loanding && <div className='div-skeleton'>
                    <TodoTaskSkeleton/> 
                    <TodoTaskSkeleton/> 
                    <TodoTaskSkeleton/> 
                    <TodoTaskSkeleton/> 
                    </div>}
                  {error && <p>Ops... Hubo un error</p>}
                  {(!loanding && searchValue.length === 0) && <p></p>}
                {searchedTools.map(todo => (
                   <TodoTask key ={todo.text} contains={todo.text} completed={todo.completed} onComplete={() => addTask(todo.text)} onDelete={() => deleteTask(todo.text)} /> 
                ))}
                </TodoList>
              </TodoInput>
              <div> <TodoSubmit taskNewName={taskNewName} setTaskNewName={setTaskNewName} addListTask = {() => addListTask(taskNewName)}/>  </div>
            </div>
          </div>
        </div>
        </>
    )
}

export { AppUi };