import React, { useMemo } from 'react';
import { TodoType } from '../types/TodoType';
import { useLocalStorage } from '../heplers/useLocaleStorage';

type TodosContextType = {
  todos: TodoType[],
  setTodos: (todos: TodoType[]) => void,
};

export const TodosContext = React.createContext<TodosContextType>({
  todos: [],
  setTodos: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const TodosProvider = ({ children }: Props) => {
  const [todos, setTodos] = useLocalStorage('todos');

  const TodosValues = useMemo(() => (
    {
      todos,
      setTodos,
    }
  ), [todos, setTodos]);

  return (
    <TodosContext.Provider value={TodosValues}>
      {children}
    </TodosContext.Provider>
  );
};
