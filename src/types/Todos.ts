export interface TodoProviderProps {
  children: JSX.Element | JSX.Element[]
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
