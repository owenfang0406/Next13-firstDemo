import React from "react";
import { Todo } from "../../typings";
import Link from "next/link";

const fetchTodos = async () => {
  const rs = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await rs.json();
  return todos;
};

async function TodosList() {
  const todos = await fetchTodos();
  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  );
}

export default TodosList;
