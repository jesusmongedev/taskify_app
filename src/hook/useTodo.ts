import { useContext, useState } from 'react'
import { TodoStore } from '../utils/context/TodoStore'

export const useTodos = () => {
  const [todo, setTodo] = useState<string>('')

  const { state, handleDone, handleDelete, handleAddTodo, handleEditTodo } =
    useContext(TodoStore)

  const handleSubmitTodo = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      handleAddTodo(todo)
      setTodo('')
    }
  }

  return {
    todo,
    setTodo,
    todos: state,
    handleDone,
    handleDelete,
    handleSubmitTodo,
    handleEditTodo,
  }
}
