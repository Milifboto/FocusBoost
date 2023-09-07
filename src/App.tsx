import { Route, Routes } from 'react-router-dom'
import TodoList from './view/TodoList'

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<TodoList />} />
      </Routes>
    </div>
  )
}

export default App
