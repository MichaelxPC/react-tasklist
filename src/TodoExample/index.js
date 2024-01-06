import React from 'react'
import '../TodoExample.css';
import { AppUi } from './AppUI';
import { TaskProvider } from '../Context';


// const defaultTodos = [
//      {text: 'Hacer cursos en platzi', completed: true},
//      {text: 'Ver la pantalla', completed: false},
//      {text: 'Pasear al perro', completed: false},
//      {text: 'Tomar notar', completed: true},
// ];

function TodoExample() {
  return (
    <TaskProvider>
      <AppUi/>
    </TaskProvider>
  );
}

export default TodoExample;