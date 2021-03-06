import InputField from './components/InputField'
import './App.css'
import TodosList from './components/TodosList'
import { useTodos } from './hook/useTodo'

const App = () => {
  const { todos, handleSubmitTodo, todo, setTodo, completedTodos } = useTodos()

  return (
    <div className="App">
      <h1 className="heading">Taskify</h1>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleSubmitTodo={handleSubmitTodo}
      />

      <TodosList todos={todos} completedTodos={completedTodos} />
    </div>
  )
}

export default App
