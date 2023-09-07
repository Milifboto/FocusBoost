import type { TodoTitle } from '../types/types.d.ts'
import { CreateTodo } from './CreateTodo.tsx'

interface Props {
  saveTodo: (title: string) => void
}

export const Header: React.FC<Props> = ({ saveTodo }) => {
  return (
    <header>
      <h1>todo</h1>
      <CreateTodo saveTodo={saveTodo} />
    </header>
  )
}
