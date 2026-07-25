'use client';

import {useEffect, useState} from "react";
import useFetch from "@/app/components/hook/useFetch";

export default function FetchTodo() {
   // const [todos, setTodos] = useState([]);
   // const [isLoading, setIsLoading] = useState(true);
   //
   // useEffect(() => {
   //    fetch('https://jsonplaceholder.typicode.com/todos')
   //    .then(response => response.json())
   //    .then(json => {
   //       setIsLoading(false);
   //       setTodos(json);
   //    })
   // }, []);

   const [todos, isLoading] = useFetch('https://jsonplaceholder.typicode.com/todos');

   return (<div>
      {isLoading && <div>Loading</div>}
      {todos.map(todo => <div key={todo.id}>{todo.title}</div>)}
   </div>)
}