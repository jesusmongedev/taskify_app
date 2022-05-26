import { createContext, FC, useReducer } from 'react'
import { Actions, Todo, TodoProviderProps } from '../../../types/Todos'
import { TodoReducer } from '../../reducer/TodoReducer'

type TodoContextProvider = {
  state: Todo[]
}

const TodoStore = createContext<TodoContextProvider>({} as TodoContextProvider)

const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, [])
  const value = { state, dispatch }
  return <TodoStore.Provider value={value}>{children}</TodoStore.Provider>
}

export { TodoStore, TodoProvider }
