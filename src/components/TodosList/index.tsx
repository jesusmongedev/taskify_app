import '../SingleTodo/SingleTodo.css'
import './TodosList.css'
import { Todo } from '../../types/Todos'
import SingleTodo from '../SingleTodo'

interface Props {
  todos: Todo[]
}

const TodosList = ({ todos }: Props) => {
  return (
    <div className="todos">
      {todos?.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} />
      ))}
    </div>
  )
}
export default TodosList
