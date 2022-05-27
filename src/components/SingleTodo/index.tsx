import { Todo } from '../../types/Todos'
import './SingleTodo.css'
import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { useEffect, useRef, useState } from 'react'
import { useTodos } from '../../hook/useTodo'

interface Props {
  todo: Todo
}

const SingleTodo = ({ todo }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editTodo, setEditTodo] = useState(todo.todo)

  const { handleDone, handleDelete, handleEditTodo } = useTodos()

  const handleEdit = () => {
    if (!isEditing && !todo.isDone) {
      setIsEditing(!isEditing)
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

  return (
    <form
      className="todos__item"
      onSubmit={(e) => handleSubmitEdit(e, todo.id)}
    >
      {isEditing ? (
        <input
          className="todos-text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          ref={editRef}
        />
      ) : (
        <span className={`${todo.isDone ? 'todo-text--done' : ''} todos-text`}>
          {todo.todo}
        </span>
      )}

      <div className="todos-actions">
        <span className="icon" onClick={handleEdit}>
          <AiTwotoneEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}
export default SingleTodo
