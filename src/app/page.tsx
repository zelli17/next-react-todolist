'use client'
import { useState } from "react";
import { TodoObject } from "./models/Todo";
import { v4 as uuid} from "uuid";

const Home: React.FunctionComponent = () => {
  const [todo, settodo] = useState<string>('');
  const [todos, settodos] = useState<TodoObject[]>([]);
  const addTodo = () =>{
    settodos([...todos, {id:uuid(), value:todo, done:false}])
    settodo('');
  }
  const markTodoDone = (id:string) => {
    settodos(todos.map(todo=> todo.id === id ? {...todo, done: !todo.done } : todo));
  }
  return (
    <><header className="bg-slate-950 px-9 py-8 ">
      <h1 className="text-6xl">Todos</h1>
      </header>
    <main className="p-5 ">
      <input type="text" placeholder="Enter a new Todo" className="p-2 text-black rounded-xl mr-5" 
      onChange={(e) => settodo(e.target.value)} value={todo}
      />
      <button className="border-2 p-2 rounder-xl" 
      onClick={ (e) => addTodo()}
      >Add Todo</button>
      <ul className="mt-5">
        {
          todos.map(todo => (
            <li className={`text-3xl ml-5 cursor-pointer ${todo.done ? 'line-through': 'no-underline'}`} onClick={(e) => markTodoDone(todo.id)}>{todo.value}</li>
              
            ))
        }
      </ul>
    </main></>
  );
}

export default Home;