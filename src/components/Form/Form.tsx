import React, { useContext, useState } from "react"
import { TodosContext } from "../../utils/TodosContext";
import './Form.scss';

export const Form = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState(1);

  const onChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(+e.target.value > 1 ? +e.target.value : 1);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Date.now();

    setTodos([
      {
        id,
        title,
        priority,
      },
      ...todos
    ]);

    setPriority(1);
    setTitle('');
  };

  return (
    <form
      className="form"
      onSubmit={e => onSubmitHandler(e)}
    >
      <input
        className="form__text"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title..."
        title="ToDo Title"
        required
      />

      <input
        className="form__count"
        type="number"
        value={priority}
        onChange={onChangeCount}
        placeholder="Count..."
        title="ToDo Priority"
        required
      />

      <button
        className="form__button"
        type="submit"
        title="Add ToDo"
      >
        Add
      </button>
    </form>
  )
};
