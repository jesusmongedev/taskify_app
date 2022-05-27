import { createContext, FC, useReducer } from 'react'
import { Todo, TodoProviderProps } from '../../../types/Todos'
import { TodoReducer } from '../../reducer/TodoReducer'

type TodoContextProvider = {
  state: Todo[]
  handleDone: (id: number) => void
  handleDelete: (id: number) => void
  handleAddTodo: (todo: string) => void
  handleEditTodo: (editTodo: string, id: number) => void
}

const TodoStore = createContext<TodoContextProvider>({} as TodoContextProvider)

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(TodoReducer, [])

  const handleDone = (id: number) => {
    dispatch({
      type: 'done',
      payload: id,
    })
  }

  const handleDelete = (id: number) => {
    dispatch({
      type: 'remove',
      payload: id,
    })
  }

  const handleAddTodo = (todo: string) => {
    dispatch({
      type: 'add',
      payload: todo,
    })
  }

  const handleEditTodo = (editTodo: string, id: number) => {
    dispatch({
      type: 'edit',
      payload: { editTodo, id },
    })
  }

  const value = {
    state,
    dispatch,
    handleDone,
    handleDelete,
    handleAddTodo,
    handleEditTodo,
  }
  return <TodoStore.Provider value={value}>{children}</TodoStore.Provider>
}

export { TodoStore, TodoProvider }
