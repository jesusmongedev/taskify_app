import { useReducer } from 'react'
import { TodoProviderProps } from '../../types/Todos'
import { TodoStore } from '../TodoContext'
import { TodoReducer } from '../TodoReducer'

export const TodoProvider = ({ children }: TodoProviderProps) => {
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
