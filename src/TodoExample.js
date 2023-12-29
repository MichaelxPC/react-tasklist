import React from 'react'
import { TodoTittle } from './TodoTittle';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
import { TodoTask } from './TodoTask';
import { TodoSubmit } from './TodoSubmit';
import './TodoExample.css';
import TodoTitle from './TodoTitle';

const defaultTodos = [
     {text: 'Hacer cursos en platzi', completed: true},
     {text: 'Ver la pantalla', completed: false},
     {text: 'Pasear al perro', completed: false},
     {text: 'Tomar notar', completed: true},
];

function TodoExample() {
  // React states
  const [searchValue, setSearchValue] = React.useState('');
  const [todo, setTodos] = React.useState(defaultTodos);
  
  const completeTask = todo.filter(todo => todo.completed).length;
  const totalTask = todo.length;
  const searchedTools = todo.filter(
    todo => {
      const searchInput = searchValue.toLocaleLowerCase();
      const todoText = todo.text.toLowerCase();

      return todoText.includes(searchInput)
    }
  )
  
  const addTask = (text) => {
    const newTodos = [...todo]
    const taskIndex  = newTodos.findIndex(todo => (todo.text == text)) 
    newTodos[taskIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTask = (text) => {
    const newTodos = [...todo];
    const taskIndex  = newTodos.findIndex(todo => (todo.text == text));
    newTodos.splice(taskIndex, 1);
    setTodos(newTodos);
    console.log(newTodos);
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
          <div> <TodoSubmit/>  </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default TodoExample;