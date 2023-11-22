import React from "react";
import { TodoType } from "../../types/TodoType";
import './Todo.scss';

type Props = {
  todo: TodoType,
  deleteTodoById: (id: number) => void,
};

export const Todo:React.FC<Props> = ({ todo, deleteTodoById }) => {
  const { id, priority, title } = todo;

  return (
    <div className="todo">
      <div className="todo__main">
        <div className="todo__priority">{priority}</div>
        <h6 className="todo__title">{title}</h6>
      </div>

      <button
        className="todo__button"
        onClick={() => deleteTodoById(id)}
        title="Delete ToDo"
      >
        &#10006;
      </button>
    </div>
  )
};
