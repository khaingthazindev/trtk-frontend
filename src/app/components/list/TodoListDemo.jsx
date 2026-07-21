function Todo(props) {
   return <div>
      {props.todo.title}
      <button type={"button"}>Delete</button>
   </div>;
}

function TodoList({todos}) {
   return (<div>
         {todos.map((todo) => <Todo key={todo.id} todo={todo}/> )}
   </div>)
}

let todos = [
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
export default function TodoListDemo(props) {
   return (<div>
      <TodoList todos={todos}/>
   </div>)
}