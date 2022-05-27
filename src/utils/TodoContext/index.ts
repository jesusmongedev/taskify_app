import { createContext } from 'react'
import { Todo } from '../../types/Todos'

type TodoContextProvider = {
  state: Todo[]
  handleDone: (id: number) => void
  handleDelete: (id: number) => void
  handleAddTodo: (todo: string) => void
  handleEditTodo: (editTodo: string, id: number) => void
}

export const TodoStore = createContext<TodoContextProvider>(
  {} as TodoContextProvider
)
