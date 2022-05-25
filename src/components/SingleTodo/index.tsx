import { Todo } from '../../types/Todos'
import './SingleTodo.css'
import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { useEffect, useRef, useState } from 'react'

interface Props {
  key: string | number
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos, key }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editTodo, setEditTodo] = useState(todo.inputValue)

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  const handleEdit = () => {
    if (!isEditing && !todo.isDone) {
      setIsEditing(!isEditing)
    }
  }
  console.log(isEditing)

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleSubmitEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, inputValue: editTodo } : todo
      )
    )
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
          {todo.inputValue}
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
