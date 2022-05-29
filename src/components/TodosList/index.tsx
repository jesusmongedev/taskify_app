import '../SingleTodo/SingleTodo.css'
import './TodosList.css'
import { Todo } from '../../types/Todos'
import SingleTodo from '../SingleTodo'

interface Props {
  todos: Todo[]
  completedTodos: Todo[]
}

const TodosList = ({ todos, completedTodos }: Props) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Tasks {todos.length}</span>
        {todos?.map((todo) => (
          <SingleTodo todo={todo} key={todo.id} />
        ))}
      </div>
      <div className="todos completed">
        <span className="todos__heading">
          Completed Tasks {completedTodos.length}
        </span>
        {completedTodos?.map((completedTodo) => (
          <SingleTodo todo={completedTodo} key={completedTodo.id} />
        ))}
      </div>
    </div>
  )
}
export default TodosList
