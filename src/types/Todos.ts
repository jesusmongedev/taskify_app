import { ReactNode } from 'react'

export interface TodoProviderProps {
  children: ReactNode
}

export interface Todo {
  id: number
  todo: string
  isDone: boolean
}

export type Actions =
  | { type: 'add'; payload: string }
  | { type: 'edit'; payload: { id: number; editTodo: string } }
  | { type: 'remove'; payload: number }
  | { type: 'done'; payload: number }
