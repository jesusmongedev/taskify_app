import { FC, useState } from 'react'
import { Todo } from './types/Todos'
import InputField from './components/InputField'
import './App.css'
import TodosList from './components/TodosList'

const App: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()

    if (inputValue) {
      setTodos([...todos, { id: Date.now(), inputValue, isDone: false }])
      setInputValue('')
    }
  }

  console.log(todos)

  return (
    <div className="App">
      <h1 className="heading">Taskify</h1>
      <InputField
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAddTodo={handleAddTodo}
      />
      <TodosList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
