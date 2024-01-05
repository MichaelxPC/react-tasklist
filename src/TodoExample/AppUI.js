import React from 'react'
import { TodoTittle } from '../Components/TodoTittle';
import { TodoInput } from '../Components/TodoInput';
import { TodoList } from '../Components/TodoList';
import { TodoTask } from '../Components/TodoTask';
import { TodoSubmit } from '../Components/TodoSubmit';
import { TodoTitle } from '../Components/TodoTitle';
import { TodoTaskSkeleton } from '../Components/TodoTaskSkeleton';

function AppUi({
    completeTask,
    totalTask,
    searchValue,
    setSearchValue,
    loanding,
    error,
    searchedTools,
    taskNewName,
    setTaskNewName,
    addListTask,
    addTask,
    deleteTask
}) {
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