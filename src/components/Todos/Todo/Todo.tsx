import { ITodo } from "types";
import s from "./Todo.module.css";
import { Modal } from "components/Modal/Modal";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeTodoStatus } from "redux/slices/todoSlice";

interface Props {
  todo: ITodo;
}

export const Todo = ({ todo }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleChecked = () => {
    dispatch(changeTodoStatus({ id: todo.id, status: isChecked }));
    setIsChecked(!isChecked);
  };

  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleOpen = (e: HTMLDivElement) => {
    if (!checkboxRef.current?.contains(e)) setIsOpen(true);
  };

  return (
    <>
      <div className={s.todo} onClick={(e) => handleOpen(e.target as HTMLDivElement)}>
        <div className={s.cell}>{todo.id}.</div>
        <div className={s.cell}>{todo.title}</div>
        <div className={s.cell}>{todo.description}</div>
        <div className={s.cell}>
          <input
            ref={checkboxRef}
            type="checkbox"
            onChange={handleChecked}
            checked={todo.status}
            name="status"
          />
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} todo={todo} handleChecked={handleChecked} />
    </>
  );
};
