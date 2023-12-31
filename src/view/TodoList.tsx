import { useState } from 'react'
import type {
  TodoId,
  TodoIdAndCompleted,
  FilterValue,
  TodoTitle,
} from '../types/types.d.ts'
import { Todos } from '../components/Todos'
import { TODO_FILTERS } from '../consts/consts.ts'
import { Footer } from '../components/Footer.tsx'
import { Header } from '../components/Header.tsx'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false,
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false,
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false,
  },
]

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  )

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: TodoIdAndCompleted): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        }
      }
      return todo
    })
    setTodos(newTodos)
  }
  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount
  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = (title: string): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false,
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }
  return (
    <div>
      <h1>Todo List</h1>
      <Header saveTodo={handleAddTodo} />
      <Todos
        todos={filteredTodos}
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
      />
      <Footer
        activeCount={activeCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        completedCount={completedCount}
        onClearCompleted={handleRemoveCompleted}
      />
    </div>
  )
}

export default TodoList
