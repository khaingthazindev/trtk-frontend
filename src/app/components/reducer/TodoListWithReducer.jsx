'use client';

import {useReducer, useState} from "react";

function todoReducer(state, action) {
   switch (action.type) {
      case 'ADD_TODO':
         return [...state, action.payload]; break;
      case 'UPDATE_TODO':
         return state.map(td => td.id === action.payload.id ? action.payload : td); break;
      case 'DELETE_TODO':
         return state.filter(td => td.id !== action.payload.id); break;
      default:
         return [...state];
   }
}

let initialTodos = [
   {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
   },
   {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
   },
   {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
   },
   {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
   },
   {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
   }
];

let id = 6;

function TodoEntry({onSave})
{
   const [name, setName] = useState('');
   let newTodo = {
      "userId": 1,
      "id": id++,
      "title": name,
      "completed": false
   }

   const handleSave = () => {
      onSave(newTodo);
      setName('');
   }

   return <div>
      <input
         value={name}
         onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSave}>Add
      </button>
   </div>;
}

function Todo({todo, onDelete, onUpdate})
{
   const [isUpdating, setIsUpdating] = useState(false);
   const [name, setName] = useState(todo.title);

   const onUpdateHandler = () => {
      setIsUpdating(!isUpdating);
      let updated = {
         ...todo,
         title: name
      };
      onUpdate(updated);
   }
   const handleDelete = (e) => {
      onDelete(todo);
   }

   return <div>
      {isUpdating ? <input value={name} onChange={(e) => setName(e.target.value)}/> : todo.title}
      {
         <button type={"button"} onClick={onUpdateHandler}>{isUpdating ? 'Update' : 'Edit'}</button>
      }

      <button type={"button"} onClick={handleDelete}>Delete</button>

   </div>;
}

function TodoList({todos, onDelete, onUpdate})
{
   return (<div>
      {todos.map((todo) => <Todo key={todo.id} todo={todo} onDelete={onDelete} onUpdate={onUpdate} /> )}
   </div>)
}

function TodoCount({count})
{
   return (<div>
      <h3>Todo count: {count}</h3>
   </div>)
}

export default function TodoListWithReducer()
{
   const [todos, dispatch] = useReducer(todoReducer, initialTodos);

   const handleDelete = (todo) => {
      dispatch({
         type: 'DELETE_TODO',
         payload: todo
      })
   }
   const handleSave = (todo) => {
      dispatch({
         type: 'ADD_TODO',
         payload: todo
      })
   }
   const handleUpdate = (todo) => {
      dispatch({
         type: 'UPDATE_TODO',
         payload: todo
      })
   }

   return (<div>
      <TodoCount count={todos.length} />
      <TodoEntry onSave={handleSave} />
      <TodoList todos={todos} onDelete={handleDelete} onUpdate={handleUpdate} />
   </div>)
}