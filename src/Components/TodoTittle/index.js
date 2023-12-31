import React from 'react';


function TodoTittle({completed, total}) {
  return (
    <div className='titulo-div'>
      <span className='title-manage'> Has completado </span>
      <span className='title-manage green-text'>{completed} </span>
      <span className='title-manage'> de</span>
      <span className='title-manage red-text'> {total}</span>
      <span className='title-manage'> tareas</span>
    </div>
  )
}

export {TodoTittle};
