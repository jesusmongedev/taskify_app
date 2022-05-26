import '../SingleTodo/SingleTodo.css'
import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { useContext, useEffect, useRef, useState } from 'react'
import { TodoStore } from '../../utils/context/TodoStore'
import './TodosList.css'
import { Todo } from '../../types/Todos'
import SingleTodo from '../SingleTodo'

interface Props {
  todos: Todo[]
}

const TodosList = ({ todos }: Props) => {
  const { state } = useContext(TodoStore)

  return (
    <div className="todos">
      {todos?.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} />
      ))}
    </div>
  )
}
export default TodosList
