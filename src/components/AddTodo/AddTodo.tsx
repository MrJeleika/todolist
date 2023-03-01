import { useState } from "react";
import s from "./AddTodo.module.css";
import { useAppDispatch } from "redux/app/hooks";
import { createTodo } from "redux/slices/todoSlice";

export const AddTodo = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [titleError, setTitleError] = useState<boolean>(false);
  const [descriptionError, setDescriptionError] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleTitleChange = (val: string) => {
    if (val) {
      setTitleError(false);
    }
    setTitle(val);
  };
  const handleDescriptionChange = (val: string) => {
    if (val) {
      setDescriptionError(false);
    }
    setDescription(val);
  };

  const handleSubmit = () => {
    if (title && description) {
      // Clear inputs
      setTitle("");
      setDescription("");
      // Clear errors
      setTitleError(false);
      setDescriptionError(false);

      dispatch(createTodo({ title, description }));
    }
    if (!title) {
      setTitleError(true);
    }
    if (!description) {
      setDescriptionError(true);
    }
  };

  return (
    <div className={s.body}>
      <div>
        <h1 className={s.title}>Title:</h1>
        <span className={titleError ? s.inputTextError : ""}></span>
        <input
          className={titleError ? `${s.input} ${s.inputError}` : s.input}
          type="text"
          placeholder="Enter title"
          value={title}
          required
          onChange={(e) => handleTitleChange(e.target.value)}
        />
      </div>
      <div>
        <h1 className={s.title}>Description:</h1>
        <span className={descriptionError ? s.inputTextError : ""}></span>
        <input
          className={descriptionError ? `${s.input} ${s.inputError}` : s.input}
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => handleDescriptionChange(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
};
