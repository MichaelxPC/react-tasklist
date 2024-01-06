import React from "react";

function StateTask(initialValue) {
    // Local-store information
    const [todo, setTodos] = React.useState(initialValue);
    const [loanding, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    let parsedInfo;
  
    React.useEffect(() => {
      setTimeout(() => {
        const getLocalInfo = localStorage.getItem('TODOS_V1');
      parsedInfo = JSON.parse(getLocalInfo);
      if (!parsedInfo) {
        try {
          localStorage.setItem('TODOS_V1', JSON.stringify([]));
          parsedInfo = [];
          setLoading(false);
        } catch (error) {
        }
      } else {
        try {
          setLoading(false)
          setTodos(parsedInfo)
        } catch (error) {
          setError(true)
          setLoading(false);
        }
      }
      },2000);
      
    })
      const modTask = (newTodos) => {
        localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
        setTodos(newTodos);
    } 
  
    return {todo, modTask, loanding, error};
  }

export { StateTask };

