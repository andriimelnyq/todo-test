import { useContext } from "react"
import { TodosContext } from "../../utils/TodosContext"
import { Todo } from "../Todo";
import './TodoList.scss';

export const TodosList = () => {
  const { todos, setTodos } = useContext(TodosContext);

  const deleteTodoById = (id: number) => (
    setTodos(todos.filter(todo => todo.id !== id))
  );

  return (
    <div className="todo-list">
      {todos.length > 0
        ? todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodoById={deleteTodoById}
            />
          ))
        : (<h2 className="todo-list__title">Add your first ToDo!</h2>)
      }
    </div>
  )
}