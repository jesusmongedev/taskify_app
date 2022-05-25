import { Todo } from '../../types/Todos'
import SingleTodo from '../SingleTodo'
import './TodosList.css'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodosList = ({ todos, setTodos }: Props) => {
  console.log(todos)
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  )
}
export default TodosList
