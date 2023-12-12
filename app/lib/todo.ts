//TODO: if not logged in then get from localstorage
import prisma from "./prisma";
import axios from "axios";

const BASE_URL = process.env.BASE_URL;
//dont need id anymore db will do that
export async function createTodo(session: {} | null, id: number, todo: string) {
  // check is session exists
  if (!session) {
    let todoList;
    const storedTodos = localStorage.getItem("todos");

    todoList = storedTodos === null ? [] : JSON.parse(storedTodos);

    const todoId = Date.now();
    const newTodo: any = { id: todoId, todo: todo, isComplete: false };
    localStorage.setItem("todos", JSON.stringify([...todoList, newTodo]));

    return newTodo;
  }

  const response = await axios.post("http://localhost:3000/api/todo", {
    task: todo,
    userId: session.user.id,
  });

  if (response.status !== 200) {
    throw new Error("fuck!");
  }

  return response.data;
}

function getTodos() {
  //code
}
