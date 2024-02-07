import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getAllTodos, addTodo } from "../api";
import TodoItem from "./TodoItem";

import { TodoItemInterface, todoStatus } from "../types/todo";

import "./Todos.css";

const Todos = () => {
  const [name, setName] = useState<string>("");
  const [errorAdded, setAddeError] = useState<boolean>(false);

  const queryClient = useQueryClient();

  // query
  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => getAllTodos(),
    queryKey: ["todos"],
    staleTime: 3600 * 60,
  });

  // mutation todo add
  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: (data) => {
      console.log(data);

      queryClient.invalidateQueries();
    },
  });

  const addTaskHandler = async () => {
    if (name && name.trim().length > 0) {
      let todo: TodoItemInterface = {
        item: name,
        status: todoStatus.PENDING,
      };

      addTodoMutation(todo);
      console.log("succes added todos.");
      setName("");
    } else {
      setAddeError(true);
    }
  };

  if (isLoading) {
    return <div>Loadind...</div>;
  }

  //fecthing her data ... and caching

  return (
    <div className="container">
      <div className="addTask">
        <input
          name="name"
          placeholder="add new task in todo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addTaskHandler}>ADD</button>
        {(errorAdded || isError) && (
          <p>Error while adding new task in todolist</p>
        )}
      </div>
      <div>
        {todos?.todosList?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
