'use client';

import {useContext, useState} from "react";
import {TodoDispatchContext, TodosContext} from "@/app/components/context/TodoContext";
import useCustomReducer from "@/app/components/hook/useCustomReducer";

export function todoReducer(state, action) {
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

function TodoEntry()
{
   const dispatch = useContext(TodoDispatchContext);

   const [name, setName] = useState('');
   let newTodo = {
      "userId": 1,
      "id": id++,
      "title": name,
      "completed": false
   }

   const handleSave = () => {
      dispatch({
         type: 'ADD_TODO',
         payload: newTodo
      })
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

function Todo({todo})
{
   const dispatch = useContext(TodoDispatchContext);
   const [isUpdating, setIsUpdating] = useState(false);
   const [name, setName] = useState(todo.title);

   const onUpdateHandler = () => {
      setIsUpdating(!isUpdating);
      let updated = {
         ...todo,
         title: name
      };
      dispatch({
         type: 'UPDATE_TODO',
         payload: updated
      })
   }
   const handleDelete = (e) => {
      dispatch({
         type: 'DELETE_TODO',
         payload: todo
      })
   }

   return <div>
      {isUpdating ? <input value={name} onChange={(e) => setName(e.target.value)}/> : todo.title}
      {
         <button type={"button"} onClick={onUpdateHandler}>{isUpdating ? 'Update' : 'Edit'}</button>
      }

      <button type={"button"} onClick={handleDelete}>Delete</button>

   </div>;
}

function TodoList({onDelete, onUpdate})
{
   const todos = useContext(TodosContext);
   return (<div>
      {todos.map((todo) => <Todo key={todo.id} todo={todo} /> )}
   </div>)
}

function TodoCount()
{
   const todos = useContext(TodosContext);
   return (<div>
      <h3>Todo count: {todos.length}</h3>
   </div>)
}

export default function TodoListWithReducer()
{
   // const [todos, dispatch] = useReducer(todoReducer, initialTodos);
   const [todos, dispatch] = useCustomReducer(todoReducer, initialTodos);

   return (<div>
      <TodosContext.Provider value={todos}>
         <TodoDispatchContext.Provider value={dispatch}>
            <TodoCount />
            <TodoEntry />
            <TodoList />
         </TodoDispatchContext.Provider>
      </TodosContext.Provider>
   </div>)
}