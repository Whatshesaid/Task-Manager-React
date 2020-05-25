import React, { createContext, useState, Children } from 'react';

export const TaskListContext = createContext()


const TaskListContextProvider = (props) => {
  const [tasks, setTask] = useState([
    { title: "Read The Book", id: 1 },
    { title: "Wash the Car", id: 2 },
    { title: "Write Some Code", id: 3 }

  ])


  return (
    <TaskListContext.Provider value={{ tasks }}>
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider