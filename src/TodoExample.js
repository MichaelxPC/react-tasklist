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
     {text: 'Tomar notar', completed: true}
];

function TodoExample() {
 // Manipulation DOM
  const checkButton = document.querySelector('.check-logo');
  const deleteButton = document.querySelector('.delete-logo');

  // Event listener

  

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

  console.log(`Las busqueda de los usuarios es: ${searchValue}`); 

  return (
    <React.Fragment>
    <div className='container'>
      <div className='first-containerv1'>
      <div className='first-container'>
        <TodoTitle/>
        <TodoList>
            {defaultTodos.map(todos => (
               <TodoTask key ={todos.text} contains={todos.text} completed={todos.completed} /> 
            ))}
        </TodoList>
        <TodoSubmit/>  
        </div>
      </div>
      <div className='second-container'>
        <div className='secondo-container'>
          <TodoTittle completed={completeTask} total={totalTask}/>
          <TodoInput 
          searchValue = {searchValue} setSearchValue = {setSearchValue}
          >
            <TodoList>
            {searchedTools.map(todos => (
               <TodoTask key ={todos.text} contains={todos.text} completed={todos.completed} /> 
            ))}
            </TodoList>
          </TodoInput>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default TodoExample;