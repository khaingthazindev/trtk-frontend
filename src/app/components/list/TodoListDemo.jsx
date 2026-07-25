'use client';

import {useEffect, useState} from "react";

function Todo({todo, onDelete}) {
   const deleteTodo = (e) => {
      onDelete(todo);
   }
   return <div>
      {todo.title}
      <button type={"button"} onClick={deleteTodo}>Delete</button>
   </div>;
}

function TodoList({todos, onDelete}) {
   return (<div>
         {todos.map((todo) => <Todo key={todo.id} todo={todo} onDelete={onDelete}/> )}
   </div>)
}

export default function TodoListDemo() {
   const [todos, setTodos] = useState([]);

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json))
   }, []);

   const handleDelete = (deleteTodo) => {
      setTodos(todos.filter(todo => todo.id !== deleteTodo.id));
   }

   return (<div>
      <TodoList todos={todos} onDelete={handleDelete}/>
   </div>)
}