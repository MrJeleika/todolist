import { useAppSelector } from "redux/app/hooks";
import s from "./Todos.module.css";
import { Todo } from "./Todo/Todo";

export const Todos = () => {
  const { todos } = useAppSelector((state) => state.todo);

  return (
    <div className={s.body}>
      <div className={`${s.colNames}`}>
        <h1 className={s.colName}>id</h1>
        <h1 className={s.colName}>title</h1>
        <h1 className={s.colName}>description</h1>
        <h1 className={s.colName}>status</h1>
      </div>

      <div className={s.todos}>{todos && todos.map((todo, i) => <Todo todo={todo} key={i} />)}</div>
    </div>
  );
};
