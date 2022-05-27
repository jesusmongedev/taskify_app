import { useContext, useEffect, useRef, useState } from 'react'
import { Todo } from '../types/Todos'
import { TodoStore } from '../utils/TodoContext'

export const useTodos = () => {
  const [todo, setTodo] = useState<string>('')
  const [isEditing, setIsEditing] = useState(false)
  const [editTodo, setEditTodo] = useState('')

  const { state, handleDone, handleDelete, handleAddTodo, handleEditTodo } =
    useContext(TodoStore)

  const handleSubmitTodo = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      handleAddTodo(todo)
      setTodo('')
    }
  }

  const handleEdit = (currentTodo: Todo) => {
    if (!isEditing && !currentTodo.isDone) {
      setIsEditing(!isEditing)
      setEditTodo(currentTodo.todo)
    }
  }

  const handleSubmitEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    handleEditTodo(editTodo, id)
    setIsEditing(!isEditing)
  }

  const editRef = useRef<HTMLInputElement>(null)

  // useEffect to focus the edit input and improve UX
  useEffect(() => {
    editRef.current?.focus()
  }, [isEditing])

  return {
    todo,
    setTodo,
    todos: state,
    handleDone,
    handleDelete,
    handleSubmitTodo,
    handleEdit,
    isEditing,
    setIsEditing,
    editTodo,
    setEditTodo,
    handleSubmitEdit,
    editRef,
  }
}
