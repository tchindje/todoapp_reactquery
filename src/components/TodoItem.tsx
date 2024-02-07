import { TodoItemInterface } from "../types/todo"

import "./TodoItem.css"

const TodoItem = ( props : TodoItemInterface ) => {
  return (
    <div className="todoItem">
        <div>{props.item}</div>
        <div>{props.status }</div>
    </div>

  )
}

export default TodoItem