import { FC, useContext, useState } from 'react'
import InputField from './components/InputField'
import './App.css'
import TodosList from './components/TodosList'
import { TodoStore } from './utils/context/TodoStore'

const App: FC = () => {
  const [todo, setTodo] = useState<string>('')
  const { state, dispatch } = useContext(TodoStore)

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      dispatch({
        type: 'add',
        payload: todo,
      })
      setTodo('')
    }
  }

  return (
    <div className="App">
      <h1 className="heading">Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />

      <TodosList todos={state} />
    </div>
  )
}

export default App
