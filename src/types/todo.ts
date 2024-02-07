export interface TodoItemInterface {
  id?: number;
  item: string;
  status: todoStatus;
}

export interface Todos {
  todosList: TodoItemInterface[];
}

export enum todoStatus {
  PENDING = "pending",
  FINISHED = "finished",
  STARTING = "starting",
}
