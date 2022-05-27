import { FC, useRef } from 'react'
import './InputField.css'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleSubmitTodo: (e: React.FormEvent) => void
}

// We can use both
// const InputField = ({ todo, setTodo }: Props) => {
const InputField: FC<Props> = ({ todo, setTodo, handleSubmitTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleSubmitTodo(e)
        inputRef.current?.blur()
      }}
    >
      <input
        ref={inputRef}
        value={todo}
        type="input"
        className="input__box"
        placeholder="Enter a new task"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  )
}
export default InputField
