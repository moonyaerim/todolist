import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from "../Todo/Todo";

function TodoList({filter}) {
    const [todos,setTodos]=useState([
        {id:123, text:"공부하기",status:"active"},
        {id:456, text:"청소하기",status:"active"},
      ])

      const handleAdd=(todo)=>{
        setTodos([...todos,todo])
      }

      const handleUpdate=(updated)=>{
        setTodos(todos.map((t)=>{
          return t.id == updated.id?updated:t
        }))
      }

      const handleDelete=(deleted)=>{
        setTodos(todos.filter((t)=>{
          return t.id !== deleted.id
        }))
      }

      //filter 된 아아템을 받아오기 위한 함수
      const filterd=getFilteredItems(todos,filter)
      console.log(filterd)
  return (
    <section className='container'>
      <ul className='list'>
        {filterd.map((item)=>{
          return (
          <Todo key={item.id} 
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          ></Todo>);
        })}
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
  )
}

export default TodoList

function getFilteredItems(todos,filter){
  if(filter === "all"){
    return todos
  }

  return todos.filter((todo)=>{
    return todo.status === filter
  })

}