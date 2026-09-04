import React from 'react'
import { useState } from 'react';

function Todo() {

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]); // ARRAY

    const [editIndex, setEditIndex] = useState(null);
    const [editTask, setEditTask] = useState("");
    


   // ADDING A TODO
  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task.trim()]);
    setTask("");
    }
    // DELETING A TODO
    const deleteTodo = (index) => {  // 0 !== 0
        setTodos(todos.filter((task,i) => i !== index));
    };

    const editTodo = (index) => {
      setEditIndex(index);
      setEditTask(todos[index]);
    }
    const saveTodo = () => {
      if(editTask.trim() === "") return;
      setTodos(todos.map((todo, index) => {

        if(index === editIndex){
          return editTask.trim();
        }
        return todo;
        
      }))
      setEditIndex(null);
      setEditTask("");
    }


  return (
    <div className='container'>
      <h1>TO-DO List App</h1>
      <div className="child">

        {editIndex === null ?
       <>
        <input type="text"
          placeholder='add a todo'
          value={task}
          onChange={(e) => {
            setTask(e.target.value)
          }}
        />
        <button onClick={addTodo} 
        
        >Add</button>
         </> :
         <>
         <input type='text'
         value={editTask}

         onChange={(e) => {
          setEditTask(e.target.value);
         }}
         /> 
          <button onClick={saveTodo} >Save</button>
         </>
         }
      </div>

      {/* {DISPLAY PART} */}
      <ul>
        {todos.length === 0 ? (<p>No Tasks Exists </p>)
         : todos.map((todo,index) => {
          return (
              <li key={index}>{todo}
                  <div className="btns">
                  <button onClick={() => editTodo(index)}>Edit</button>
                  <button onClick={() => deleteTodo(index)}>Delete</button>
                  </div></li>
          )
        })}
      </ul>
    </div>
  )
}

export default Todo;