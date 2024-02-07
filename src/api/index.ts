import {
  TodoItemInterface as TodoItem,
  Todos,
  todoStatus,
} from "../types/todo";

let todos: Todos = {
  todosList: [
    { id: 0, item: "Learn framer Motion", status: todoStatus.PENDING },
    { id: 1, item: "learn formik", status: todoStatus.PENDING },
    { id: 2, item: "Learn Materialui", status: todoStatus.PENDING },
  ],
};

export const getAllTodos = async () => {
  await setTimeout(() => {
    console.log("fetching data ...");
  }, 1000);

  return todos;
};

export const getTodoById = async (id: number) => {
  await setTimeout(() => {
    console.log("fetching data ...");
  }, 1000);

  let todo = todos.todosList.find((item) => item.id === id);
  return todo;
};

export const addTodo = async (todo: TodoItem) => {
  let newTodo = {
    ...todo,
    id: todos.todosList.length,
  };

  await setTimeout(() => {
    console.log("adding data ...");
  }, 1000);

  let newTodosList = [...todos.todosList, newTodo];

  todos.todosList = newTodosList;
  return newTodo;
};

export const deleteTodo = async (id: number) => {
  await setTimeout(() => {
    console.log("deleting data ...");
  }, 1000);

  let newListTodos = todos.todosList.filter((item) => item.id !== id);
  todos.todosList = newListTodos;
};
