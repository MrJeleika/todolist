

export interface IAddTodo{
  title: string;
  description: string;
}
export interface IChangeTodoStatus{
  id: number;
  status: boolean;
}

export interface ITodo{
  id: number;
  title: string;
  description: string;
  status: boolean
}


export interface IInitalState {
  todos: ITodo[]
}

export interface DOMEvent<T extends EventTarget> extends Event {
  readonly target: T
}