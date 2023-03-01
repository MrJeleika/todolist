import { ITodo } from "types";
import s from "./Modal.module.css";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  todo: ITodo;
  handleChecked: () => void;
}

export const Modal = ({ isOpen, setIsOpen, todo, handleChecked }: Props) => {
  return (
    <>
      {isOpen && (
        <div className={s.background}>
          <div className={s.body}>
            <h1 className={s.title}>{todo.title}</h1>
            <h3 className={s.descriptionTitle}>Description</h3>
            <p className={s.description}>{todo.description}</p>
            <div className={s.status}>
              Status:{" "}
              <input type="checkbox" name="status" onChange={handleChecked} checked={todo.status} />
            </div>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};
