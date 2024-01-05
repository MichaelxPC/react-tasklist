import React from 'react'
import '../TodoExample.css';
import { AppUi } from './AppUI';
import {StateTask} from './StateTask'

// const defaultTodos = [
//      {text: 'Hacer cursos en platzi', completed: true},
//      {text: 'Ver la pantalla', completed: false},
//      {text: 'Pasear al perro', completed: false},
//      {text: 'Tomar notar', completed: true},
// ];

function TodoExample() {
  const {todo, modTask: setTodos, loanding, error} = StateTask([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [taskNewName, setTaskNewName] = React.useState('');
  
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

  const addListTask = (text) => {
    const newTodos = [...todo];
    const newTask  = {text: text, completed: false};
    newTodos.push(newTask);
    setTodos(newTodos);
  }

  return (
    <AppUi
      completeTask = {completeTask}
      totalTask = {totalTask}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      loanding = {loanding}
      error = {error}
      searchedTools = {searchedTools}
      taskNewName = {taskNewName}
      setTaskNewName = {setTaskNewName}
      addListTask = {addListTask}
      addTask = {addTask}
      deleteTask = {deleteTask}
    />
  )
}

export default TodoExample;