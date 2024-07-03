import React from 'react'
import { FaTrashCan } from "react-icons/fa6";

function Todo({todo, onUpdate,onDelete}) {
    console.log(todo)//{id, text,status}
    const {id,text,status}=todo;
    const handleChange=(e)=>{
      const status=e.target.checked?"completed":"active"
      onUpdate({...todo,status})
    }
    const handleDelete=()=>{onDelete(todo)}
  return (
   <li className='todo'>
   <input className='checkbox' type="checkbox" id={id}  
   checked={status === 'completed'}
   onChange={handleChange}
   />
    <label htmlFor={id} className='text'>{text}</label>
    <span className='icon'>
    <button className='button' onClick={handleDelete}><FaTrashCan /></button>
    </span>
   </li>
  )
}

export default Todo
