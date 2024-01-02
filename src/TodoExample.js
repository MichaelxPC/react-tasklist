import { TodoTittle } from './Components/TodoTittle';
import { TodoInput } from './Components/TodoInput';
import { TodoList } from './Components/TodoList';
import { TodoTask } from './Components/TodoTask';
import { TodoSubmit } from './Components/TodoSubmit';
import TodoTitle from './Components/TodoTitle';
import './TodoExample.css';
import React from 'react'

const defaultTodos = [
     {text: 'Hacer cursos en platzi', completed: true},
     {text: 'Ver la pantalla', completed: false},
     {text: 'Pasear al perro', completed: false},
     {text: 'Tomar notar', completed: true},
];

function StateTask() {
  // Local-store information
  const [todo, setTodos] = React.useState();
  let parsedInfo;
    const getLocalInfo = localStorage.getItem('TODOS_V1');
    parsedInfo = JSON.parse(getLocalInfo);
    if (!parsedInfo) {
        localStorage.setItem('TODOS_V1', JSON.stringify([]));
        parsedInfo = [];
    } else {
      }
    const modTask = (newTodos) => {
      localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
      setTodos(newTodos);
  } 

  return {todo, modTask};
}

function TodoExample() {
  // React states
  //localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
  const {todo, modTask: setTodos} = StateTask();
  const [searchValue, setSearchValue] = React.useState('');
  
  console.log(todo);
  const completeTask = todo.filter(todo => todo.completed).length;
  const totalTask = todo.length;
  const searchedTools = todo.filter(
    todo => {
      const searchInput = searchValue.toLocaleLowerCase();
      const todoText = todo.text.toLowerCase();

      return todoText.includes(searchInput);
    }
  )

  const messagelog = () => {
    const message = localStorage.getItem('TODOS_V1');
    const parseMessage = JSON.parse(message);
    console.log(parseMessage);
  }

  const addTask = (text) => {
    const newTodos = [...todo];
    const taskIndex  = newTodos.findIndex(todo => (todo.text === text));
    newTodos[taskIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTask = (text) => {
    const newTodos = [...todo];
    const taskIndex  = newTodos.findIndex(todo => (todo.text === text));
    newTodos.splice(taskIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
    <div className='container'>
      <div className='second-container'>
        <div className='secondo-container'>
          <TodoTittle completed={completeTask} total={totalTask}/>
          <TodoInput 
          searchValue = {searchValue} setSearchValue = {setSearchValue}
          >
          <TodoTitle/>  
            <TodoList>
              
            {searchedTools.map(todo => (
               <TodoTask key ={todo.text} contains={todo.text} completed={todo.completed} onComplete={() => addTask(todo.text)} onDelete={() => deleteTask(todo.text)} /> 
            ))}
            </TodoList>
          </TodoInput>
          <div> <TodoSubmit messageLog = {() => messagelog()}/>  </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default TodoExample;