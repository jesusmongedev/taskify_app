import { FC, useRef } from 'react'
import './InputField.css'

interface Props {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  handleAddTodo: (e: React.FormEvent) => void
}

// We can use both
// const InputField = ({ todo, setTodo }: Props) => {
const InputField: FC<Props> = ({
  inputValue,
  setInputValue,
  handleAddTodo,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAddTodo(e)
        inputRef.current?.blur()
      }}
    >
      <input
        ref={inputRef}
        value={inputValue}
        type="input"
        className="input__box"
        placeholder="Enter a new task"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  )
}
export default InputField
