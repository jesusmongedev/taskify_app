import { Todo } from '../../types/Todos'
import './SingleTodo.css'
import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { useTodos } from '../../hook/useTodo'

interface Props {
  todo: Todo
}

const SingleTodo = ({ todo }: Props) => {
  const {
    handleDone,
    handleDelete,
    handleEdit,
    isEditing,
    editTodo,
    setEditTodo,
    handleSubmitEdit,
    editRef,
  } = useTodos()

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
        <span className="icon" onClick={() => handleEdit(todo)}>
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
