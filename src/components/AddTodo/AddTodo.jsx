import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function AddTodo({onAdd}) {
    const [text,setText]=useState('')
    const handleChange=(e)=>setText(e.target.value)
    
    const handleSubmit=(e)=>{
        e.preventDefault(); //새로고침을 막는다
        if(text.trim().length === 0){
            return;
        }
        // onAdd({id:456,text:text,status:"active"}) =
        onAdd({id:uuidv4(),text,status:"active"})
        setText("")
    }
  return (
    <form className='form' onSubmit={handleSubmit}>
        <input className='input' type="text" placeholder='Add Todo' value={text} onChange={handleChange}/>
        <button className='button'>Add</button>
    </form>
  )
}

export default AddTodo