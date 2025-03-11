import { getTodos } from "../../../lib/db/queries";


export default async function ProfilePage() { 
const todos = await getTodos();
console.log('todos: ', todos)
 return<div>
  <ul>
    {todos.map(todo => (
      <li>
        {todo.text}
      </li>
    ))}
  </ul>
 </div>;
}

